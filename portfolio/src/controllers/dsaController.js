import {
  getCodeforcesUser,
  getCodeforcesSubmissions,
} from "../services/dsaService.js";

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