
import { Certification } from "@/data/certifications";

export default function CertificationCard({
  cert,
}: {
  cert: Certification;
}) {
		const href = cert.link?.startsWith("certificates")
		  ? `${process.env.NODE_ENV === "production" ? "/Portfolio" : ""}/${cert.link}`
		  : cert.link;
  return (
    <div className="glass cert-hover  p-5 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold mb-1">
          {cert.title}
        </h3>

        <p className="text-sm text-muted">
          {cert.issuer} • {cert.year}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
								{/*<span
          className={`text-xs px-2 py-1 rounded-full border ${
            cert.type === "completion"
              ? "border-blue-400 text-blue-400"
              : "border-[var(--glass-border)] text-muted"
          }`}
        >
          {cert.type === "completion"
            ? "Course Completion"
            : "Participation"}
        </span> */}

        {cert.link && (
          <a
		 href={href}
            target="_blank"
            className="text-sm hover:text-[var(--accent)] transition"
          >
            View
          </a>
        )}
      </div>
    </div>
  );
}
