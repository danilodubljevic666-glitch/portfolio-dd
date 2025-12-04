import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          {/* Glavni sadržaj footera */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Lijeva kolona - Logo i opis */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-white via-gray-200 to-gray-400 flex items-center justify-center">
                  <span className="font-['Montserrat'] font-bold text-black text-lg">DD</span>
                </div>
                <span className="font-['Montserrat'] text-xl font-bold">Danilo Dubljević</span>
              </div>
              <p className="font-['Inter'] text-gray-400 text-sm">
                Frontend developer specijalizovan za React i moderne web tehnologije. 
                Kreiram responzivne i performantne web aplikacije.
              </p>
            </div>

            {/* Srednja kolona - Brzi linkovi */}
            <div>
              <h3 className="font-['Montserrat'] font-semibold mb-4">Brzi Linkovi</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Početna', href: '#' },
                  { label: 'O Meni', href: '#o-meni' },
                  { label: 'Projekti', href: '#projekti' },
                  { label: 'Tehnologije', href: '#tehnologije' },
                  { label: 'Kontakt', href: '#kontakt' },
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="font-['Inter'] text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desna kolona - Kontakt info */}
            <div>
              <h3 className="font-['Montserrat'] font-semibold mb-4">Kontakt</h3>
              <div className="space-y-2">
                <p className="font-['Inter'] text-gray-400 text-sm">
                  📧 danilo.dubljevic666@gmail.com
                </p>
                <p className="font-['Inter'] text-gray-400 text-sm">
                  📍 Crna Gora
                </p>
                <div className="flex space-x-4 mt-4">
                  {[
                    { 
                      name: 'GitHub', 
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      ), 
                      href: 'https://github.com/danilodubljevic666-glitch' 
                    },
                    { 
                      name: 'LinkedIn', 
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      ), 
                      href: 'https://linkedin.com' 
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright sekcija */}
          <div className="mt-8 md:mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright tekst */}
              <div className="text-center md:text-left">
                <p className="font-['Inter'] text-gray-400 text-sm">
                  © {currentYear} Danilo Dubljević. Sva prava zadržana.
                </p>
                <p className="font-['Inter'] text-gray-500 text-xs mt-1">
                  Ovaj portfolio je kreiran koristeći React i Tailwind CSS.
                </p>
              </div>

              {/* Legal linkovi */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  { label: 'Uslovi korištenja', href: '#' },
                  { label: 'Politika privatnosti', href: '#' },
                  { label: 'Cookies', href: '#' },
                  { label: 'Izjava o pristupačnosti', href: '#' },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="font-['Inter'] text-gray-400 hover:text-white transition-colors duration-300 text-xs"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Scroll to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                aria-label="Vrati se na vrh"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Na vrh
              </button>
            </div>

            {/* Dodatne informacije */}
            <div className="mt-6 text-center">
              <p className="font-['Inter'] text-gray-500 text-xs">
                Oznake: portfolio, frontend developer, react developer, web development, crna gora
              </p>
              <p className="font-['Inter'] text-gray-600 text-xs mt-2">
                Svi projekti i radovi prikazani na ovoj stranici su autorski radovi.
                Zabranjeno je kopiranje ili korištenje bez pismene dozvole.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;