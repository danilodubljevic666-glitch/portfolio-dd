import React, { useEffect, useRef } from 'react';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Responsive Design', level: 94 },
  ];

  const experiences = [
    {
      year: '2024 - Sada',
      title: 'Frontend Developer',
      company: 'Freelance',
      description: 'Razvoj modernih web aplikacija za klijente širom regiona.'
    },
    {
      year: '2022 - 2024',
      title: 'Junior Frontend Developer',
      company: 'IT Kompanija',
      description: 'Radio na razvoju korisničkih interfejsa za enterprise aplikacije.'
    },
    {
      year: '2021 - 2022',
      title: 'Frontend Intern',
      company: 'Startup Kompanija',
      description: 'Učestvovao u razvoju startup projekata.'
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-fill');
              }, index * 200);
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
      id="o-meni" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije s animacijom */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold mb-4 opacity-0 translate-y-10 animate-slide-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              O Meni
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-6 opacity-0 scale-x-0 animate-scale-in delay-300"></div>
          <p className="font-['Inter'] text-lg md:text-xl text-gray-300 max-w-3xl mx-auto opacity-0 translate-y-10 animate-slide-up delay-500">
            Upoznajte me bolje - moju strast, iskustvo i vještine u web razvoju
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Lijeva strana - Tekst i Info */}
          <div className="space-y-8">
            {/* Uvodni tekst */}
            <div className="space-y-6 opacity-0 translate-x-[-30px] animate-slide-in-left">
              <h3 className="font-['Montserrat'] text-3xl font-semibold">
                Danilo Dubljević
              </h3>
              <p className="font-['Inter'] text-lg text-gray-300 leading-relaxed">
                Frontend developer sa strastvu za kreiranje modernih, brzih i responzivnih web aplikacija. 
                Specijalizovan za React ekosistem i moderne CSS framework-ove.
              </p>
              <p className="font-['Inter'] text-lg text-gray-300 leading-relaxed">
                Konstantno učim i usavršavam se kako bih ostao u toku s najnovijim trendovima 
                i tehnologijama u web razvoju. Moj pristup je fokusiran na detalje, 
                korisničko iskustvo i čist, održiv kod.
              </p>
            </div>

            {/* Personalne informacije */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 opacity-0 translate-x-[-30px] animate-slide-in-left delay-400 hover:scale-[1.02] transition-transform duration-500">
              <h4 className="font-['Montserrat'] text-2xl font-semibold mb-6">
                Lične Informacije
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1 opacity-0 translate-y-5 animate-fade-in delay-500">
                  <p className="font-['Inter'] text-gray-400 text-sm">Ime i Prezime</p>
                  <p className="font-['Inter'] text-lg">Danilo Dubljević</p>
                </div>
                
                <div className="space-y-1 opacity-0 translate-y-5 animate-fade-in delay-600">
                  <p className="font-['Inter'] text-gray-400 text-sm">Lokacija</p>
                  <p className="font-['Inter'] text-lg">Crna Gora</p>
                </div>
                
                <div className="space-y-1 opacity-0 translate-y-5 animate-fade-in delay-700">
                  <p className="font-['Inter'] text-gray-400 text-sm">Email</p>
                  <p className="font-['Inter'] text-m">danilo.dubljevic666@gmail.com</p>
                </div>
                
                <div className="space-y-1 opacity-0 translate-y-5 animate-fade-in delay-800">
                  <p className="font-['Inter'] text-gray-400 text-sm">Dostupnost</p>
                  <p className="font-['Inter'] text-lg text-green-400 animate-pulse">✓ Dostupan za projekte</p>
                </div>
              </div>
            </div>

            {/* Iskustvo */}
            <div className="opacity-0 translate-x-[-30px] animate-slide-in-left delay-600">
              <h4 className="font-['Montserrat'] text-2xl font-semibold mb-6">
                Iskustvo
              </h4>
              
              <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b from-white via-gray-200 to-gray-400">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 opacity-0 translate-x-[-20px] animate-fade-in"
                    style={{ animationDelay: `${700 + index * 200}ms` }}
                  >
                    <div className="absolute left-[-4px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-pulse"></div>
                    <div className="mb-2">
                      <span className="font-['Inter'] font-medium text-gray-400">{exp.year}</span>
                      <h5 className="font-['Montserrat'] text-xl font-semibold mt-1">{exp.title}</h5>
                      <p className="font-['Inter'] text-gray-300">{exp.company}</p>
                    </div>
                    <p className="font-['Inter'] text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desna strana - Vještine i Interesi */}
          <div className="space-y-8">
            {/* Vještine */}
            <div className="opacity-0 translate-x-[30px] animate-slide-in-right">
              <h4 className="font-['Montserrat'] text-2xl font-semibold mb-8">
                Vještine
              </h4>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="space-y-2 opacity-0 translate-y-5 animate-fade-in"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex justify-between">
                      <span className="font-['Inter'] font-medium">{skill.name}</span>
                      <span className="font-['Inter'] text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="skill-bar h-full bg-gradient-to-r from-white via-gray-200 to-gray-400 rounded-full"
                        style={{ width: '0%' }}
                        data-width={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interesi */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 opacity-0 translate-x-[30px] animate-slide-in-right delay-400 hover:scale-[1.02] transition-transform duration-500">
              <h4 className="font-['Montserrat'] text-2xl font-semibold mb-6">
                Interesi
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: '💻', name: 'Web Dev' },
                  { icon: '🎨', name: 'UI/UX Design' },
                  { icon: '📱', name: 'Mobile Apps' },
                  { icon: '💡', name: 'Creativity' },
                  { icon: '📚', name: 'Reading' },
                  { icon: '✈️', name: 'Travel' }
                ].map((interest, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer opacity-0 scale-95 animate-fade-in"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {interest.icon}
                    </span>
                    <span className="font-['Inter'] text-sm">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-white/10 opacity-0 translate-y-10 animate-slide-up delay-800 hover:shadow-xl transition-all duration-500">
              <h4 className="font-['Montserrat'] text-2xl font-semibold mb-4">
                Zainteresovan za saradnju?
              </h4>
              <p className="font-['Inter'] text-gray-300 mb-6">
                Uvijek sam otvoren za razgovor o novim projektima i prilikama za saradnju.
              </p>
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center px-6 py-3 font-['Inter'] font-semibold text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group animate-pulse-once"
              >
                Kontaktirajte me
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Statistika */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '15+', label: 'Projekata', suffix: '' },
            { number: '4', label: 'Godina', suffix: ' Iskustva' },
            { number: '100%', label: 'Zadovoljnih', suffix: ' Klijenata' },
            { number: '∞', label: 'Linija', suffix: ' Koda' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 opacity-0 scale-95 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${900 + index * 200}ms` }}
            >
              <div className="font-['Montserrat'] text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {stat.number}
              </div>
              <div className="font-['Inter'] text-gray-300">
                {stat.label}
                <span className="text-gray-400">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;