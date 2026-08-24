// ================================
// CODEFORCES API
// ================================

export const getCodeforcesUser = async (handle) => {
  const response = await fetch(
    `https://codeforces.com/api/user.info?handles=${handle}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Codeforces user");
  }

  const data = await response.json();

  return data.result[0];
};


export const getCodeforcesSubmissions = async (handle) => {
  const response = await fetch(
    `https://codeforces.com/api/user.status?handle=${handle}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Codeforces submissions");
  }

  const data = await response.json();

  return data.result;
};


// ================================
// LEETCODE API
// ================================

const LEETCODE_API =
  "https://alfa-leetcode-api.onrender.com";


// Profile + Ranking
export const getLeetCodeProfile = async (username) => {

  const response = await fetch(
    `${LEETCODE_API}/${username}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode profile");
  }

  return await response.json();
};


// Solved + Easy + Medium + Hard
export const getLeetCodeSolved = async (username) => {

  const response = await fetch(
    `${LEETCODE_API}/${username}/solved`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch LeetCode solved stats");
  }

  return await response.json();
};