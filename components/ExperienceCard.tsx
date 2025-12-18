import { Experience } from "@/data/experience";

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="glass glass-hover p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <span className="text-sm text-muted">{item.period}</span>
      </div>

      <p className="text-sm text-[var(--accent)] mb-3">
        {item.org}
      </p>

      <ul className="list-disc list-inside text-sm text-muted space-y-1">
        {item.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
