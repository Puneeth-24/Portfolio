"use client";
import { useReveal } from "@/hooks/useReveal";
import { educationData } from "@/data/education";

export default function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="section">
      <div
        ref={ref}
        className={`transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="section-title mb-12">Education</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--glass-border)] hidden sm:block" />

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="relative pl-0 sm:pl-12">

                {/* Hide line behind completed education dots */}
                {!item.current && (
                  <span
                    className="
                      hidden sm:block absolute
                      left-4 top-6
                      w-px h-6
                      bg-[var(--background)]
                      z-1
                    "
                  />
                )}

                {/* Timeline Dot */}
                <span
                  className={`hidden sm:block absolute left-[10px] top-7 w-3 h-3 rounded-full z-20
                  ${
                    item.current
                      ? "bg-[var(--accent)]"
                      : "bg-[var(--glass-border)] opacity-80"
                  }`}
                />

                {/* Content Card */}
                <div className="glass p-6 rounded-xl">
                  <span className="text-sm text-blue-400 font-medium">
                    {item.period}
                  </span>

                  <h3 className="text-lg font-semibold mt-1">
                    {item.title}
                  </h3>

                  <p className="text-muted mt-1">
                    {item.institution}
                  </p>

                  <p className="mt-3 font-medium">
                    {item.score}
                  </p>

                  {item.current && (
                    <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                      Currently Pursuing
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
