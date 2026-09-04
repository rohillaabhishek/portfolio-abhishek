import React from "react";

const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    desc: "Designed and developed a modern personal portfolio to showcase skills, projects, and professional experience. Features scroll-triggered animations, responsive layouts, and a clean dark aesthetic that highlights work effectively.",
    image: "/assets/images/common/portfolio-image.png",
    tags: ["React.js", "Tailwind CSS", "GSAP", "Vite", "Responsive Design"],
    links: [
      { label: "GitHub", href: "https://github.com/rohillaabhishek/portfolio-abhishek", icon: "⌂" },
    ],
  },
  {
    title: "Dubai Clean Report Builder",
    desc: "Developed a freelance web application for Dubai Clean (UAE) to automate HVAC service reporting. Built a responsive report builder with customer tracking, before-and-after image uploads, and automated PDF report generation, improving field reporting efficiency.",
    image: "/assets/images/common/dubai-clean-cover.png",
    tags: [
      "JavaScript",
      "Tailwind CSS",
      "PDFMake",
      "Canvas API",
      "Local Storage",
    ],
    links: [
    { label: "Dubai Clean Report Builder", href: "https://test-dubai-clean-v7.vercel.app/", icon: "⌂"  }
    ]
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="sectionHeader">
        <p className="sectionKicker">04. PROJECTS</p>
        <h2 className="sectionTitle">PROJECTS</h2>
        <p className="sectionSub">
          Real-world builds that demonstrate full-stack thinking, clean UI craft, and practical engineering.
        </p>
      </div>

      <div className="projectsGrid">
        {PROJECTS.map((p) => (
          <article className="projectCard" key={p.title}>
            <div className="projectMedia">
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="projectMediaOverlay" />
            </div>
            <div className="projectBody">
              <h3 className="projectTitle">{p.title}</h3>
              <p className="projectDesc">{p.desc}</p>
              <div className="projectTags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="projectFooter">
                {p.links.map((l) => (
                  <a key={l.label} className="projectLink" href={l.href} target="_blank" rel="noreferrer">
                    <span className="icon">{l.icon}</span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
