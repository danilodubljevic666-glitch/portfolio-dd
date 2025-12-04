import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack online shop sa React frontend i PHP backend. Kompletan sistem za online prodaju sa korpom, checkout-om i admin panelom.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
      tags: ['React', 'PHP', 'MySQL', 'Tailwind', 'REST API'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://live-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern task manager sa drag & drop funkcionalnostima, labelima i deadline trackingom.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800',
      tags: ['React', 'JavaScript', 'CSS3', 'LocalStorage', 'Drag & Drop'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://live-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio sa custom animacijama i modernim dizajnom. Optimizovan za SEO i brzo učitavanje.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800',
      tags: ['React', 'Tailwind', 'CSS3', 'JavaScript', 'Responsive'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://live-demo.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather app sa API integracijom, geolokacijom i 7-dnevnom prognozom.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800',
      tags: ['JavaScript', 'API', 'CSS3', 'Bootstrap', 'Async/Await'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://live-demo.com'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'CMS za blog sa admin panelom, komentarima i kategorijama. Full-stack aplikacija.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'CRUD'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://live-demo.com'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'Aplikacija za pronalaženje recepata sa filterima, favoritima i shopping listom.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800',
      tags: ['React', 'API', 'Tailwind', 'JavaScript', 'State Management'],
      category: 'frontend',
      github: 'https://github.com',
      live: 'https://live-demo.com'
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            
            // Animate project cards sequentially
            const projectCards = entry.target.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-pop-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projekti" 
      ref={sectionRef}
      className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Moji Projekti
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-4 md:mb-6"></div>
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Praktična primjena tehnologija kroz realne projekte i rješenja
          </p>
        </div>

        {/* Grid Projekata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group bg-white/5 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 relative ${
                hoveredProject === project.id ? 'z-10 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-['Inter'] font-bold rounded-full flex items-center gap-1">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Slika projekta */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-['Inter'] font-medium backdrop-blur-sm ${
                    project.category === 'frontend' 
                      ? 'bg-blue-900/70 text-blue-300' 
                      : 'bg-purple-900/70 text-purple-300'
                  }`}>
                    {project.category === 'frontend' ? 'Frontend' : 'Full Stack'}
                  </span>
                </div>
              </div>

              {/* Sadržaj projekta */}
              <div className="p-5 md:p-6 relative z-10 bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <h3 className="font-['Montserrat'] text-lg md:text-xl font-semibold mb-2 md:mb-3 line-clamp-1">
                  {project.title}
                </h3>
                <p className="font-['Inter'] text-gray-300 text-sm md:text-base mb-3 md:mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tagovi */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 md:px-3 md:py-1 bg-white/10 rounded-full text-xs font-['Inter'] transition-all duration-300 group-hover:bg-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dugmici */}
                <div className="flex gap-3 md:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-white/10 rounded-lg font-['Inter'] font-medium hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black rounded-lg font-['Inter'] font-medium hover:opacity-90 transition-opacity duration-300 text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none ${
                hoveredProject === project.id ? 'opacity-100' : ''
              }`}>
                <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               
                  <p className="text-white font-['Inter'] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats sekcija */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { number: projects.length, label: 'Ukupno Projekata', icon: '📊' },
            { number: projects.filter(p => p.category === 'fullstack').length, label: 'Full Stack', icon: '⚡' },
            { number: projects.filter(p => p.featured).length, label: 'Featured', icon: '⭐' },
            { number: '∞', label: 'Linija Koda', icon: '💻' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">
                {stat.icon}
              </div>
              <div className="font-['Montserrat'] text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {stat.number}
              </div>
              <div className="font-['Inter'] text-gray-300 text-xs md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-block p-0.5 md:p-1 rounded-xl md:rounded-2xl bg-gradient-to-r from-white via-gray-200 to-gray-400">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-6 md:p-8">
              <h3 className="font-['Montserrat'] text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4">
                Imate ideju za projekt?
              </h3>
              <p className="font-['Inter'] text-gray-300 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto">
                Uvijek sam otvoren za nove izazove i saradnju. Kontaktirajte me da razgovaramo o vašem projektu.
              </p>
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 font-['Inter'] font-semibold text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group text-sm md:text-base"
              >
                Započnimo Saradnju
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

export default Projects;