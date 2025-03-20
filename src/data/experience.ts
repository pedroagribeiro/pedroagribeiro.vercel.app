import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "August 2022 - Present",
    title: "Backend Developer",
    company: "WithUs - Tecnhology Factory",
    companyUrl: "https://www.withus.pt",
    description:
      "I am permanently assigned to AlticeLabs as a consultant. Designed and developed an application to automate the processing of alarmistic information using Java with the Spring Boot framework, Redis and PostgreSQL. Also helped design and implement two full fledged GoLang Backend applications using the Echo framework, Redis and PostgreSQL (with the help of GORM). I also routinely write unit tests and api tests to make sure that those applications implement and maintain the desired functionality.",
    technologies: [
      "Java",
      "Spring Boot",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "GoLang",
      "Echo",
      "GORM",
      "Ginkgo",
    ],
    logo: "/logos/withus.jpeg",
  },
  {
    dates: "October 2021 — July 2022",
    title: "Internship - Backend Developer",
    company: "AlticeLabs",
    companyUrl: "https://www.alticelabs.com/",
    description:
      "Worked on my master thesis regarding the management of queues for an in house software component in order to improve efficiency.",
    technologies: [
      "Java",
      "Spring Boot",
      "Redis",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
    ],
    logo: "/logos/alticelabs.jpeg",
  },
];
