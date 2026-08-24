import { useEffect, useState } from "react";
import DSACard from "./DSACard";

import {
  fetchCodeforcesStats,
  fetchLeetCodeStats,
} from "../../controllers/dsaController";

const DSA = () => {
  const [leetcode, setLeetcode] = useState(null);
  const [codeforces, setCodeforces] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        setError("");

        const [leetcodeData, codeforcesData] =
          await Promise.all([
            fetchLeetCodeStats("Bluebeetle727"),
            fetchCodeforcesStats("Beetle727"),
          ]);

        setLeetcode(leetcodeData);
        setCodeforces(codeforcesData);

      } catch (err) {
        console.error("DSA Stats Error:", err);

        setError(
          "Unable to load DSA statistics."
        );
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <section
      id="dsa"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Problem Solving
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            DSA & Competitive Programming
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            My problem-solving journey across competitive
            programming platforms.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center">

            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-gray-400">
              Loading DSA statistics...
            </div>

          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex justify-center">

            <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-6 py-4 text-red-400">
              {error}
            </div>

          </div>
        )}

        {/* Cards */}
        {!loading && !error && (
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

            {leetcode && (
              <DSACard profile={leetcode} />
            )}

            {codeforces && (
              <DSACard profile={codeforces} />
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default DSA;