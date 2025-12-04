import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // OVDJE STAVI SVOJ FORMSPREE FORM ID
  const FORMSPREE_FORM_ID = 'mrbnlqav'; // 👈 ZAMIJENI OVO!

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'danilo.dubljevic666@gmail.com', // 👈 Ovdje stavi svoj stvarni email
      link: 'mailto:danilo.dubljevic66@gmail.com', // 👈 I ovdje
      description: 'Pošaljite mi poruku direktno'
    },
    {
      icon: '📍',
      title: 'Lokacija',
      value: 'Crna Gora',
      description: 'Dostupan za remote posao'
    },
    {
      icon: '💼',
      title: 'Status',
      value: 'Dostupan',
      description: 'Otvoren za nove projekte'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      link: 'https://github.com/danilodubljevic666-glitch',
      username: '@danilodubljevic666-glitch'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      link: 'https://www.linkedin.com/in/danilo-dubljevic-5186392a0/',
      username: 'Danilo Dubljevic'
    },
    {
      name: 'Instagram',
      icon: (
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
      ),
      link: 'https://www.instagram.com/dubljeviicd/?next=%2F',
      username: '@dubljeviicd'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validacija
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Molimo popunite sva polja.');
      return;
    }
    
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Molimo unesite validnu email adresu.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nova poruka od ${formData.name} - Portfolio`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        // Uspješno poslano
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Ako Formspree vrati error
        const data = await response.json();
        throw new Error(data.error || 'Greška pri slanju');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      setError('Došlo je do greške pri slanju poruke. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Naslov sekcije */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Kontakt
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-white via-gray-200 to-gray-400 mx-auto mb-4 md:mb-6"></div>
          <p className="font-['Inter'] text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Javite mi se za saradnju, pitanja ili samo da popričamo o tehnologijama
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Lijeva strana - Informacije i Social */}
          <div className="space-y-8">
            {/* Kontakt informacije */}
            <div className="space-y-6">
              <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-semibold">
                Kontaktirajte me
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl md:text-3xl">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Montserrat'] font-semibold text-lg md:text-xl mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="font-['Inter'] text-gray-300 hover:text-white transition-colors duration-300 block text-base md:text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-['Inter'] text-gray-300 text-base md:text-lg">
                            {info.value}
                          </p>
                        )}
                        <p className="font-['Inter'] text-gray-400 text-sm md:text-base mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-semibold mb-6">
                Pratite me
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 group flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors duration-300 mb-2">
                      {social.icon}
                    </div>
                    <div className="font-['Inter'] font-medium text-sm">
                      {social.name}
                    </div>
                    <div className="font-['Inter'] text-gray-400 text-xs mt-1">
                      {social.username}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Radno vrijeme */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="font-['Montserrat'] text-xl md:text-2xl font-semibold mb-4">
                📅 Radno vrijeme
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-['Inter'] text-gray-300">Ponedeljak - Petak</span>
                  <span className="font-['Inter'] font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-['Inter'] text-gray-300">Subota - Nedelja</span>
                  <span className="font-['Inter'] font-medium text-green-400">Po dogovoru</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-['Inter'] text-gray-400 text-sm">
                  Odgovaram na poruke u roku od 24 sata.
                </p>
              </div>
            </div>
          </div>

          {/* Desna strana - Kontakt forma */}
          <div>
            <div className="bg-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-semibold mb-6">
                Pošaljite poruku
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-['Montserrat'] text-xl font-semibold mb-2">Poruka je poslana!</h4>
                  <p className="font-['Inter'] text-gray-300">
                    Hvala vam što ste mi se javili. Odgovoriću vam u najkraćem mogućem roku.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 text-sm font-['Inter'] text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Pošalji novu poruku →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error message */}
                  {error && (
                    <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4">
                      <p className="font-['Inter'] text-red-400 text-sm flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {error}
                      </p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="name" className="font-['Inter'] font-medium block">
                      Ime i prezime *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-['Inter'] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                      placeholder="Vaše ime i prezime"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="font-['Inter'] font-medium block">
                      Email adresa *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-['Inter'] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                      placeholder="vas@email.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-['Inter'] font-medium block">
                      Poruka *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-['Inter'] text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                      placeholder="O čemu želite da razgovaramo?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 font-['Inter'] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? 'bg-gray-700 cursor-not-allowed'
                        : 'bg-gradient-to-r from-white via-gray-200 to-gray-400 text-black hover:opacity-90 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Šaljem...
                      </>
                    ) : (
                      <>
                        Pošalji poruku
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-['Inter'] text-gray-400 text-sm text-center">
                    * Obavezna polja. Odgovoriću vam u roku od 24 sata.
                  </p>
                  <p className="font-['Inter'] text-gray-500 text-xs text-center">
                    Koristimo Formspree za sigurnu obradu poruka.
                  </p>
                </form>
              )}
            </div>

            {/* FAQ sekcija */}
            <div className="mt-8 space-y-4">
              <h4 className="font-['Montserrat'] text-lg font-semibold">
                Često postavljana pitanja
              </h4>
              
              <div className="space-y-3">
                {[
                  { q: 'Kada mogu očekivati odgovor?', a: 'U roku od 24 sata tokom radnih dana.' },
                  { q: 'Koliko košta saradnja?', a: 'Cijene variraju po projektu. Kontaktirajte me za detalje.' },
                  { q: 'Radite li freelance projekte?', a: 'Da, radim freelance i full-time projekte.' }
                ].map((faq, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h5 className="font-['Inter'] font-medium mb-1">{faq.q}</h5>
                    <p className="font-['Inter'] text-gray-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;