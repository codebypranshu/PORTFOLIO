import axios from "axios";

export const getDSAStats = async (req, res) => {
  console.log("API HIT");

  let codeforces = {};
  let leetcode = {};

  // ✅ CODEFORCES
  try {
    const cf = await axios.get(
      "https://codeforces.com/api/user.info?handles=Beetle727"
    );

    codeforces = {
      rating: cf.data.result[0]?.rating ?? "N/A",
      maxRating: cf.data.result[0]?.maxRating ?? "N/A",
      rank: cf.data.result[0]?.rank ?? "N/A",
    };

  } catch (err) {
    console.log("CF ERROR:", err.message);

    codeforces = {
      rating: "N/A",
      maxRating: "N/A",
      rank: "N/A",
    };
  }

  // ✅ LEETCODE (REAL)
  try {
    const lc = await axios.post("https://leetcode.com/graphql", {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: {
        username: "Bluebeetle727", // 👈 change if needed
      },
    });
    console.log("LC USER:", lc.data.data.matchedUser);

    console.log("LC RESPONSE:", JSON.stringify(lc.data, null, 2));

    const user = lc.data?.data?.matchedUser;

    if (!user) {
      console.log("❌ User not found");

      leetcode = {
        totalSolved: "User not found",
        easy: "-",
        medium: "-",
        hard: "-",
      };
    } else {
      const stats = user.submitStats.acSubmissionNum;

      leetcode = {
        totalSolved:
          stats.find((s) => s.difficulty === "All")?.count ?? 0,
        easy:
          stats.find((s) => s.difficulty === "Easy")?.count ?? 0,
        medium:
          stats.find((s) => s.difficulty === "Medium")?.count ?? 0,
        hard:
          stats.find((s) => s.difficulty === "Hard")?.count ?? 0,
      };
    }

  } catch (err) {
    console.log("LC ERROR:", err.message);

    leetcode = {
      totalSolved: "N/A",
      easy: "N/A",
      medium: "N/A",
      hard: "N/A",
    };
  }

  res.json({ codeforces, leetcode });
};