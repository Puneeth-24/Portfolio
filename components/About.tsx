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
I’m an AIML student at New Horizon College of Engineering with a deep interest in building intelligent, scalable, and real-world systems. 
        </p>

        <p className="text-muted leading-relaxed">
I enjoy working across the stack,from engineering multi-agent AI systems to developing complete full-stack projects. I’m constantly exploring new technologies, experimenting with artificial intelligence and machine learning, and sharpening my problem-solving skills to bring impactful ideas to life.
        </p>
      </div>
    </section>
  );
}
