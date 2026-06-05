export const services = [
  {
    id: 1,
    name: "Project & Programme Management",
    description:
      "End-to-end project delivery, site supervision and QA/QC for complex infrastructure programmes.",
    iconUrl: "/images/service1-bg.jpg"
  },
  {
    id: 2,
    name: "Design & Engineering",
    description:
      "Feasibility studies, design appraisal, routeing, stress analysis and CAD production.",
    iconUrl: "/images/service2-bg.jpg"
  },
  {
    id: 3,
    name: "Health, Safety & Environment",
    description:
      "HSE consultancy, CDM coordination, and environmental management ensuring compliance and safety.",
    iconUrl: "/images/service3-bg.jpg"
  }
];

export const projects = [
  {
    id: 1,
    title: "Offshore Pipeline Upgrade",
    clientName: "ABC Energy",
    description:
      "Comprehensive pipeline upgrade project including routeing, FEA, and construction oversight.",
    completionDate: "2024-11-15",
    imageUrl: "/images/project1.jpg"
  },
  {
    id: 2,
    title: "Industrial Park Infrastructure",
    clientName: "Metro Developments",
    description:
      "Multi-phase civil and utilities design for a 120-acre industrial development in the UK.",
    completionDate: "2024-06-30",
    imageUrl: "/images/project2.jpg"
  },
  {
    id: 3,
    title: "Renewable Grid Integration Study",
    clientName: "GreenPower Ltd",
    description:
      "Feasibility and grid-connection study for a 200 MW solar farm integration programme.",
    completionDate: "2023-12-10",
    imageUrl: "/images/project3.jpg"
  }
];

export const news = [
  {
    id: 1,
    title: "Company Launches New Consultancy Arm",
    content:
      "We are excited to announce the launch of our consultancy services, bringing decades of engineering expertise to energy and infrastructure clients worldwide.",
    publishedDate: "2025-09-20",
    imageUrl: "/images/news1.jpg"
  },
  {
    id: 2,
    title: "Award for Excellence in Project Delivery",
    content:
      "Our team received industry recognition for delivering the Offshore Pipeline Upgrade project ahead of schedule and under budget.",
    publishedDate: "2025-07-15",
    imageUrl: "/images/news2.jpg"
  },
  {
    id: 3,
    title: "Expanding HSE Advisory Services",
    content:
      "In response to growing client demand, we have expanded our health, safety and environmental advisory practice across the UK and Europe.",
    publishedDate: "2025-05-01",
    imageUrl: "/images/news3.jpg"
  }
];

export const serviceOptions = services.map(s => s.name);
