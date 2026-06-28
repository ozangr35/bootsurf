import { technologyCategories } from "@/lib/technology";

export default function TechnologyGrid() {
  return (
    <div className="cards-grid">
      {technologyCategories.map((item) => (
        <article key={item.title} className="feature-card glass-panel">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="project-tags">
            {item.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
