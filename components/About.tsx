"use client";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="section">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="section-title">About Me</h2>

        <p className="text-muted leading-relaxed mb-4">
          I’m a computer science student at New Horizon College of Engineering
          with a strong interest in building scalable, real-world systems.
        </p>

        <p className="text-muted leading-relaxed">
          I enjoy working across the stack—from polished React interfaces to
          backend services and applied machine learning—while continuously
          improving my problem-solving skills.
        </p>
      </div>
    </section>
  );
}
