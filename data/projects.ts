export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "IoT Device Authentication System",
    description:
      "A secure authentication and authorization system for IoT devices using public-key cryptography and MQTT.",
    tech: ["Python", "MQTT", "RSA", "ECC", "FastAPI", "Docker"],
    github: "https://github.com/your-username/iot-auth-system",
    highlights: [
      "Implemented RSA and ECC-based device identity validation",
      "Real-time MQTT authentication with low latency",
      "Denied access to unauthorized devices consistently",
    ],
  },
  {
    title: "Fake News Detection System",
    description:
      "A machine learning system to classify news articles as real or fake using NLP techniques.",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas"],
    github: "https://github.com/your-username/fake-news-detection",
    highlights: [
      "Achieved high classification accuracy on test data",
      "Used TF-IDF and traditional ML classifiers",
      "Built an end-to-end data preprocessing pipeline",
    ],
  },
  {
    title: "React Movie Search App",
    description:
      "A responsive movie search application with routing, search, and detailed views.",
    tech: ["React", "API", "CSS", "JavaScript"],
    github: "https://github.com/your-username/movie-search-app",
    demo: "https://your-demo-link.vercel.app",
    highlights: [
      "Integrated external movie API",
      "Implemented client-side routing",
      "Maintained persistent state across pages",
    ],
  },
];
