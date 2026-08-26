import LeetCodeCard from "./cards/LeetCodeCard";
import CodeforcesCard from "./cards/CodeforcesCard";

export default function DsaTracker({ stats }) {
  return (
    <section id="dsa" className="section">

      <h2 className="text-5xl font-black mb-12">
        Problem Solving & Competitive Programming
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Fetches LeetCode directly */}
        <LeetCodeCard />

        {/* Fetches Codeforces directly */}
        <CodeforcesCard />

      </div>

    </section>
  );
}