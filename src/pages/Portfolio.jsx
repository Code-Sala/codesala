/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ExternalLink, Globe, Smartphone, Database, Shield, Code, Grid, List, Calendar, Users, Star, Award } from 'lucide-react';

const SimplifiedPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Portfolio data
  const portfolioItems = [
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

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const PortfolioCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      {item.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-[#ed1d7e] to-[#892890] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Award className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}
      
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        
        <div className="absolute top-4 left-4 flex items-center gap-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
          <div className="text-[#482977]">{item.icon}</div>
          <span className="text-[#482977] text-sm font-medium">{item.category}</span>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
          <span className="text-[#482977] text-xs font-medium">{item.year}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#892890] text-sm font-medium">{item.client}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-gray-600 text-sm">{item.stats.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-[#482977] mb-2 hover:text-[#892890] transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-[#482977] rounded text-xs border"
            >
              {tech}
            </span>
          ))}
          {item.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
              +{item.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {item.stats.users}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {item.stats.duration}
            </div>
          </div>
          
          <a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-[#892890] hover:bg-[#0099d4] text-white rounded-lg text-sm font-medium transition-colors"
          >
            View <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );

  const ListCard = ({ item }) => (
    <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-xl font-bold text-[#482977]">{item.title}</h3>
          <span className="px-3 py-1 bg-gray-100 text-[#892890] rounded-full text-sm font-medium">{item.category}</span>
          {item.featured && (
            <div className="bg-gradient-to-r from-[#ed1d7e] to-[#892890] text-white px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
        <p className="text-gray-600 mb-2 text-sm">{item.description}</p>
        <div className="flex items-center gap-6 text-xs text-gray-500">
          <span>{item.client}</span>
          <span>{item.year}</span>
          <span>{item.stats.users} users</span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            {item.stats.rating}
          </span>
        </div>
      </div>
      
      <a 
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#892890] hover:bg-[#0099d4] text-white rounded-lg font-medium transition-colors"
      >
        View Project <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-[#482977] to-[#892890]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our collection of innovative solutions across various industries and technologies
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fff] mb-2">{portfolioItems.length}+</div>
              <div className="text-white/80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fff]">8+</div>
              <div className="text-white/80">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fff]">98%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#fff]">4.8</div>
              <div className="text-white/80">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search */}
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects..."
                className="pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#892890] transition-colors w-64"
              />
            </div> */}

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                    selectedCategory === category
                      ? 'bg-[#892890] text-white'
                      : 'bg-white text-[#482977] border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 p-1 bg-white border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-[#892890] text-white' 
                    : 'text-gray-600 hover:text-[#482977]'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-[#892890] text-white' 
                    : 'text-gray-600 hover:text-[#482977]'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid/List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#482977]">
              {filteredItems.length} Project{filteredItems.length !== 1 ? 's' : ''} Found
            </h2>
            {selectedCategory !== 'All' && (
              <div className="text-gray-600">
                Filtered by: <span className="font-medium text-[#892890]">{selectedCategory}</span>
              </div>
            )}
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <ListCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-[#482977] mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SimplifiedPortfolio;