import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <article
      style={{
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.10)",
        borderRadius: "24px",
        background: "rgba(255, 255, 255, 0.035)",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          INNER CARD CONTENT

          IMPORTANT:
          Use explicit padding here so content can NEVER
          touch the outer card border.
      ====================================================== */}
      <div
        style={{
          padding: "32px",
        }}
      >
        {/* ===================================================
            TITLE + DESCRIPTION
        ==================================================== */}
        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(24px, 3vw, 32px)",
              lineHeight: "1.2",
              fontWeight: 700,
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              margin: "14px 0 0 0",
              maxWidth: "900px",
              fontSize: "16px",
              lineHeight: "1.75",
              color: "#9ca3af",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* ===================================================
            PROJECT IMAGES
        ==================================================== */}
        <div
          className="project-images-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            gap: "24px",
            width: "100%",
          }}
        >
          {project.images?.map((image, index) => (
            <div
              key={`${project.title}-image-${index}`}
              style={{
                width: "100%",
                overflow: "hidden",
                borderRadius: "18px",
                border:
                  "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================
            TECHNOLOGY STACK
        ==================================================== */}
        <div
          style={{
            marginTop: "32px",
            padding: "22px",
            borderRadius: "18px",
            border:
              "1px solid rgba(255, 255, 255, 0.10)",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: "16px",
              fontSize: "13px",
              lineHeight: "1.4",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#6b7280",
            }}
          >
            Technologies Used
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "8px 13px",
                  borderRadius: "9px",
                  border:
                    "1px solid rgba(34, 211, 238, 0.20)",
                  background:
                    "rgba(34, 211, 238, 0.05)",
                  fontSize: "14px",
                  lineHeight: "1.3",
                  color: "#d1d5db",
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* ===================================================
            LINKS
        ==================================================== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "22px",
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
              padding: "11px 18px",
              borderRadius: "11px",
              border:
                "1px solid rgba(255, 255, 255, 0.15)",
              background: "rgba(255, 255, 255, 0.04)",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <FaGithub size={16} />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
              padding: "11px 18px",
              borderRadius: "11px",
              background: "#22d3ee",
              color: "#000000",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <FaExternalLinkAlt size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;