import { FiExternalLink } from "react-icons/fi";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const DSACard = ({ profile }) => {
  const isLeetCode = profile.platform === "LeetCode";

  const PlatformIcon = isLeetCode
    ? SiLeetcode
    : SiCodeforces;

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

      {/* Header */}
      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-cyan-400/10 p-4">
          <PlatformIcon size={30} className="text-cyan-400" />
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {profile.platform}
          </h3>

          <p className="text-sm text-gray-500">
            @{profile.username}
          </p>
        </div>

      </div>

      {/* ================= LEETCODE ================= */}

      {isLeetCode && (
        <div className="mt-7 grid grid-cols-2 gap-4">

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">
              Total Solved
            </p>
            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {profile.problems}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">
              Global Rank
            </p>
            <p className="mt-2 text-xl font-bold text-cyan-400">
              {profile.ranking ?? "—"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">Easy</p>
            <p className="mt-2 text-xl font-bold text-green-400">
              {profile.easy || "—"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">Medium</p>
            <p className="mt-2 text-xl font-bold text-yellow-400">
              {profile.medium || "—"}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4 col-span-2">
            <p className="text-sm text-gray-500">Hard</p>
            <p className="mt-2 text-xl font-bold text-red-400">
              {profile.hard || "—"}
            </p>
          </div>

        </div>
      )}

      {/* ================= CODEFORCES ================= */}

      {!isLeetCode && (
        <div className="mt-7 grid grid-cols-2 gap-4">

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">
              Current Rating
            </p>
            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {profile.rating}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">
              Max Rating
            </p>
            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {profile.maxRating}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">
              Current Rank
            </p>
            <p className="mt-2 font-semibold capitalize text-gray-200">
              {profile.rank}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-gray-500">
              Problems Solved
            </p>
            <p className="mt-2 text-2xl font-bold text-cyan-400">
              {profile.problems || "—"}
            </p>
          </div>

        </div>
      )}

      {/* Link */}
      <a
        href={profile.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-gray-300 hover:text-cyan-400"
      >
        Visit Profile
        <FiExternalLink size={16} />
      </a>

    </div>
  );
};

export default DSACard;