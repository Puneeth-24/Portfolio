"use client";
import { skills } from "@/data/skills";
import { useReveal } from "@/hooks/useReveal";

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass glass-hover p-6">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full border border-[var(--glass-border)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="section">
      <div
        ref={ref}
        className={`transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillBlock title="Frontend" items={skills.frontend} />
          <SkillBlock title="Backend" items={skills.backend} />
          <SkillBlock title="Databases" items={skills.databases} />
          <SkillBlock title="AI / ML" items={skills.ai_ml} />
          <SkillBlock title="Tools" items={skills.tools} />
        </div>
      </div>
    </section>
  );
}
