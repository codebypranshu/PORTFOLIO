import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",

      description:
        "A responsive weather application that provides real-time weather information with a clean and user-friendly interface.",

      image: "/images/weather-app.png",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Weather API",
      ],

      github:
        "https://github.com/codebypranshu",

      live:
        "https://example.com",
    },

    {
      title: "Responsive Calculator",

      description:
        "A modern and responsive calculator designed to perform basic arithmetic operations with a clean and intuitive interface.",

      image: "/images/calculator.png",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],

      github:
        "https://github.com/codebypranshu",

      live:
        "https://example.com",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            A selection of projects I've built while exploring
            web development and improving my programming skills.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">

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