import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Pranshu Singh. All rights reserved.
        </p>

        <div className="flex gap-4">

          <a
            href="https://github.com/codebypranshu"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-cyan-400"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/pranshusingh727"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;