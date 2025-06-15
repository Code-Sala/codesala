/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ExternalLink, Grid, List, Award } from 'lucide-react';
import { portfolioItems } from '../Data/portfolioItem';

const CleanAnimatedPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesCategory;
  });

  

  // eslint-disable-next-line no-unused-vars
  const PortfolioCard = ({ item, index }) => {

    const Icon = item.icon;

    return(
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2 transform">
      {item.featured && (
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <Award className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-purple-600"> <Icon className="w-4 h-4" /></div>
          <span className="text-gray-700 text-sm font-medium">{item.category}</span>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm border border-white/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
          <span className="text-purple-600 text-sm font-semibold">{item.year}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="text-purple-600 text-sm font-semibold bg-purple-50 px-2 py-1 rounded-lg">{item.client}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-5 text-sm leading-relaxed">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {item.technologies.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {item.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium">
              +{item.technologies.length - 3}
            </span>
          )}
        </div>
        
        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 w-full justify-center"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )};

  const ListCard = ({ item }) => (
    <div className="group flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-1 transform">
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-24 h-24 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
          <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium border border-purple-200">{item.category}</span>
          {item.featured && (
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              Featured
            </div>
          )}
        </div>
        <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <span className="font-medium">{item.client}</span>
          <span className="bg-gray-100 px-2 py-1 rounded text-xs">{item.year}</span>
        </div>
      </div>
      
      <a 
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
      >
        View Project <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="max-w-6xl mx-auto px-6 relative h-[50vh]">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 text-white">
              Our <span className="">Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of innovative solutions that push the boundaries of technology and design
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-xl transition-all duration-300 font-medium transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex gap-1 p-1 bg-white border border-gray-300 rounded-xl shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
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
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {filteredItems.length} Project{filteredItems.length !== 1 ? 's' : ''} Found
            </h2>
            {selectedCategory !== 'All' && (
              <div className="text-gray-600 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                Filtered by: <span className="font-semibold text-purple-600">{selectedCategory}</span>
              </div>
            )}
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} />
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
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No projects found</h3>
              <p className="text-gray-600 text-lg">Try adjusting your filter criteria to see more results</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CleanAnimatedPortfolio;