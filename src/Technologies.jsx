import React, { useEffect, useRef } from 'react';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️', level: 'Expert', color: 'text-blue-400' },
        { name: 'JavaScript', icon: '🟨', level: 'Expert', color: 'text-yellow-400' },
        { name: 'HTML5', icon: '📄', level: 'Expert', color: 'text-orange-500' },
        { name: 'CSS3/Tailwind', icon: '🎨', level: 'Expert', color: 'text-pink-500' },
        { name: 'Bootstrap', icon: '🅱️', level: 'Advanced', color: 'text-purple-400' },
        { name: 'jQuery', icon: '💰', level: 'Advanced', color: 'text-blue-300' },
      ]
    },
    {
      category: 'Backend & Baza Podataka',
      technologies: [
        { name: 'PHP', icon: '🐘', level: 'Advanced', color: 'text-purple-500' },
        { name: 'MySQL', icon: '🐬', level: 'Advanced', color: 'text-blue-500' },
        { name: 'REST API', icon: '🔗', level: 'Advanced', color: 'text-green-400' },
        { name: 'Git', icon: '📦', level: 'Advanced', color: 'text-red-500' },
        { name: 'npm', icon: '📦', level: 'Advanced', color: 'text-red-600' },
        { name: 'Figma', icon: '🎨', level: 'Advanced', color: 'text-pink-400' },
      ]
    },
    {
      category: 'Learning & Plan za Učenje',
      technologies: [
        { name: 'Node.js', icon: '🟢', level: 'Learning', color: 'text-green-500' },
        { name: 'Laravel', icon: '🚀', level: 'Planned', color: 'text-red-400' },
        { name: 'Vue.js', icon: '🟩', level: 'Planned', color: 'text-green-400' },
        { name: 'SASS/SCSS', icon: '💅', level: 'Planned', color: 'text-pink-300' },
        { name: 'Firebase', icon: '🔥', level: 'Planned', color: 'text-orange-400' },
        { name: 'React Native', icon: '📱', level: 'Planned', color: 'text-blue-300' },
      ]
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            
            // Animate tech cards sequentially
            const techCards = entry.target.querySelectorAll('.tech-card');
            techCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-pop-in');
              }, index * 100);
            });
            
            // Animate timeline items
            const timelineItems = entry.target.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slide-in');
              }, index * 300);
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
      id="tehnologije" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold mb-4 opacity-0 translate-y-10 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Tehnologije
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-6 opacity-0 scale-x-0 animate-scale-in delay-300"></div>
          <p className="font-['Inter'] text-lg md:text-xl text-gray-300 max-w-3xl mx-auto opacity-0 translate-y-10 animate-slide-up delay-500">
            Tehnologije koje koristim i planiram naučiti za razvoj kompletnih web aplikacija
          </p>
        </div>

        {/* Kategorije */}
        <div className="space-y-16">
          {techCategories.map((category, catIndex) => (
            <div key={catIndex} className="opacity-0 translate-y-10 animate-slide-up" style={{ animationDelay: `${catIndex * 200}ms` }}>
              <h3 className="font-['Montserrat'] text-3xl font-semibold mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="tech-card group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2 opacity-0 scale-95"
                    style={{ animationDelay: `${catIndex * 200 + techIndex * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                        {tech.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-['Montserrat'] text-xl font-semibold">
                            {tech.name}
                          </h4>
                          <span className={`font-['Inter'] text-sm px-3 py-1 rounded-full ${
                            tech.level === 'Expert' ? 'bg-green-900/30 text-green-400' :
                            tech.level === 'Advanced' ? 'bg-blue-900/30 text-blue-400' :
                            tech.level === 'Intermediate' ? 'bg-yellow-900/30 text-yellow-400' :
                            tech.level === 'Learning' ? 'bg-purple-900/30 text-purple-400' :
                            'bg-gray-800 text-gray-400'
                          } animate-pulse`}>
                            {tech.level}
                          </span>
                        </div>
                        
                        {/* Progress bar */}
                        <div className="mt-4">
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Nivo</span>
                            <span>{tech.level}</span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className={`skill-bar h-full ${tech.color.replace('text-', 'bg-')} rounded-full`}
                              style={{ 
                                width: '0%',
                                '--target-width': tech.level === 'Expert' ? '95%' : 
                                               tech.level === 'Advanced' ? '80%' : 
                                               tech.level === 'Intermediate' ? '65%' : 
                                               tech.level === 'Learning' ? '40%' : '25%'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Timeline */}
        <div className="mt-20 opacity-0 translate-y-10 animate-slide-up delay-1000">
          <h3 className="font-['Montserrat'] text-3xl font-semibold mb-12 text-center">
            Moj Put Učenja i Razvoja
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-white via-gray-200 to-gray-400"></div>
            
            {/* Timeline items */}
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
                  className={`timeline-item relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center opacity-0 ${index % 2 === 0 ? 'translate-x-[-50px]' : 'translate-x-[50px]'}`}
                  style={{ animationDelay: `${1200 + index * 300}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-pulse"></div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3 animate-spin-slow">{item.icon}</span>
                        <div className="font-['Montserrat'] text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                          {item.year}
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="font-['Inter'] text-gray-400 mb-1">{item.tech}</p>
                      <p className="font-['Inter'] text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trenutni fokus */}
        <div className="mt-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10 opacity-0 scale-95 animate-fade-in delay-1500 hover:shadow-xl transition-all duration-500">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 animate-pulse">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-['Montserrat'] text-3xl font-semibold mb-4">
              Trenutni Fokus
            </h3>
            <p className="font-['Inter'] text-gray-300 mb-6 max-w-2xl mx-auto">
              Trenutno se fokusiram na usavršavanje PHP vještina i učenje Laravel framework-a,
              dok paralelno radim na React projektima.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['PHP', 'Laravel', 'MySQL', 'React', 'Full Stack'].map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full font-['Inter'] text-sm opacity-0 scale-90 animate-fade-in"
                  style={{ animationDelay: `${1600 + index * 200}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center opacity-0 translate-y-10 animate-slide-up delay-2000">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-gradient-border">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8">
              <h3 className="font-['Montserrat'] text-3xl font-semibold mb-4">
                Vidite kako primjenjujem ove tehnologije u praksi
              </h3>
              <p className="font-['Inter'] text-gray-300 mb-6 max-w-2xl mx-auto">
                Pogledajte moje projekte gdje kombinujem frontend i backend tehnologije
              </p>
              <a 
                href="#projekti" 
                className="inline-flex items-center justify-center px-8 py-4 font-['Inter'] font-semibold text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group animate-pulse-once delay-2500"
              >
                Pogledaj Moje Projekte
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

export default Technologies;