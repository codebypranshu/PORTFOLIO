import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      description: "Let's connect professionally",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/pranshusingh727",
    },

    {
      name: "GitHub",
      description: "Explore my projects and code",
      icon: FaGithub,
      link: "https://github.com/codebypranshu",
    },

    {
      name: "Gmail",
      description: "Send me an email",
      icon: FaEnvelope,
      link: "mailto:your-email@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Have a project idea, collaboration opportunity, or simply want
            to say hello? Feel free to connect with me.
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {socials.map((social) => {

            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.link}
                target={social.name === "Gmail" ? undefined : "_blank"}
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >

                <div className="flex items-start justify-between">

                  <div className="rounded-xl bg-cyan-400/10 p-3">
                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />
                  </div>

                  <FiArrowUpRight
                    size={20}
                    className="text-gray-600 transition group-hover:text-cyan-400"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {social.name}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  {social.description}
                </p>

              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Contact;