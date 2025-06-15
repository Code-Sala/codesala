/* eslint-disable react/prop-types */
import { ExternalLink,  Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../../Data/portfolioItem';

const SimplePortfolioSection = () => {
  
  const portfolioToShow = portfolioItems.slice(0, 3);

  const PortfolioCard = ({ item }) => {
 

    return (
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
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{ 
                borderColor: '#ed1d7e',
                backgroundColor: '#ed1d7e10'
              }}
            >
              <Star className="w-4 h-4" style={{ color: '#ed1d7e' }} />
              <span style={{ color: '#ed1d7e' }} className="font-medium">Featured Projects</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-2 bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            
            <p className="text-lg text-center text-gray-600 mb-4">
              Discover our latest projects that showcase our expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioToShow.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center py-4">
            <Link 
              to="/portfolio"
              className="px-8 py-4 rounded-lg font-semibold   hover:opacity-90 bg-transparent border border-[#892890] text-[#892890] hover:bg-[#892890] hover:text-white transition duration-300"
              
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
