import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "DSA", link: "#dsa" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide"
        >
          Pranshu<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 transition hover:text-cyan-400"
              >
                {item.name}
              </a>
            ))}

            <div className="flex gap-5 border-t border-white/10 pt-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;