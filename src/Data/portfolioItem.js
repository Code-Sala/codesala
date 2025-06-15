
import { Code, Database, Globe, Shield, Smartphone } from "lucide-react";


export const portfolioItems = [
  {
    id: 1,
    title: "AppleRugs",
    category: "Web Development",
    description: "Developed with React and Node.js, the site showcases the brand’s craftsmanship, collections.",
    image: "/assets/img/portfolio/applerugs.png",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://applerugs.com",
    featured: true,
    icon: Globe, 
    year: "2025",
    client: "RetailTech Inc"
  },
  {
    id: 2,
      title: "Himalayan Textile Industries",
      category: "Web Development",
      description: "A leading manufacturer in the textile sector. Built using modern web technologies, the site highlights the company’s capabilities",
    image: "/assets/img/portfolio/himalayantextile.png",
    technologies: ["React", "GSAP"],
    link: "https://himalayantextile.com",
    featured: true,
    icon: Smartphone,
    year: "2024",
    client: "SecureBank Ltd"
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    category: "Data Science",
    description: "Real-time analytics dashboard for business intelligence with AI-powered insights and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    technologies: ["Python", "D3.js", "PostgreSQL", "Docker"],
    link: "https://example-analytics.com",
    featured: false,
    icon: Database,
    year: "2024",
    client: "DataCorp Analytics"
  },
  {
    id: 4,
    title: "Cybersecurity Suite",
    category: "Security",
    description: "Comprehensive security monitoring and threat detection system with machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
    technologies: ["Python", "Machine Learning", "AWS"],
    link: "https://example-security.com",
    featured: false,
    icon: Shield,
    year: "2023",
    client: "CyberShield Pro"
  },
  {
    id: 5,
    title: "Learning Management System",
    category: "Education",
    description: "Interactive platform for online education with video streaming, real-time collaboration, and assessment tools.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
    link: "https://example-lms.com",
    featured: false,
    icon: Code,
    year: "2023",
    client: "EduTech Solutions"
  },
  {
    id: 6,
    title: "IoT Monitoring Platform",
    category: "IoT",
    description: "Smart device monitoring with real-time data visualization and predictive maintenance alerts.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    technologies: ["React", "MQTT", "InfluxDB", "Grafana"],
    link: "https://example-iot.com",
    featured: false,
    icon: Database,
    year: "2023",
    client: "SmartTech Industries"
  }
];
