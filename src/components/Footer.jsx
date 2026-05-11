import { Link } from "react-router-dom";
import logo from "../images/logo2.png";

function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-10 mt-16 border-t border-gray-300 dark:border-gray-800">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">

      
        <div>
          <img
            src={logo}
            alt="Estetik logo"
           className="h-14 w-auto object-contain mx-auto md:mx-0"
          />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Vrhunska nega i estetika.
          </p>
        </div>

    
        <div>
          <h3 className="text-yellow-500 mb-3 font-semibold">Navigacija</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-500">Početna</Link></li>
            <li><Link to="/services" className="hover:text-yellow-500">Usluge</Link></li>
            <li><Link to="/booking" className="hover:text-yellow-500">Zakazivanje</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Kontakt</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-yellow-500 mb-3 font-semibold">Zapratite nas</h3>
          <div className="space-y-2 text-sm">
            <a
              href="https://www.instagram.com/studiolepoteestetik/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              📸 Instagram
            </a>
            <br />
            <a
              href="https://www.facebook.com/estetikstudiolepote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              👍 Facebook
            </a>
          </div>
        </div>

       
        <div>
          <h3 className="text-yellow-500 mb-3 font-semibold">Kontakt</h3>
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <p>📍 Slanuška 8, Užice</p>
            <p>📞 +381 60 099 5558</p>
            <p>Pon - Pet: 09-20</p>
            <p>Sub: 09-15</p>
          </div>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-400 dark:text-gray-500 text-xs border-t border-gray-300 dark:border-gray-800 pt-4">
        © 2026 Estetik. Sva prava zadržana.
      </div>
    </footer>
  );
}

export default Footer;