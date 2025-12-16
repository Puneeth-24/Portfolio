"use client";
import { Project } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

export default function ProjectCard({ project }: { project: Project }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`glass glass-hover p-6 transition-all duration-700
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className="text-muted mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded border border-[var(--glass-border)]"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="text-sm text-muted list-disc list-inside mb-4">
        {project.highlights.map(h => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="flex gap-4 text-sm font-medium">
        <a href={project.github} target="_blank">GitHub</a>
        {project.demo && <a href={project.demo} target="_blank">Live</a>}
      </div>
    </div>
  );
}
