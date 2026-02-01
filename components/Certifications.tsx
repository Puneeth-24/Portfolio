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

  // Scroll exactly one card (prevents cut cards on mobile)
  const scrollByCard = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (!ref.current) return;

    const container = ref.current;
    const firstCard = container.querySelector(
      ":scope > div"
    ) as HTMLElement;

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = parseInt(
      getComputedStyle(container).columnGap || "0"
    );

    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const completed = certifications.filter(
    (c) => c.type === "completion"
  );
  const participated = certifications.filter(
    (c) => c.type === "participation"
  );

  return (
    <section id="certifications" className="section">
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="section-title">Certifications</h2>

        {/* =================== PARTICIPATION =================== */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">
            Participation & Workshops
          </h3>

          <div className="flex items-center gap-4">
            {/* Desktop Left Arrow */}
            <button
              onClick={() =>
                scrollByCard(participatedRef, "left")
              }
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
                flex gap-6 overflow-x-auto scroll-smooth
                no-scrollbar pb-2 flex-1
                snap-x snap-mandatory
              "
            >
              {participated.map((cert) => (
                <div
                  key={cert.title}
                  className="shrink-0 w-[280px] snap-start"
                >
                  <CertificationCard cert={cert} />
                </div>
              ))}
            </div>

            {/* Desktop Right Arrow */}
            <button
              onClick={() =>
                scrollByCard(participatedRef, "right")
              }
              className="
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full glass
                hover:bg-white/10 transition
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              onClick={() =>
                scrollByCard(participatedRef, "left")
              }
              className="
                w-10 h-10 rounded-full glass
                flex items-center justify-center
                hover:bg-white/10 transition
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() =>
                scrollByCard(participatedRef, "right")
              }
              className="
                w-10 h-10 rounded-full glass
                flex items-center justify-center
                hover:bg-white/10 transition
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* =================== COURSE COMPLETIONS =================== */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Course Completions
          </h3>

          <div className="flex items-center gap-4">
            {/* Desktop Left Arrow */}
            <button
              onClick={() =>
                scrollByCard(completedRef, "left")
              }
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
                flex gap-6 overflow-x-auto scroll-smooth
                no-scrollbar pb-2 flex-1
                snap-x snap-mandatory
              "
            >
              {completed.map((cert) => (
                <div
                  key={cert.title}
                  className="shrink-0 w-[280px] snap-start"
                >
                  <CertificationCard cert={cert} />
                </div>
              ))}
            </div>

            {/* Desktop Right Arrow */}
            <button
              onClick={() =>
                scrollByCard(completedRef, "right")
              }
              className="
                hidden md:flex items-center justify-center
                w-10 h-10 rounded-full glass
                hover:bg-white/10 transition
              "
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              onClick={() =>
                scrollByCard(completedRef, "left")
              }
              className="
                w-10 h-10 rounded-full glass
                flex items-center justify-center
                hover:bg-white/10 transition
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() =>
                scrollByCard(completedRef, "right")
              }
              className="
                w-10 h-10 rounded-full glass
                flex items-center justify-center
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
