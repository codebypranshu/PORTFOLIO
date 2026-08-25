import ContactCard from "./ContactCard";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            I'm always open to discussing new opportunities,
            interesting projects, and collaborations.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">

          {/* LinkedIn */}
          <ContactCard
            icon={<FaLinkedin size={26} />}
            title="LinkedIn"
            value="Pranshu Singh"
            link="https://www.linkedin.com/in/pranshusingh727/"
          />

          {/* GitHub */}
          <ContactCard
            icon={<FaGithub size={26} />}
            title="GitHub"
            value="codebypranshu"
            link="https://github.com/codebypranshu"
          />

          {/* Gmail */}
          <ContactCard
            icon={<FaEnvelope size={26} />}
            title="Email"
            value="pranshusingh727@gmail.com"
            link="mailto:pranshusingh727@gmail.com"
          />

        </div>

      </div>
    </section>
  );
};

export default Contact;