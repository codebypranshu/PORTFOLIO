import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const USERNAME = import.meta.env.VITE_LEETCODE_USERNAME;

export default function LeetCodeCard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        if (!USERNAME) {
          throw new Error(
            "VITE_LEETCODE_USERNAME is not configured"
          );
        }

        const response = await fetch(
          `/api/leetcode?username=${encodeURIComponent(
            USERNAME
          )}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Failed to fetch LeetCode data"
          );
        }

        setStats(data);
      } catch (err) {
        console.error("LeetCode error:", err);

        setError(
          err.message || "Unable to load LeetCode data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  if (loading) {
    return (
      <div className="glass rounded-3xl p-8 min-h-[380px]">
        <div className="animate-pulse">
          <div className="h-8 w-40 bg-zinc-700/50 rounded mb-8" />

          <div className="h-5 bg-zinc-700/50 rounded mb-5" />
          <div className="h-5 bg-zinc-700/50 rounded mb-5" />
          <div className="h-5 bg-zinc-700/50 rounded mb-5" />

          <div className="h-10 bg-zinc-700/50 rounded mt-8" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass rounded-3xl p-8 min-h-[380px]">
        <div className="text-violet-400 mb-5">
          <FaCode size={30} />
        </div>

        <h3 className="text-2xl font-bold mb-4">
          LeetCode
        </h3>

        <p className="text-red-400 text-sm">
          {error}
        </p>
      </div>
    );
  }

  return (
    <motion.a
      href={`https://leetcode.com/u/${USERNAME}/`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="glass glow-pill rounded-3xl p-8 flex flex-col gap-6 transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-violet-400">
          <FaCode size={30} />
        </div>

        <span className="text-xs text-zinc-500">
          @{USERNAME}
        </span>
      </div>

      <h3 className="text-2xl font-bold">
        LeetCode
      </h3>

      {/* Problems */}
      <div className="space-y-5">

        {/* Easy */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span>Easy</span>
          </div>

          <span className="font-semibold">
            {stats.easy}
          </span>
        </div>

        {/* Medium */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span>Medium</span>
          </div>

          <span className="font-semibold">
            {stats.medium}
          </span>
        </div>

        {/* Hard */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span>Hard</span>
          </div>

          <span className="font-semibold">
            {stats.hard}
          </span>
        </div>
      </div>

      {/* Total + Ranking */}
      <div className="border-t border-zinc-700 pt-5 space-y-4">

        <div className="flex justify-between">
          <span className="text-zinc-400">
            Problems Solved
          </span>

          <span className="text-amber-300 font-bold">
            {stats.solved}
          </span>
        </div>

        {stats.ranking && (
          <div className="flex justify-between">
            <span className="text-zinc-400">
              Global Ranking
            </span>

            <span className="text-green-400 font-semibold">
              #{stats.ranking.toLocaleString()}
            </span>
          </div>
        )}
      </div>

      <div className="text-xs text-zinc-500 text-center">
        Click to view LeetCode profile →
      </div>
    </motion.a>
  );
}