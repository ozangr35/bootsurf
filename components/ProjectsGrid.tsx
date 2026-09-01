import Image from "next/image";
import { projectCapabilities, projects } from "@/lib/projects";

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden className="h-3 w-3">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

type ProjectsGridProps = {
  showCapabilities?: boolean;
};

export default function ProjectsGrid({
  showCapabilities = true,
}: ProjectsGridProps) {
  return (
    <>
      {showCapabilities && (
        <div className="cards-grid !mt-0 !mb-8">
          {projectCapabilities.map((cap, i) => (
            <article
              key={cap.title}
              className="feature-card glass-panel"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </article>
          ))}
        </div>
      )}

      <div className="cards-grid !mt-5">
        {projects.map((project, i) => (
          <article
            key={project.name}
            className="project-card"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="project-header">
              <Image
                src={project.icon}
                alt={project.name}
                width={project.iconStyle === "brand" ? 203 : 72}
                height={project.iconStyle === "brand" ? 253 : 72}
                className={
                  project.iconStyle === "brand"
                    ? "project-icon project-icon--brand"
                    : "project-icon"
                }
              />
              <div className="project-title-group">
                <h3>{project.name}</h3>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`project-link ${link.type}`}
                    >
                      {link.type === "store" ? <AppStoreIcon /> : <GlobeIcon />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-body">
              <p>{project.description}</p>
            </div>
            <div className="project-footer">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
