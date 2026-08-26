import { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const USERNAME = import.meta.env.VITE_CODEFORCES_HANDLE;

export default function CodeforcesCard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodeforcesUser = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!USERNAME) {
          throw new Error(
            "VITE_CODEFORCES_HANDLE is not configured"
          );
        }

        const response = await fetch(
          `https://codeforces.com/api/user.info?handles=${encodeURIComponent(
            USERNAME
          )}`
        );

        if (!response.ok) {
          throw new Error(
            `Codeforces API request failed: ${response.status}`
          );
        }

        const data = await response.json();

        if (data.status !== "OK") {
          throw new Error(
            data.comment || "Unable to fetch Codeforces profile"
          );
        }

        const profile = data.result?.[0];

        if (!profile) {
          throw new Error("Codeforces username not found");
        }

        setUser(profile);
      } catch (err) {
        console.error("Codeforces API error:", err);
        setError(
          err.message || "Unable to load Codeforces data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCodeforcesUser();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="glass rounded-3xl p-8 min-h-[380px]">
        <div className="animate-pulse">
          <div className="h-8 w-40 bg-zinc-700/50 rounded mb-8" />

          <div className="h-20 w-20 bg-zinc-700/50 rounded-full mx-auto mb-6" />

          <div className="h-5 bg-zinc-700/50 rounded mb-4" />
          <div className="h-5 bg-zinc-700/50 rounded mb-4" />
          <div className="h-5 bg-zinc-700/50 rounded" />
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="glass rounded-3xl p-8 min-h-[380px]">
        <div className="text-violet-400 mb-5">
          <FaTrophy size={30} />
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Codeforces
        </h3>

        <p className="text-red-400 text-sm">
          {error}
        </p>
      </div>
    );
  }

  return (
    <motion.a
      href={`https://codeforces.com/profile/${USERNAME}`}
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
          <FaTrophy size={30} />
        </div>

        <span className="text-xs text-zinc-500">
          @{user.handle}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold">
        Codeforces
      </h3>

      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={user.titlePhoto}
          alt={user.handle}
          className="w-20 h-20 rounded-full object-cover border-2 border-zinc-700"
        />
      </div>

      {/* Name */}
      <div className="text-center">
        <p className="text-lg font-semibold">
          {user.firstName || user.lastName
            ? `${user.firstName || ""} ${
                user.lastName || ""
              }`.trim()
            : user.handle}
        </p>

        <p className="text-sm text-zinc-500">
          @{user.handle}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 pt-5 border-t border-zinc-700">

        {/* Current Rating */}
        <div className="text-center">
          <p className="text-xl font-bold text-amber-300">
            {user.rating ?? "—"}
          </p>

          <p className="text-xs text-zinc-400 mt-1">
            Rating
          </p>
        </div>

        {/* Max Rating */}
        <div className="text-center">
          <p className="text-xl font-bold text-green-400">
            {user.maxRating ?? "—"}
          </p>

          <p className="text-xs text-zinc-400 mt-1">
            Max Rating
          </p>
        </div>

        {/* Rank */}
        <div className="text-center">
          <p className="text-sm font-bold text-violet-400 capitalize">
            {user.rank || "Unrated"}
          </p>

          <p className="text-xs text-zinc-400 mt-1">
            Rank
          </p>
        </div>
      </div>

      {/* Additional data */}
      <div className="space-y-2 text-sm border-t border-zinc-700 pt-5">

        {user.organization && (
          <div className="flex justify-between">
            <span className="text-zinc-500">
              Organization
            </span>

            <span className="text-zinc-300 text-right max-w-[60%]">
              {user.organization}
            </span>
          </div>
        )}

        {user.country && (
          <div className="flex justify-between">
            <span className="text-zinc-500">
              Country
            </span>

            <span className="text-zinc-300">
              {user.country}
            </span>
          </div>
        )}

        {user.city && (
          <div className="flex justify-between">
            <span className="text-zinc-500">
              City
            </span>

            <span className="text-zinc-300">
              {user.city}
            </span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-zinc-500">
            Contribution
          </span>

          <span className="text-zinc-300">
            {user.contribution ?? 0}
          </span>
        </div>
      </div>

      {/* Profile link */}
      <div className="text-xs text-zinc-500 text-center">
        Click to view Codeforces profile →
      </div>
    </motion.a>
  );
}