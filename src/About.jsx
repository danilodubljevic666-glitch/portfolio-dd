import React, { useEffect, useRef } from 'react';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'React', level: 99 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Git/GitHub', level: 95 },
    { name: 'Responsive Design', level: 95 },
  ];

  const experiences = [
    {
      year: '2023 - Sada',
      title: 'Frontend Developer',
      company: 'Freelance',
      description: 'Razvoj modernih web aplikacija za klijente širom regiona.'
    },
    {
      year: '2022 - 2023',
      title: 'Junior Frontend Developer',
      company: 'IT Kompanija',
      description: 'Radio na razvoju korisničkih interfejsa za enterprise aplikacije.'
    },
    {
      year: '2021 - 2022',
      title: 'Frontend Intern',
      company: 'Startup Kompanija',
      description: 'Učestvovao u razvoju MVP za startup projekte.'
    }
  ];

  const sectionRef = useRef(null);

  return (
    <section 
      id="o-meni" 
      ref={sectionRef}
      className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              O Meni
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-4 md:mb-6"></div>
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Upoznajte me bolje - moju strast, iskustvo i vještine u web razvoju
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Lijeva strana - Tekst i Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Uvodni tekst */}
            <div className="space-y-4 md:space-y-6 px-2">
              <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-semibold">
                Danilo Dubljević
              </h3>
              <p className="font-['Inter'] text-base md:text-lg text-gray-300 leading-relaxed">
                Frontend developer ka strastvu za kreiranje modernih, brzih i responzivnih web aplikacija. 
                Specijalizovan za React ekosistem i moderne CSS framework-ove.
              </p>
              <p className="font-['Inter'] text-base md:text-lg text-gray-300 leading-relaxed">
                Konstantno učim i usavršavam se kako bih ostao u toku s najnovijim trendovima 
                i tehnologijama u web razvoju.
              </p>
            </div>

            {/* Personalne informacije */}
            <div className="bg-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <h4 className="font-['Montserrat'] text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Lične Informacije
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1">
                  <p className="font-['Inter'] text-gray-400 text-xs md:text-sm">Ime i Prezime</p>
                  <p className="font-['Inter'] text-base md:text-lg">Danilo Dubljević</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-['Inter'] text-gray-400 text-xs md:text-sm">Lokacija</p>
                  <p className="font-['Inter'] text-base md:text-lg">Crna Gora</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-['Inter'] text-gray-400 text-xs md:text-sm">Email</p>
                  <p className="font-['Inter'] text-base md:text-m text-sm md:text-base">danilo.dubljevic666@gmail.com</p>
                </div>
                
                <div className="space-y-1">
                  <p className="font-['Inter'] text-gray-400 text-xs md:text-sm">Dostupnost</p>
                  <p className="font-['Inter'] text-base md:text-lg text-green-400 text-sm md:text-base">✓ Dostupan za projekte</p>
                </div>
              </div>
            </div>

            {/* Iskustvo */}
            <div className="px-2">
              <h4 className="font-['Montserrat'] text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Iskustvo
              </h4>
              
              <div className="space-y-6 md:space-y-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b from-white via-gray-200 to-gray-400">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 md:pl-8">
                    <div className="absolute left-[-3px] md:left-[-4px] top-1 w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400"></div>
                    <div className="mb-2">
                      <span className="font-['Inter'] font-medium text-gray-400 text-sm md:text-base">{exp.year}</span>
                      <h5 className="font-['Montserrat'] text-lg md:text-xl font-semibold mt-1">{exp.title}</h5>
                      <p className="font-['Inter'] text-gray-300 text-sm md:text-base">{exp.company}</p>
                    </div>
                    <p className="font-['Inter'] text-gray-400 text-sm md:text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desna strana - Vještine i Interesi */}
          <div className="space-y-6 md:space-y-8">
            {/* Vještine */}
            <div>
              <h4 className="font-['Montserrat'] text-xl md:text-2xl font-semibold mb-6 md:mb-8">
                Vještine
              </h4>
              
              <div className="space-y-4 md:space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-['Inter'] font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="font-['Inter'] text-gray-400 text-sm md:text-base">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-white via-gray-200 to-gray-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interesi */}
            <div className="bg-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <h4 className="font-['Montserrat'] text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Interesi
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {[
                  { icon: '💻', name: 'Web Dev' },
                  { icon: '🎨', name: 'UI/UX' },
                  { icon: '📱', name: 'Mobile' },
                  { icon: '💡', name: 'Creativity' },
                  { icon: '📚', name: 'Reading' },
                  { icon: '✈️', name: 'Travel' }
                ].map((interest, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-xl md:text-2xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                      {interest.icon}
                    </span>
                    <span className="font-['Inter'] text-xs md:text-sm text-center">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <h4 className="font-['Montserrat'] text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                Zainteresovan za saradnju?
              </h4>
              <p className="font-['Inter'] text-gray-300 text-sm md:text-base mb-4 md:mb-6">
                Uvijek sam otvoren za razgovor o novim projektima i prilikama za saradnju.
              </p>
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 font-['Inter'] font-semibold text-white rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 group text-sm md:text-base w-full sm:w-auto"
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
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {[
            { number: '15+', label: 'Projekata', suffix: '' },
            { number: '3', label: 'Godina', suffix: ' Iskustva' },
            { number: '100%', label: 'Zadovoljnih', suffix: ' Klijenata' },
            { number: '∞', label: 'Linija', suffix: ' Koda' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="font-['Montserrat'] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                {stat.number}
              </div>
              <div className="font-['Inter'] text-gray-300 text-xs md:text-sm">
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