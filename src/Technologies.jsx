import React, { useState, useEffect, useRef } from 'react';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const techCategories = [
    {
      id: 'frontend',
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️', level: 'Expert', color: 'text-blue-400' },
        { name: 'JavaScript', icon: '🟨', level: 'Expert', color: 'text-yellow-400' },
        { name: 'HTML5', icon: '📄', level: 'Expert', color: 'text-orange-500' },
        { name: 'CSS3/Tailwind', icon: '🎨', level: 'Expert', color: 'text-pink-500' },
        { name: 'Bootstrap', icon: '🅱️', level: 'Advanced', color: 'text-purple-400' },
        { name: 'jQuery', icon: '💰', level: 'Intermediate', color: 'text-blue-300' },
      ]
    },
    {
      id: 'backend',
      category: 'Backend & Baza',
      technologies: [
        { name: 'PHP', icon: '🐘', level: 'Advanced', color: 'text-purple-500' },
        { name: 'MySQL', icon: '🐬', level: 'Intermediate', color: 'text-blue-500' },
        { name: 'REST API', icon: '🔗', level: 'Advanced', color: 'text-green-400' },
        { name: 'Git', icon: '📦', level: 'Advanced', color: 'text-red-500' },
        { name: 'npm', icon: '📦', level: 'Advanced', color: 'text-red-600' },
        { name: 'Figma', icon: '🎨', level: 'Intermediate', color: 'text-pink-400' },
      ]
    },
    {
      id: 'learning',
      category: 'Učenje',
      technologies: [
        { name: 'Node.js', icon: '🟢', level: 'Learning', color: 'text-green-500' },
        { name: 'Laravel', icon: '🚀', level: 'Learning', color: 'text-red-400' },
        { name: 'Vue.js', icon: '🟩', level: 'Planned', color: 'text-green-400' },
        { name: 'SASS/SCSS', icon: '💅', level: 'Planned', color: 'text-pink-300' },
        { name: 'Firebase', icon: '🔥', level: 'Planned', color: 'text-orange-400' },
        { name: 'React Native', icon: '📱', level: 'Planned', color: 'text-blue-300' },
      ]
    }
  ];

  const currentCategory = techCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="tehnologije" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Tehnologije
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-4 md:mb-6"></div>
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Tehnologije koje koristim i planiram naučiti za razvoj kompletnih web aplikacija
          </p>
        </div>

        {/* Category Tabs za Mobile, Grid za Desktop */}
        <div className="mb-8 md:mb-12">
          {/* Mobile: Tabs */}
          <div className="md:hidden flex overflow-x-auto pb-2 space-x-2 -mx-4 px-4">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-['Inter'] font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black'
                    : 'bg-white/10 text-gray-300'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Desktop: Grid sa svim kategorijama */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {techCategories.map((cat) => (
              <div 
                key={cat.id}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white/10 border-white/30 transform scale-105'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <h3 className="font-['Montserrat'] text-xl font-semibold mb-4 text-center">
                  {cat.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.technologies.slice(0, 4).map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className={`text-xl ${tech.color}`}>{tech.icon}</span>
                      <span className="font-['Inter'] text-sm truncate">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prikaz tehnologija za aktivnu kategoriju (Mobile) */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {currentCategory?.technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
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
                      <span className={`font-['Inter'] text-xs px-2 py-1 rounded-full ${
                        tech.level === 'Expert' ? 'bg-green-900/30 text-green-400' :
                        tech.level === 'Advanced' ? 'bg-blue-900/30 text-blue-400' :
                        tech.level === 'Intermediate' ? 'bg-yellow-900/30 text-yellow-400' :
                        'bg-gray-800 text-gray-400'
                      }`}>
                        {tech.level}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Nivo</span>
                    <span>{tech.level}</span>
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
              </div>
            ))}
          </div>
        </div>

        {/* Detaljan prikaz za Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <h3 className="font-['Montserrat'] text-xl font-semibold text-center">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`text-2xl ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <h4 className="font-['Montserrat'] font-semibold">
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
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Nivo</span>
                        <span>{tech.level}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline - Pojednostavljen za Mobile */}
        <div className="mt-12 md:mt-20">
          <h3 className="font-['Montserrat'] text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-center">
            Moj Razvojni Put
          </h3>
          
          <div className="relative">
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {[
                { 
                  year: '2021', 
                  title: 'Početak', 
                  tech: 'HTML, CSS, JS',
                  icon: '🌱'
                },
                { 
                  year: '2022', 
                  title: 'Frontend', 
                  tech: 'React, Tailwind',
                  icon: '🎨'
                },
                { 
                  year: '2023', 
                  title: 'Backend', 
                  tech: 'PHP, MySQL',
                  icon: '⚙️'
                },
                { 
                  year: '2024+', 
                  title: 'Full Stack', 
                  tech: 'Laravel, Vue.js',
                  icon: '🚀'
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 flex items-center justify-center">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-['Montserrat'] text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
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
                    title: 'Početak', 
                    tech: 'HTML, CSS, JavaScript', 
                    desc: 'Osnove web developmenta i prvi projekti',
                    icon: '🌱'
                  },
                  { 
                    year: '2022', 
                    title: 'Frontend Specjalizacija', 
                    tech: 'React, Tailwind CSS, Bootstrap', 
                    desc: 'Fokus na moderni frontend i responzivni dizajn',
                    icon: '🎨'
                  },
                  { 
                    year: '2023', 
                    title: 'Backend & PHP', 
                    tech: 'PHP, MySQL, REST API', 
                    desc: 'Proširivanje znanja na backend i baze podataka',
                    icon: '⚙️'
                  },
                  { 
                    year: '2024+', 
                    title: 'Full Stack & Učenje', 
                    tech: 'Laravel, Node.js, Vue.js', 
                    desc: 'Cilj: Postati full stack developer',
                    icon: '🚀'
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400"></div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-6 md:pr-12 text-right' : 'pl-6 md:pl-12'}`}>
                      <div className="bg-white/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                        <div className="flex items-center mb-2">
                          <span className="text-xl md:text-2xl mr-2">{item.icon}</span>
                          <div className="font-['Montserrat'] text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            {item.year}
                          </div>
                        </div>
                        <h4 className="font-['Montserrat'] text-base md:text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="font-['Inter'] text-gray-400 text-sm md:text-base mb-1">{item.tech}</p>
                        <p className="font-['Inter'] text-gray-300 text-xs md:text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trenutni fokus */}
        <div className="mt-12 md:mt-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4 md:mb-6">
              <span className="text-xl md:text-2xl">🎯</span>
            </div>
            <h3 className="font-['Montserrat'] text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
              Trenutni Fokus
            </h3>
            <p className="font-['Inter'] text-gray-300 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
              Trenutno se fokusiram na usavršavanje PHP vještina i učenje Laravel framework-a,
              dok paralelno radim na React projektima.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {['PHP', 'Laravel', 'MySQL', 'React', 'Full Stack'].map((item, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 md:px-4 md:py-2 bg-white/10 rounded-full font-['Inter'] text-xs md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-block p-0.5 md:p-1 rounded-xl md:rounded-2xl bg-gradient-to-r from-white via-gray-200 to-gray-400">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="font-['Montserrat'] text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                Vidite kako primjenjujem tehnologije
              </h3>
              <p className="font-['Inter'] text-gray-300 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
                Pogledajte moje projekte gdje kombinujem frontend i backend tehnologije
              </p>
              <a 
                href="#projekti" 
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 font-['Inter'] font-semibold text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group text-sm md:text-base"
              >
                Pogledaj Projekte
                <span className="ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;