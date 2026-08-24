import {
  getCodeforcesUser,
  getCodeforcesSubmissions,
  getLeetCodeProfile,
  getLeetCodeSolved,
} from "../services/dsaService.js";


// ========================================
// CODEFORCES
// ========================================

export const fetchCodeforcesStats = async (handle) => {
  const [user, submissions] = await Promise.all([
    getCodeforcesUser(handle),
    getCodeforcesSubmissions(handle),
  ]);

  const solvedProblems = new Set();

  submissions.forEach((submission) => {
    if (submission.verdict === "OK") {
      const problem = submission.problem;

      solvedProblems.add(
        `${problem.contestId}-${problem.index}`
      );
    }
  });

  return {
    platform: "Codeforces",
    username: user.handle,
    rating: user.rating ?? 0,
    maxRating: user.maxRating ?? 0,
    rank: user.rank ?? "Unrated",
    maxRank: user.maxRank ?? "Unrated",
    problems: solvedProblems.size,
    link: `https://codeforces.com/profile/${user.handle}`,
  };
};


// ========================================
// LEETCODE
// ========================================

export const fetchLeetCodeStats = async (username) => {

  const [profile, solved] = await Promise.all([
    getLeetCodeProfile(username),
    getLeetCodeSolved(username),
  ]);

  return {
    platform: "LeetCode",

    username: profile.username,

    // Global ranking
    ranking: profile.ranking ?? "N/A",

    // Your max rating
    rating: 1623,

    // Problem statistics
    problems: solved.solvedProblem ?? 0,

    easy: solved.easySolved ?? 0,

    medium: solved.mediumSolved ?? 0,

    hard: solved.hardSolved ?? 0,

    link: `https://leetcode.com/u/${profile.username}/`,
  };
};