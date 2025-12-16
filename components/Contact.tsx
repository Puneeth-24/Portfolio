"use client";

import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="contact"
      className="section"
    >
      <div
        ref={ref}
        className={`transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="section-title">Contact</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="glass glass-hover p-8">
            <h3 className="text-xl font-semibold mb-4">
              Let’s connect
            </h3>

            <p className="text-muted mb-6 leading-relaxed">
              I’m actively looking for internship opportunities and
              collaborative projects. Feel free to reach out if you’d
              like to discuss technology, projects, or opportunities.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:puneethjains2005@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--accent)] transition"
              >
                <Mail size={18} />
                <span>puneethjains2005@gmail.com</span>
              </a>

              <a
                href="https://github.com/Puneeth-24"
                target="_blank"
                className="flex items-center gap-3 hover:text-[var(--accent)] transition"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/puneeth-jain-s-13534132a/"
                target="_blank"
                className="flex items-center gap-3 hover:text-[var(--accent)] transition"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Resume Card */}
          <div className="glass glass-hover p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Resume
              </h3>

              <p className="text-muted mb-6 leading-relaxed">
                Download my resume to get a detailed overview of my
                skills, projects, and experience.
              </p>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2 w-fit"
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
