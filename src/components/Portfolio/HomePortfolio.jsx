/* eslint-disable react/prop-types */
import { ExternalLink, Globe, Smartphone, Database, Calendar, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const SimplePortfolioSection = () => {
  const featuredItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with React and Node.js featuring advanced analytics and seamless user experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example-ecommerce.com",
      icon: <Globe className="w-5 h-5" />,
      stats: { users: "50K+", rating: 4.9, duration: "6 months" }
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development", 
      description: "Secure banking application with biometric authentication and real-time transaction monitoring",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      technologies: ["React Native", "Firebase", "Biometrics"],
      link: "https://example-banking.com",
      icon: <Smartphone className="w-5 h-5" />,
      stats: { users: "100K+", rating: 4.8, duration: "8 months" }
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      category: "Data Science",
      description: "Real-time analytics dashboard for business intelligence with AI-powered insights and predictions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "D3.js", "PostgreSQL", "Docker"],
      link: "https://example-analytics.com",
      icon: <Database className="w-5 h-5" />,
      stats: { users: "25K+", rating: 4.9, duration: "4 months" }
    }
  ];

  const PortfolioCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-white/90 rounded-full">
          <span style={{ color: '#482977' }} className="text-sm font-medium">{item.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: '#482977' }}>
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full border"
              style={{ 
                color: '#892890',
                borderColor: '#892890',
                backgroundColor: '#89289010'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{item.stats.users}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" style={{ color: '#ed1d7e' }} />
              <span>{item.stats.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{item.stats.duration}</span>
          </div>
        </div>
        
        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:opacity-90"
          style={{ 
            backgroundColor: '#892890',
            color: 'white'
          }}
        >
          View Project 
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                 style={{ 
                   borderColor: '#ed1d7e',
                   backgroundColor: '#ed1d7e10'
                 }}>
              <Star className="w-4 h-4" style={{ color: '#ed1d7e' }} />
              <span style={{ color: '#ed1d7e' }} className="font-medium">Featured Projects</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-2 bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] bg-clip-text text-transparent" >
              Our Portfolio
            </h1>
            
            <p className="text-lg text-center text-gray-600 mb-16">
              Discover our latest projects that showcase our expertise in web development, 
              mobile applications, and data analytics.
            </p>
            
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-2xl font-bold" style={{ color: '#892890' }}>50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: '#892890' }}>98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: '#ed1d7e' }}>24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center">
            <Link 
            to='/portfolio'
              className="px-8 py-3 rounded-lg font-semibold transition-opacity duration-200 hover:opacity-90"
              style={{ 
                backgroundColor: '#482977',
                color: 'white'
              }}
            >
              View All Projects
            </Link>
            <p className="text-gray-500 mt-4">Explore our complete portfolio of innovative solutions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimplePortfolioSection;