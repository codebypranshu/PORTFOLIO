import LeetCodeCard from "./cards/LeetCodeCard";
import CodeforcesCard from "./cards/CodeforcesCard";

export default function DsaTracker() {
  return (
    <section
      id="dsa"
      className="w-full"
      style={{
        padding: "80px clamp(20px, 4vw, 64px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* =================================================
            SECTION HEADER
        ================================================== */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              margin: "0 0 12px 0",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#22d3ee",
            }}
          >
            Problem Solving
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: "1.1",
              fontWeight: 700,
            }}
          >
            Competitive Programming
          </h2>

          <p
            style={{
              margin: "20px auto 0",
              maxWidth: "700px",
              fontSize: "16px",
              lineHeight: "1.75",
              color: "#9ca3af",
            }}
          >
            My problem-solving progress across LeetCode and
            Codeforces, including solved problems and competitive
            programming performance.
          </p>
        </div>

        {/* =================================================
            CARDS
        ================================================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            gap: "32px",
            width: "100%",
          }}
          className="dsa-cards-grid"
        >
          {/* =================================================
              LEETCODE CARD CONTAINER
          ================================================== */}
          <div
            style={{
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",

              /* Visible card boundary */
              border: "1px solid rgba(255, 255, 255, 0.14)",
              borderRadius: "24px",

              /* Slightly different background from page */
              background: "rgba(255, 255, 255, 0.035)",

              /* Internal breathing room */
              padding: "4px",

              overflow: "hidden",

              transition:
                "border-color 0.3s ease, transform 0.3s ease",
            }}
          >
            <LeetCodeCard />
          </div>

          {/* =================================================
              CODEFORCES CARD CONTAINER
          ================================================== */}
          <div
            style={{
              width: "100%",
              minWidth: 0,
              boxSizing: "border-box",

              /* Visible card boundary */
              border: "1px solid rgba(255, 255, 255, 0.14)",
              borderRadius: "24px",

              /* Slightly different background from page */
              background: "rgba(255, 255, 255, 0.035)",

              /* Internal breathing room */
              padding: "4px",

              overflow: "hidden",

              transition:
                "border-color 0.3s ease, transform 0.3s ease",
            }}
          >
            <CodeforcesCard />
          </div>
        </div>
      </div>
    </section>
  );
}