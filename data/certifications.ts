export type Certification = {
  title: string;
  issuer: string;
  year: string;
  type: "completion" | "participation";
  link?: string;
};

export const certifications: Certification[] = [
//------------------------Course-Completion------------------------------
  {
    title: "Data Science for Engineers",
    issuer: "NPTEL",
    year: "2025",
    type: "completion",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/course-completion/Data%20Science%20for%20Engineers.pdf",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    year: "2025",
    type: "completion",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/course-completion/Introduction%20to%20Machine%20Learning.pdf",
  },
  {
    title: "Git Training",
    issuer: "IIT Bombay",
    year: "2025",
    type: "completion",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/course-completion/PUNEETH-JAIN-S-Participant-Certificate%20(1).pdf",
  },
  {
    title: "Python: Mastering The Essentials",
    issuer: "Scaler",
    year: "2025",
    type: "completion",
    link: "https://moonshot.scaler.com/s/li/pJ27tJnJQj",
  },
  {
    title: "Fundamentals of Operating Systems",
    issuer: "Scaler",
    year: "2025",
    type: "completion",
    link: "https://moonshot.scaler.com/s/li/RIt12vSAg5",
  },
//------------------------Participation and Workshops------------------------------
  {
    title: "Smart India Hackathon",
    issuer: "NHCE",
    year: "2025",
    type: "participation",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/participation/PUNEETH%20JAIN%20S_SIH_Certificate.pdf",
  },
  {
    title: "QuantunX-25 Hackathon",
    issuer: "NHCE",
    year: "2025",
    type: "participation",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/participation/quantumx%202025.pdf",
  },
  {
    title: "36 hour Vibeathon",
    issuer: "Polaris School of Technology",
    year: "2025",
    type: "participation",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/participation/Puneeth%20Jain%20S%20Certificate.pdf",
  },
  {
    title: "GenAI and Prompt Engineering",
    issuer: "NHCE",
    year: "2024",
    type: "participation",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/participation/genai%20and%20prompt%20engineering.pdf",
  },
  {
    title: "Silver Spectrum Tech Talk",
    issuer: "NHCE",
    year: "2025",
    type: "participation",
    link: "https://credsverse.com/credentials/6355d7a4-3dbc-4b81-867d-3bb34b00d6ec",
  },
  {
    title: "Golang Workshop",
    issuer: "NHCE",
    year: "2025",
    type: "participation",
    link: "https://raw.githubusercontent.com/Puneeth-24/certificates/main/participation/golang%20certificate.pdf",
  },
];
