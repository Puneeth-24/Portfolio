"use client";

import { certifications } from "@/data/certifications";
import CertificationCard from "./CertificationCard";
import { useReveal } from "@/hooks/useReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Certifications() {
  const { ref, visible } = useReveal();

  const completedRef = useRef<HTMLDivElement>(null);
  const participatedRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: any) => {
    ref.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = (ref: any) => {
    ref.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const completed = certifications.filter((c) => c.type === "completion");
  const participated = certifications.filter((c) => c.type === "participation");

  return (
    <section id="certifications" className="section">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="section-title">Certifications</h2>

        {/* =================== COURSE COMPLETIONS =================== */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">
            Course Completions
          </h3>

          {/* Wrapper that holds arrows + scroll area */}
          <div className="flex items-center gap-4">

            {/* Left Arrow */}
            <button
              onClick={() => scrollLeft(completedRef)}
              className="
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full glass
                hover:bg-white/10 transition
              "
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable Row */}
            <div
              ref={completedRef}
              className="
                flex gap-6 overflow-x-auto scroll-smooth no-scrollbar
                pb-2 flex-1
              "
            >
              {completed.map((cert) => (
                <div key={cert.title} className="shrink-0 w-[280px]">
                  <CertificationCard cert={cert} />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollRight(completedRef)}
              className="
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full glass
                hover:bg-white/10 transition
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

        {/* =================== PARTICIPATION =================== */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Participation & Workshops
          </h3>

          <div className="flex items-center gap-4">

            {/* Left Arrow */}
            <button
              onClick={() => scrollLeft(participatedRef)}
              className="
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full glass
                hover:bg-white/10 transition
              "
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable Row */}
            <div
              ref={participatedRef}
              className="
                flex gap-6 overflow-x-auto scroll-smooth no-scrollbar
                pb-2 flex-1
              "
            >
              {participated.map((cert) => (
                <div key={cert.title} className="shrink-0 w-[280px]">
                  <CertificationCard cert={cert} />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollRight(participatedRef)}
              className="
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full glass
                hover:bg-white/10 transition
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
