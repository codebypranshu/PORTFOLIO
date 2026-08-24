const LEETCODE_URL = "https://leetcode.com/graphql";

export const getLeetCodeStats = async (username) => {
  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username

        profile {
          ranking
          reputation
        }

        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  const response = await fetch(LEETCODE_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query,
      variables: {
        username,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `LeetCode request failed: ${response.status}`
    );
  }

  const data = await response.json();

  if (!data.data?.matchedUser) {
    throw new Error("LeetCode user not found");
  }

  return data.data.matchedUser;
};