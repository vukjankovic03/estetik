function Contact() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl text-yellow-500 mb-8 text-center">
        Kontakt
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">

       
        <div className="space-y-5 text-lg">

          <p>
            📞 Telefon:{" "}
            <a
              href="tel:+381600995558"
              className="hover:text-yellow-500 transition"
            >
              +381 60 099 5558
            </a>
          </p>

          <p>
            📸 Instagram:{" "}
            <a
              href="https://www.instagram.com/studiolepoteestetik/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              @studiolepoteestetik
            </a>
          </p>

          <p>
            👍 Facebook:{" "}
            <a
              href="https://www.facebook.com/estetikstudiolepote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              Estetik Studio Lepote
            </a>
          </p>

          <div className="pt-4 border-t border-gray-700">
            <p className="mb-1">📍 Adresa:</p>
            <p className="text-gray-400 text-base">
              Slanuška 8, Užice
            </p>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="mb-1">🕒 Radno vreme:</p>
            <p className="text-gray-400 text-base">
              Pon - Pet: 09:00 - 20:00
            </p>
            <p className="text-gray-400 text-base">
              Sub: 09:00 - 15:00
            </p>
            <p className="text-gray-400 text-base">
              Ned: Neradno
            </p>
          </div>

        </div>

        
        
        <div className="w-full h-[350px] rounded-xl overflow-hidden border border-yellow-500 shadow-xl hover:scale-[1.01] transition">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179.81032534171763!2d19.844288774666378!3d43.85654984830671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d3f4e1392f0f%3A0x710346ad5fffe391!2sStudio%20lepote%20Estetik!5e0!3m2!1ssr!2srs!4v1777017882182!5m2!1ssr!2srs"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google mapa - Estetik"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;