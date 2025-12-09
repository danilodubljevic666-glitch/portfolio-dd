import React from 'react';
import Slika from './slike/moja slika.png'
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Lijeva strana - Tekst */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 animate-fadeIn">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="overflow-hidden">
                <p className="font-['Inter'] text-lg md:text-xl text-gray-300 font-light tracking-wider animate-slideUp delay-100">
                  Zdravo, ja sam
                </p>
              </div>
              
              {/* Ime */}
              <div className="overflow-hidden">
                <h1 className="font-['Montserrat'] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-slideUp delay-200">
                  Danilo
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    Dubljević
                  </span>
                </h1>
              </div>
              
              {/* Titula */}
              <div className="overflow-hidden">
                <h2 className="font-['Inter'] text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium tracking-wide animate-slideUp delay-300">
                  Frontend Developer
                  <span className="inline-block ml-3 w-3 h-3 bg-white rounded-full animate-pulse"></span>
                </h2>
              </div>
              
              {/* Opis */}
              <div className="overflow-hidden">
                <p className="font-['Inter'] text-base md:text-lg text-gray-400 max-w-lg leading-relaxed animate-slideUp delay-400">
                  Kreiram moderne, responzivne i korisnički prijatne web aplikacije 
                  koristeći najnovije tehnologije i najbolje prakse.
                </p>
              </div>
              
              {/* Dugme */}
              <div className="overflow-hidden pt-4">
                <a
                  href="#o-meni"
                  className="inline-flex items-center justify-center group animate-slideUp delay-500"
                >
                  <span className="relative px-8 py-4 font-['Inter'] text-lg font-semibold tracking-wide overflow-hidden rounded-lg bg-transparent border-2 border-white transition-all duration-500 hover:bg-white hover:text-black">
                    <span className="relative z-10">Saznaj više</span>
                    
                    {/* Dugme hover efekat */}
                    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    
                    {/* Strelica */}
                    <span className="ml-3 inline-block transition-transform duration-500 group-hover:translate-x-2 group-hover:text-black">
                      →
                    </span>
                  </span>
                </a>
              </div>
              
              {/* Social ikone */}
              <div className="flex space-x-6 pt-6 animate-fadeIn delay-600">
                <a href="https://github.com/danilodubljevic666-glitch" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/danilo-dubljevic-5186392a0/" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:-translate-y-1">
                  <span className="sr-only">Email</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Desna strana - Slika */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fadeInRight mt-8 lg:mt-0">
            <div className="relative">
              {/* Okvir za sliku */}
             <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">

  {/* Ako postoji slika — prikaži je */}
  {Slika ? (
    <img
      src={Slika}
      alt="Danilo Dubljević"
      className="w-full h-full object-cover"
    />
  ) : (
    /* Ako nema slike — placeholder */
    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <svg className="w-32 h-32 md:w-48 md:h-48 text-gray-700 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        <p className="mt-4 text-gray-600 font-['Roboto']">Dodaj svoju sliku</p>
      </div>
    </div>
  )}

</div>
              
              {/* Dekorativni elementi */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-white/10 rounded-full animate-pulse delay-500"></div>
              
              {/* Tehnologije ikone oko slike */}
              <div className="absolute -top-2 left-8 bg-gray-900 p-2 rounded-lg shadow-lg">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
              
              <div className="absolute bottom-12 -right-2 bg-gray-900 p-2 rounded-lg shadow-lg">
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - samo ako ima prostora */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="#projekti" className="text-gray-400 hover:text-white transition-colors duration-300 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;