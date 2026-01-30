export type EducationData = {
    period: string,
    title: string,
    institution: string,
    score: string,
    current?: boolean,
};



export const educationData : EducationData[] = [
  {
    period: "2023 – Present",
    title: "Bachelor of Engineering in Computer Science",
    institution: "New Horizon College of Engineering",
    score: "CGPA:  9.56 / 10",
    current: true,
  },
  {
    period: "2021 – 2023",
    title: "Pre-University",
    institution: "Vision PU College",
    score: "Percentage: 86%",
  },
  {
    period: "2019 – 2021",
    title: "High School",
    institution: "ITI Central School",
    score: "Percentage: 89.6%",
  },
];
