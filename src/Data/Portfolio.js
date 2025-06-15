import { Code, Database, Globe, Shield, Smartphone } from "lucide-react";

 export const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with React and Node.js featuring advanced analytics and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example-ecommerce.com",
      featured: true,
      icon: <Globe className="w-4 h-4" />,
      stats: { users: "50K+", rating: 4.9, duration: "6 months" },
      year: "2024",
      client: "RetailTech Inc"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure banking application with biometric authentication and real-time transaction monitoring.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      technologies: ["React Native", "Firebase", "Biometrics"],
      link: "https://example-banking.com",
      featured: true,
      icon: <Smartphone className="w-4 h-4" />,
      stats: { users: "100K+", rating: 4.8, duration: "8 months" },
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
      icon: <Database className="w-4 h-4" />,
      stats: { users: "25K+", rating: 4.9, duration: "4 months" },
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
      icon: <Shield className="w-4 h-4" />,
      stats: { users: "15K+", rating: 4.7, duration: "10 months" },
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
      icon: <Code className="w-4 h-4" />,
      stats: { users: "75K+", rating: 4.6, duration: "7 months" },
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
      icon: <Database className="w-4 h-4" />,
      stats: { users: "30K+", rating: 4.8, duration: "5 months" },
      year: "2023",
      client: "SmartTech Industries"
    }
  ];