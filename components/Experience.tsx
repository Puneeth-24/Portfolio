"use client";

import { experience } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import { useReveal } from "@/hooks/useReveal";

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="section">
      <div
        ref={ref}
        className={`transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="section-title">Experience & Achievements</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--glass-border)] hidden sm:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-0 sm:pl-12">
                {/* Timeline Dot */}
                <span className="hidden sm:block absolute left-[10px] top-6 w-3 h-3 rounded-full bg-[var(--accent)]" />

                <ExperienceCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
