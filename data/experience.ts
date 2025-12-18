export type Experience = {
  title: string;
  org: string;
  period: string;
  description: string[];
  type: "experience" | "achievement";
};

export const experience: Experience[] = [
  {
    title: "Participant – Walmart Sparkathon",
    org: "Walmart Global Tech",
    period: "2025",
    type: "experience",
    description: [
      "Built an AI-driven system to enhance user experience in e-commerce",
      "Designed a chatbot to suggest products using user purchase history",
      "Proposed AI-generated product summary videos and smart cart recommendations",
    ],
  },
  {
    title: "IoT Device Authentication System",
    org: "Academic Mini Project",
    period: "2024",
    type: "experience",
    description: [
      "Designed a secure IoT authentication mechanism using RSA and ECC",
      "Implemented MQTT-based communication between devices and server",
      "Integrated FastAPI backend for device registration and key management",
    ],
  },
  {
    title: "Patent Draft Submission",
    org: "Smart Food Freshness Detection System",
    period: "2024",
    type: "achievement",
    description: [
      "Drafted a patent for a fluorescence-based food freshness detection system",
      "Combined sensor data with AI-driven spoilage analysis",
      "Focused on real-world applicability and system scalability",
    ],
  },
];
