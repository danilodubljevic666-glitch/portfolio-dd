import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('svi');
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

  const filteredProjects = filter === 'svi' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'svi', label: 'Svi Projekti', count: projects.length, icon: '📁' },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length, icon: '🎨' },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length, icon: '⚡' },
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

            // Animate filter buttons
            const filterButtons = entry.target.querySelectorAll('.filter-btn');
            filterButtons.forEach((btn, index) => {
              setTimeout(() => {
                btn.classList.add('animate-slide-up');
              }, index * 100);
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
      className="py-20 md:py-28 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold mb-4 opacity-0 translate-y-10 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Moji Projekti
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-6 opacity-0 scale-x-0 animate-scale-in delay-300"></div>
          <p className="font-['Inter'] text-lg md:text-xl text-gray-300 max-w-3xl mx-auto opacity-0 translate-y-10 animate-slide-up delay-500">
            Praktična primjena tehnologija kroz realne projekte i rješenja. Svaki projekt predstavlja novi izazov i priliku za učenje.
          </p>
        </div>

        {/* Filteri */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn px-6 py-3 rounded-full font-['Inter'] font-medium transition-all duration-300 flex items-center gap-2 opacity-0 translate-y-10 animate-slide-up ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:scale-105'
              }`}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.label} 
              <span className={`ml-2 text-sm px-2 py-1 rounded-full ${
                filter === cat.id ? 'bg-black/20' : 'bg-white/10'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Grid Projekata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 opacity-0 scale-95 ${
                hoveredProject === project.id ? 'scale-[1.02] shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-['Inter'] font-bold rounded-full flex items-center gap-1 animate-pulse">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Slika projekta */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Overlay efekat */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-gradient-to-r from-white/20 to-transparent backdrop-blur-sm p-4 rounded-full">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
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
              <div className="p-6">
                <h3 className="font-['Montserrat'] text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-gray-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="font-['Inter'] text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tagovi */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-['Inter'] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dugmici */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg font-['Inter'] font-medium hover:bg-white/20 transition-all duration-300 group/github hover:scale-105"
                  >
                    <svg className="w-5 h-5 group-hover/github:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black rounded-lg font-['Inter'] font-medium hover:opacity-90 transition-all duration-300 group/live hover:scale-105 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 group-hover/live:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 opacity-0 translate-y-10 animate-slide-up delay-700">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-['Montserrat'] text-2xl font-semibold mb-2">Nema projekata u ovoj kategoriji</h3>
            <p className="font-['Inter'] text-gray-400">Pokušajte sa drugom kategorijom ili provjerite kasnije.</p>
          </div>
        )}

        {/* Stats sekcija */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: projects.length, label: 'Ukupno Projekata', icon: '📊' },
            { number: projects.filter(p => p.category === 'fullstack').length, label: 'Full Stack', icon: '⚡' },
            { number: projects.filter(p => p.featured).length, label: 'Featured', icon: '⭐' },
            { number: '∞', label: 'Linija Koda', icon: '💻' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 opacity-0 scale-95 animate-fade-in hover:scale-105 group/stat"
              style={{ animationDelay: `${1000 + index * 200}ms` }}
            >
              <div className="text-3xl mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="font-['Montserrat'] text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {stat.number}
              </div>
              <div className="font-['Inter'] text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center opacity-0 translate-y-10 animate-slide-up delay-1500">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-gradient-border">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8">
              <h3 className="font-['Montserrat'] text-3xl font-semibold mb-4">
                Imate ideju za projekt?
              </h3>
              <p className="font-['Inter'] text-gray-300 mb-6 max-w-2xl mx-auto">
                Uvijek sam otvoren za nove izazove i saradnju. Kontaktirajte me da razgovaramo o vašem projektu.
              </p>
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center px-8 py-4 font-['Inter'] font-semibold text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group animate-pulse-once delay-2000 hover:scale-105"
              >
                Započnimo Saradnju
                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">
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