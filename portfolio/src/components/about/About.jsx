import {
  FaGraduationCap,
  FaLaptopCode,
  FaCode,
  FaTrophy,
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Electrical Engineering student at NIT Jamshedpur",
    },
    {
      icon: FaLaptopCode,
      title: "Development",
      description: "Building modern and responsive web applications",
    },
    {
      icon: FaCode,
      title: "DSA & CP",
      description: "Solving problems and improving problem-solving skills",
    },
    {
      icon: FaTrophy,
      title: "Achievements",
      description: "Winner of Bridge Making Competition at Ojass",
    },
  ];

  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Developer Profile
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            I'm a passionate developer who enjoys turning ideas into
            functional and visually appealing digital experiences.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* About Text */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">

            <h3 className="text-2xl font-bold">
              Who am I?
            </h3>

            <div className="mt-5 space-y-4 leading-7 text-gray-400">

              <p>
                I'm <span className="font-semibold text-cyan-400">
                  Pranshu Singh
                </span>, a 3rd year Electrical Engineering student at
                NIT Jamshedpur with a strong interest in Software
                Development and Data Structures & Algorithms.
              </p>

              <p>
                Although my academic background is Electrical Engineering,
                I have developed a strong passion for programming and
                building web applications using modern technologies.
              </p>

              <p>
                I enjoy solving problems, learning new technologies and
                creating projects that are useful, scalable and
                user-friendly.
              </p>

            </div>

            {/* Skills */}
            <div className="mt-8">

              <h4 className="mb-4 font-semibold text-white">
                Technologies I work with
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  "C++",
                  "C",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Git",
                  "GitHub",
                  "DSA",
                  "Competitive Programming",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* Highlights */}
          <div className="grid gap-5 sm:grid-cols-2">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
                >

                  <div className="mb-5 w-fit rounded-xl bg-cyan-400/10 p-4">
                    <Icon
                      size={25}
                      className="text-cyan-400"
                    />
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;