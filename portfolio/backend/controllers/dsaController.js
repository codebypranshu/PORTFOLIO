import axios from "axios";

export const getDSAStats = async (req, res) => {
  try {
    // Codeforces API
    const cf = await axios.get(
      "https://codeforces.com/api/user.info?handles=Beetle727"
    );

    // LeetCode (use unofficial API)
    const lc = await axios.get(
  "https://leetcode-api-pied.vercel.app/user/Bluebeetle727"
);

    res.json({
      codeforces: {
        rating: cf.data.result[0].rating,
        maxRating: cf.data.result[0].maxRating,
      },
      leetcode: {
        totalSolved: lc.data.totalSolved,
        easy: lc.data.easySolved,
        medium: lc.data.mediumSolved,
        hard: lc.data.hardSolved,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch DSA data" });
  }
};
