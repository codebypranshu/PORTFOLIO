import { getLeetCodeStats } from "../services/leetcodeService.js";

export const getStats = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await getLeetCodeStats(username);

    const submissions = user.submitStatsGlobal.acSubmissionNum;

    const totalSolved =
      submissions.find(
        (item) => item.difficulty === "All"
      )?.count || 0;

    const easySolved =
      submissions.find(
        (item) => item.difficulty === "Easy"
      )?.count || 0;

    const mediumSolved =
      submissions.find(
        (item) => item.difficulty === "Medium"
      )?.count || 0;

    const hardSolved =
      submissions.find(
        (item) => item.difficulty === "Hard"
      )?.count || 0;

    res.json({
      platform: "LeetCode",
      username: user.username,
      ranking: user.profile.ranking,
      problems: totalSolved,
      easy: easySolved,
      medium: mediumSolved,
      hard: hardSolved,
      link: `https://leetcode.com/u/${user.username}/`,
    });

  } catch (error) {
    console.error("LeetCode Error:", error);

    res.status(500).json({
      message: "Unable to fetch LeetCode statistics",
    });
  }
};