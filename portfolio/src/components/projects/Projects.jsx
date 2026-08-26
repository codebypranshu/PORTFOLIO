import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",

      description:
        "A responsive weather application that provides real-time weather information with a clean and user-friendly interface.",

      images: [
        "/images/weather-app.png",
        "/images/weather-app-2.png",
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Weather API",
      ],

      github:
        "https://github.com/codebypranshu/weather-app",

      live:
        "https://skycast-sandy.vercel.app/",
    },

    {
      title: "Responsive Calculator",

      description:
        "A modern and responsive calculator designed to perform basic arithmetic operations with a clean and intuitive interface.",

      images: [
        "/images/calculator.png",
        "/images/calculator-2.png",
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],

      github:
        "https://github.com/codebypranshu/calculator-app",

      live:
        "https://modern-calculator-dun.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full"
      style={{
        padding:
          "clamp(64px, 8vw, 96px) clamp(20px, 4vw, 64px)",
      }}
    >
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
            className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
          >
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p
            className="mx-auto max-w-2xl leading-7 text-gray-400"
            style={{
              marginTop: "16px",
            }}
          >
            A selection of projects I've built while exploring
            web development and improving my programming skills.
          </p>
        </div>

        {/* =========================
            PROJECTS
        ========================== */}
        <div
          className="flex flex-col"
          style={{
            gap: "clamp(32px, 5vw, 64px)",
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;