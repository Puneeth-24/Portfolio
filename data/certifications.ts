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
    link: "certificates/course-completion/Data Science for Engineers.pdf",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    year: "2025",
    type: "completion",
    link: "certificates/course-completion/Introduction to Machine Learning.pdf" ,
  },
  {
    title: "Git Training",
    issuer: "IIT Bombay",
    year: "2025",
    type: "completion",
    link: "certificates/course-completion/PUNEETH-JAIN-S-Participant-Certificate (1).pdf" ,
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
    link: "certificates/participation/PUNEETH JAIN S_SIH_Certificate.pdf" ,
  },
  {
    title: "QuantunX-25 Hackathon",
    issuer: "NHCE",
    year: "2025",
    type: "participation",
    link: "certificates/participation/quantumx 2025.pdf" ,
  },
  {
    title: "36 hour Vibeathon",
    issuer: "Polaris School of Technology",
    year: "2025",
    type: "participation",
    link: "certificates/participation/Puneeth Jain S Certificate.pdf" ,
  },
  {
    title: "GenAI and Prompt Engineering",
    issuer: "NHCE",
    year: "2024",
    type: "participation",
    link: "certificates/participation/genai and prompt engineering.pdf" ,
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
    link: "certificates/participation/golang certificate.pdf" ,
  },
];
