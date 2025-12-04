import React, { useState } from 'react';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const techCategories = [
    {
      id: 'frontend',
      category: 'Frontend',
      icon: '🎨',
      description: 'Tehnologije za kreiranje korisničkih interfejsa',
      technologies: [
        { name: 'React', icon: '⚛️', level: 'Expert', color: 'text-blue-400' },
        { name: 'JavaScript', icon: '🟨', level: 'Expert', color: 'text-yellow-400' },
        { name: 'HTML5', icon: '📄', level: 'Expert', color: 'text-orange-500' },
        { name: 'CSS3/Tailwind', icon: '💎', level: 'Expert', color: 'text-pink-500' },
        
    
      ]
    },
    {
      id: 'backend',
      category: 'Backend',
      icon: '⚙️',
      description: 'Tehnologije za server-side logiku i baze podataka',
      technologies: [
        { name: 'PHP', icon: '🐘', level: 'Advanced', color: 'text-purple-500' },
        { name: 'MySQL', icon: '🐬', level: 'Intermediate', color: 'text-blue-500' },
  
        { name: 'Git', icon: '📦', level: 'Advanced', color: 'text-red-500' },
        { name: 'npm', icon: '📦', level: 'Advanced', color: 'text-red-600' },
       
      ]
    },
    {
      id: 'learning',
      category: 'Učenje & Plan',
      icon: '🚀',
      description: 'Tehnologije koje trenutno učim ili planiram naučiti',
      technologies: [
        { name: 'Node.js', icon: '🟢', level: 'Learning', color: 'text-green-500' },
     
        { name: 'Vue.js', icon: '🟩', level: 'Planned', color: 'text-green-400' },

        { name: 'Supabase', icon: '🔥', level: 'Planned', color: 'text-orange-400' },
        { name: 'React Native', icon: '📱', level: 'Planned', color: 'text-blue-300' },
      ]
    }
  ];

  return (
    <section id="tehnologije" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Tech Stack
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-4 md:mb-6"></div>
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Tehnologije koje koristim za kreiranje modernih web aplikacija
          </p>
        </div>

        {/* Mobile Layout - Tabs */}
        <div className="md:hidden">
          {/* Tabs za navigaciju */}
          <div className="flex overflow-x-auto pb-4 space-x-2 -mx-4 px-4 mb-8">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-3 rounded-full font-['Inter'] font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black shadow-lg'
                    : 'bg-white/10 text-gray-300'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Prikaz odabrane kategorije */}
          {techCategories.map((cat) => (
            <div 
              key={cat.id}
              className={`${activeCategory === cat.id ? 'block' : 'hidden'}`}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-semibold mb-2">
                  {cat.category}
                </h3>
                <p className="font-['Inter'] text-gray-400">
                  {cat.description}
                </p>
              </div>

              {/* Tehnologije u ovoj kategoriji */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`text-2xl ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <div>
                          <h4 className="font-['Montserrat'] font-semibold">
                            {tech.name}
                          </h4>
                        </div>
                      </div>
                      <span className={`font-['Inter'] text-xs px-2 py-1 rounded-full ${
                        tech.level === 'Expert' ? 'bg-green-900/30 text-green-400' :
                        tech.level === 'Advanced' ? 'bg-blue-900/30 text-blue-400' :
                        tech.level === 'Intermediate' ? 'bg-yellow-900/30 text-yellow-400' :
                        'bg-gray-800 text-gray-400'
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Nivo znanja</span>
                        <span>{tech.level}</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${tech.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000`}
                          style={{ 
                            width: tech.level === 'Expert' ? '95%' : 
                                   tech.level === 'Advanced' ? '80%' : 
                                   tech.level === 'Intermediate' ? '65%' : 
                                   tech.level === 'Learning' ? '40%' : '25%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - Grid sa svim kategorijama odjednom */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 mb-12">
            {techCategories.map((cat) => (
              <div key={cat.id} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4">
                  <span className="text-3xl">{cat.icon}</span>
                </div>
                <h3 className="font-['Montserrat'] text-xl font-semibold mb-2">
                  {cat.category}
                </h3>
                <p className="font-['Inter'] text-gray-400 text-sm mb-6">
                  {cat.description}
                </p>
                
                {/* Quick preview tehnologija */}
                <div className="flex flex-wrap justify-center gap-2">
                  {cat.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full font-['Inter'] text-xs flex items-center gap-2"
                    >
                      <span className={tech.color}>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                  {cat.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-white/5 rounded-full font-['Inter'] text-xs text-gray-400">
                      +{cat.technologies.length - 4} više
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Detailan prikaz svih tehnologija po kategorijama */}
          <div className="grid grid-cols-3 gap-6">
            {techCategories.map((cat) => (
              <div key={cat.id} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-['Montserrat'] text-lg font-semibold">
                    {cat.category}
                  </h3>
                  <span className="font-['Inter'] text-xs text-gray-400">
                    {cat.technologies.length} tehnologija
                  </span>
                </div>
                
                <div className="space-y-3">
                  {cat.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className={`text-xl ${tech.color}`}>
                            {tech.icon}
                          </div>
                          <h4 className="font-['Inter'] font-medium">
                            {tech.name}
                          </h4>
                        </div>
                        <span className={`font-['Inter'] text-xs px-2 py-1 rounded-full ${
                          tech.level === 'Expert' ? 'bg-green-900/30 text-green-400' :
                          tech.level === 'Advanced' ? 'bg-blue-900/30 text-blue-400' :
                          tech.level === 'Intermediate' ? 'bg-yellow-900/30 text-yellow-400' :
                          'bg-gray-800 text-gray-400'
                        }`}>
                          {tech.level}
                        </span>
                      </div>
                      
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${tech.color.replace('text-', 'bg-')} rounded-full`}
                          style={{ 
                            width: tech.level === 'Expert' ? '95%' : 
                                   tech.level === 'Advanced' ? '80%' : 
                                   tech.level === 'Intermediate' ? '65%' : 
                                   tech.level === 'Learning' ? '40%' : '25%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline sekcija - ostaje ista */}
        <div className="mt-12 md:mt-20">
          <h3 className="font-['Montserrat'] text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-center">
            Moj Tech Evolucija
          </h3>
          
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {[
              { 
                year: '2021', 
                title: 'Osnove', 
                tech: 'HTML, CSS, JS',
                icon: '🌱',
              },
              { 
                year: '2022', 
                title: 'Frontend', 
                tech: 'React, Tailwind',
                icon: '🎨',
              },
              { 
                year: '2023', 
                title: 'Backend', 
                tech: 'PHP, MySQL',
                icon: '⚙️',
              },
              { 
                year: '2025+', 
                title: 'Full Stack', 
                tech: 'Laravel, Node.js',
                icon: '🚀',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 flex items-center justify-center">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <div className="font-['Montserrat'] text-lg font-bold">
                    {item.year}
                  </div>
                  <h4 className="font-['Montserrat'] font-semibold mt-1">{item.title}</h4>
                  <p className="font-['Inter'] text-gray-400 text-sm">{item.tech}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-white via-gray-200 to-gray-400"></div>
            
            <div className="space-y-12">
              {[
                { 
                  year: '2021', 
                  title: 'Osnove Web Developmenta', 
                  tech: 'HTML, CSS, JavaScript', 
                  icon: '🌱',
                },
                { 
                  year: '2022', 
                  title: 'Frontend Specjalizacija', 
                  tech: 'React, Tailwind CSS, Bootstrap', 
                  icon: '🎨',
                },
                { 
                  year: '2023', 
                  title: 'Backend & Baze Podataka', 
                  tech: 'PHP, MySQL, REST API', 
                  icon: '⚙️',
                },
                { 
                  year: '2024+', 
                  title: 'Full Stack Developer', 
                  tech: 'Laravel, Node.js, Vue.js', 
                  icon: '🚀',
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400"></div>
                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div className="font-['Montserrat'] text-xl font-bold">
                          {item.year}
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="font-['Inter'] text-gray-400">{item.tech}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;