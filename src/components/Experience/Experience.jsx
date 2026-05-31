import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    date: "2018",
    title: "Class X — CBSE",
    org: "Rawal International School",
    desc: "Completed secondary education with 79.6%, building a solid academic foundation in science and mathematics.",
  },
  {
    date: "2020",
    title: "Class XII — CBSE",
    org: "Rawal International School",
    desc: "Completed senior secondary education with 80.6%, strengthening core technical and analytical skills.",
  },
  {
    date: "JUN 2023 – AUG 2023",
    title: "Web Developer",
    org: "GYMMI Startup",
    desc: "Developed responsive UIs using React.js, integrated backend APIs, managed data flow in a MERN Stack environment. Collaborated via Git/GitHub in an agile team and contributed to debugging, testing, and performance optimisation.",
  },
  {
    date: "2021 – 2025",
    title: "B.Tech Computer Science Engineering",
    org: "Manav Rachna International Institute of Research & Studies",
    desc: "Graduated with 7.0 CGPA. Core coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks. Specialised in Full Stack Web Development with the MERN Stack.",
  },
  {
    date: "DEC 2025 – MAY 2026",
    title: "Full Stack Web Developer Intern",
    org: "FunkVibes",
    desc: "Worked on maintaining and enhancing a fashion e-commerce platform, implementing new features, improving performance, fixing issues, and contributing to a seamless shopping experience across devices.",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const lineFillRef = useRef(null);

  useGSAP(
    () => {
      const wrap = timelineRef.current;
      const items = gsap.utils.toArray(".tl-item", wrap);

      items.forEach((item) => {
        const card = item.querySelector(".tl-card");
        const dot = item.querySelector(".tl-dot");
        gsap.set(card, { opacity: 0.18, y: 60, filter: "blur(10px)" });
        gsap.set(dot, { scale: 0.9, opacity: 0.55 });
      });

      gsap.set(lineFillRef.current, { scaleY: 0, transformOrigin: "top" });
      gsap.to(lineFillRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      items.forEach((item) => {
        const card = item.querySelector(".tl-card");
        const dot = item.querySelector(".tl-dot");

        ScrollTrigger.create({
          trigger: item,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(card, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" });
              gsap.to(dot, { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" });
              item.classList.add("is-active");
            } else {
              gsap.to(card, { opacity: 0.18, y: 60, filter: "blur(10px)", duration: 0.7, ease: "power3.out" });
              gsap.to(dot, { scale: 0.9, opacity: 0.55, duration: 0.35, ease: "power3.out" });
              item.classList.remove("is-active");
            }
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section className="journey" ref={sectionRef} id="timeline">
      <div className="journey-hero">
        <p className="journey-kicker">02. JOURNEY</p>
        <h2 className="journey-title">My Path</h2>
        <p className="journey-sub">
          From school to internship to graduation — a timeline of the milestones that shaped me as a developer.
        </p>
      </div>

      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line">
          <span className="timeline-line-bg" />
          <span className="timeline-line-fill" ref={lineFillRef} />
        </div>

        {TIMELINE.map((t, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div className={`tl-item ${side}`} key={`${t.date}-${i}`}>
              <div className="tl-side tl-left">
                {side === "left" ? (
                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-h">{t.title}</h3>
                    <div className="tl-org">{t.org}</div>
                    <p className="tl-desc">{t.desc}</p>
                  </article>
                ) : null}
              </div>
              <div className="tl-center">
                <span className="tl-dot" aria-hidden="true" />
              </div>
              <div className="tl-side tl-right">
                {side === "right" ? (
                  <article className="tl-card">
                    <div className="tl-date">{t.date}</div>
                    <h3 className="tl-h">{t.title}</h3>
                    <div className="tl-org">{t.org}</div>
                    <p className="tl-desc">{t.desc}</p>
                  </article>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
