import {
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaTrophy,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaGraduationCap,
    title: "Education",
    description:
      "Electrical Engineering student at NIT Jamshedpur",
  },
  {
    icon: FaLaptopCode,
    title: "Development",
    description:
      "Building modern and responsive web applications",
  },
  {
    icon: FaCode,
    title: "DSA & CP",
    description:
      "Solving problems and improving problem-solving skills",
  },
  {
    icon: FaTrophy,
    title: "Achievements",
    description:
      "Winner of Bridge Making Competition at Ojass",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full"
      style={{
        padding:
          "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 64px)",
      }}
    >
      {/* Section container */}
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "1440px",
        }}
      >
        {/* =========================
            SECTION HEADING
        ========================== */}
        <div
          className="text-center"
          style={{
            marginBottom: "clamp(40px, 5vw, 56px)",
          }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
            style={{
              marginBottom: "12px",
            }}
          >
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Developer Profile
          </h2>

        </div>

        {/* =========================
            ABOUT GRID
        ========================== */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
          "
          style={{
            gap: "clamp(20px, 2vw, 32px)",
          }}
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
                style={{
                  minHeight: "260px",
                  padding: "clamp(24px, 2.5vw, 36px)",
                }}
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-400/10
                    text-cyan-400
                  "
                  style={{
                    marginBottom: "28px",
                  }}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold sm:text-2xl"
                  style={{
                    marginBottom: "12px",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    max-w-sm
                    text-sm
                    leading-7
                    text-gray-400
                    sm:text-base
                  "
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;