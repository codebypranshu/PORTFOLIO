import { useEffect, useState } from "react";
import DSACard from "./DSACard";
import { fetchCodeforcesStats } from "../../controllers/dsaController";

const DSA = () => {
  const [codeforces, setCodeforces] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchCodeforcesStats("Beetle727");

        setCodeforces(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load Codeforces statistics.");
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  const leetcode = {
    platform: "LeetCode",
    username: "Bluebeetle727",

    // Your current stats
    rating: 1623,
    problems: "110+",

    link: "https://leetcode.com/u/Bluebeetle727/",
  };

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
            My problem-solving journey across competitive programming
            platforms.
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center">
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-gray-400">
              Loading Codeforces statistics...
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex justify-center">
            <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-6 py-4 text-red-400">
              {error}
            </div>
          </div>
        )}

        {/* Cards */}
        {!loading && !error && (
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

            {/* LeetCode */}
            <DSACard profile={leetcode} />

            {/* Codeforces */}
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