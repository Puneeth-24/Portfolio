"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function Hero() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative hero-bg stars min-h-screen flex items-center">
      <div
        ref={ref}
        className={`section transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I’m Puneeth Jain
            </h1>

            <p className="text-muted text-lg mb-8 max-w-xl leading-relaxed">
              Student developer building modern web applications and
              AI-powered systems with a focus on clean design and scalability.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="/resume.pdf" className="btn-secondary">
                Resume
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-full p-[3px] bg-gradient-to-br from-blue-500 to-blue-300">
              <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden bg-black">
                <Image
                  src="../public/profile.png"
                  alt="Puneeth Jain"
                  width={260}
                  height={260}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
