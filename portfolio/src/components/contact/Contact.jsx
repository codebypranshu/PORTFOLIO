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
      className="w-full"
      style={{
        padding: "80px clamp(20px, 4vw, 64px)",
        boxSizing: "border-box",
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "1280px",
        }}
      >
        {/* =================================================
            SECTION HEADING
        ================================================== */}
        <div
          className="text-center"
          style={{
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
            Get In Touch
          </p>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: "1.1",
              fontWeight: 700,
            }}
          >
            Let's Connect
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
            I'm always open to discussing new opportunities,
            interesting projects, and collaborations.
          </p>
        </div>

        {/* =================================================
            CONTACT CARDS
        ================================================== */}
        <div
          className="contact-cards-grid"
          style={{
            display: "grid",

            /*
              Desktop:
              4 cards

              The media queries below progressively
              reduce this to 3 → 2 → 1.
            */
            gridTemplateColumns:
              "repeat(4, minmax(0, 1fr))",

            gap: "24px",

            width: "100%",
            alignItems: "stretch",
          }}
        >
          {/* LinkedIn */}
          <div
            className="contact-card-wrapper"
            style={{
              minWidth: 0,
              width: "100%",
            }}
          >
            <ContactCard
              icon={<FaLinkedin size={26} />}
              title="LinkedIn"
              value="Pranshu Singh"
              link="https://www.linkedin.com/in/pranshusingh727/"
            />
          </div>

          {/* GitHub */}
          <div
            className="contact-card-wrapper"
            style={{
              minWidth: 0,
              width: "100%",
            }}
          >
            <ContactCard
              icon={<FaGithub size={26} />}
              title="GitHub"
              value="codebypranshu"
              link="https://github.com/codebypranshu"
            />
          </div>

          {/* Email */}
          <div
            className="contact-card-wrapper"
            style={{
              minWidth: 0,
              width: "100%",
            }}
          >
            <ContactCard
              icon={<FaEnvelope size={26} />}
              title="Email"
              value="pranshusingh727@gmail.com"
              link="mailto:pranshusingh727@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;