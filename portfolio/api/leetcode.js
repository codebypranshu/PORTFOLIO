export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { username } = req.query;

  if (!username) {
    return res.status(400).json({
      error: "LeetCode username is required",
    });
  }

  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }
        profile {
          ranking
        }
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "LeetCode request failed",
      });
    }

    if (data.errors) {
      return res.status(400).json({
        error: data.errors[0]?.message || "LeetCode API error",
      });
    }

    const user = data.data?.matchedUser;

    if (!user) {
      return res.status(404).json({
        error: "LeetCode username not found",
      });
    }

    const submissions =
      user.submitStats?.acSubmissionNum || [];

    const easy =
      submissions.find(
        (item) => item.difficulty === "Easy"
      )?.count || 0;

    const medium =
      submissions.find(
        (item) => item.difficulty === "Medium"
      )?.count || 0;

    const hard =
      submissions.find(
        (item) => item.difficulty === "Hard"
      )?.count || 0;

    const solved =
      submissions.find(
        (item) => item.difficulty === "All"
      )?.count || easy + medium + hard;

    return res.status(200).json({
      username,
      easy,
      medium,
      hard,
      solved,
      ranking: user.profile?.ranking || null,
    });
  } catch (error) {
    console.error("LeetCode proxy error:", error);

    return res.status(500).json({
      error: "Failed to fetch LeetCode data",
    });
  }
}