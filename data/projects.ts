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
    title: "StudyBuddy - AI-Based Multi-Agent EdTech Productivity Tool",
    description: "AI-powered platform that transforms handwritten notes into personalized study content.",
    tech: [
      "Python",
      "OCR",
      "LLMs",
      "NLP",
      "Next.js",
      "FastAPI",
      "YouTube Data API"
    ],
    github: "https://github.com/Puneeth-24/StudyBuddy",
    highlights: [
      "Built a multi-agent AI system with OCR and LLMs for personalized study content",
      "Developed a scalable full-stack architecture using Next.js and FastAPI",
      "Implemented NLP vectorization and YouTube API for intelligent recommendations",
      "Delivered a functional prototype within a 36-hour hackathon"
    ]
  },
  {
    title: "AI-Based Smart Fridge for Food Spoilage Detection and Inventory Management",
    description: "An AI-powered smart fridge system that detects food items, tracks freshness, and alerts users before spoilage.",
    tech: [
      "Python",
      "Machine Learning",
      "CNN",
      "TensorFlow",
      "OpenCV",
      "Flask"
    ],
    github: "https://github.com/Puneeth-24/Shinsen-AI",
    highlights: [
      "Built a computer vision system to detect food items and monitor freshness",
      "Trained a CNN model using TensorFlow and OpenCV with ~90% classification accuracy",
      "Deployed real-time inference through a Flask API for spoilage alerts",
      "Enabled continuous food tracking to reduce household food waste"
    ]
  },
  { title: "Retrieval-Augmented Generation (RAG) Pipeline",
description: "A Python-based RAG pipeline that builds a vector database from unstructured data to enable efficient semantic retrieval.",
    tech: [
      "Python",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases",
      "Text Embeddings",
      "Semantic Search"
    ],
    github: "https://github.com/Puneeth-24/RAG-Pipeline",
highlights: [
  "Built a Retrieval-Augmented Generation pipeline for semantic information retrieval",
  "Generated embeddings from unstructured data to create a vector database",
  "Implemented similarity-based search to retrieve relevant context for LLMs",
  "Designed the system for scalable document Q&A and knowledge assistant use cases"
]
  },
		 
{
  title: "IoT Device Authentication and Authorization System",
  description:
    "A secure IoT system that authenticates devices using public-key cryptography before MQTT communication.",
  tech: [
    "Python",
    "MQTT",
    "Mosquitto",
    "RSA",
    "ECC",
    "Digital Signatures",
    "Docker"
  ],
    github: "https://github.com/Puneeth-24/iot-auth",
  highlights: [
    "Implemented RSA and ECC-based device authentication using digital signatures",
    "Verified private-key ownership before MQTT publish–subscribe communication",
    "Deployed real-time messaging with Mosquitto MQTT and Dockerized services",
    "Achieved 100% device validation with strong spoofing resistance and low overhead"
  ]
}

];
