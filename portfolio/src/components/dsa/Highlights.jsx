const Highlights = ({ data }) => {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">

      <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
        <p className="text-gray-400">Total Solved</p>
        <h3 className="text-3xl font-bold text-cyan-400">
          {data.leetcode.totalSolved}
        </h3>
      </div>

      <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
        <p className="text-gray-400">Max CF Rating</p>
        <h3 className="text-3xl font-bold text-cyan-400">
          {data.codeforces.maxRating}
        </h3>
      </div>

      <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
        <p className="text-gray-400">Hard Problems</p>
        <h3 className="text-3xl font-bold text-cyan-400">
          {data.leetcode.hard}
        </h3>
      </div>

    </div>
  );
};

export default Highlights;