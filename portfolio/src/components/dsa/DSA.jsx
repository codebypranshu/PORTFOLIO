import { useEffect, useState } from "react";
import API from "../../services/api";
import DSACard from "./DSACard";
import Highlights from "./Highlights";

const DSA = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/dsa");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching DSA data:", err);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <p className="text-center text-gray-400 mt-10">
        Loading DSA data...
      </p>
    );
  }

  return (
    <section id="dsa" className="px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        DSA & Competitive Programming
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* LeetCode */}
        <DSACard
          profile={{
            platform: "LeetCode",
            username: "Bluebeetle727",
            rating: data.leetcode.totalSolved,
            problems: data.leetcode.totalSolved,
            ranking: data.leetcode.ranking,
            easy: data.leetcode.easy,
            medium: data.leetcode.medium,
            hard: data.leetcode.hard,
            link: "https://leetcode.com/Bluebeetle727",
          }}
        />

        {/* Codeforces */}
        <DSACard
          profile={{
            platform: "Codeforces",
            username: "Beetle727",
            rating: data.codeforces.rating,
            maxRating: data.codeforces.maxRating,
            rank: data.codeforces.rank,
            problems: "—",
            link: "https://codeforces.com/profile/Beetle727",
          }}
        />

      </div>

      {/* ⭐ Highlights Section */}
      <Highlights data={data} />

    </section>
  );
};

export default DSA;