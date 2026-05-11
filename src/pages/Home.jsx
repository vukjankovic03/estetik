

import { Link } from "react-router-dom";
import { useState } from "react";


import heroImage from "../images/img1.jpeg";
import ownerImg from "../images/owner.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img5 from "../images/img5.jpeg";
import img6 from "../images/img6.jpeg";
import img7 from "../images/img7.jpeg";
import img8 from "../images/img8.jpeg";
import img9 from "../images/img9.jpeg";
import vekomLogo from "../images/vekom.png";
import vertonaLogo from "../images/vertona.png";
import skeyndorLogo from "../images/skeyndor.png";
import mesmeriLogo from "../images/mesmeri.png";
import yodeimaLogo from "../images/yodeima.png";
import aleksandarLogo from "../images/aleksandar.png";
import etalonLogo from "../images/etalon.png";
import premiumLogo from "../images/premium.png";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  const ownerText = `Zovem se Svetlana Janković, srednje obrazovanje stekla sam u oblasti arhitekture (gradjevinska skola za visokogradnju) , a zatim sam završila Ekonomski fakultet. Ipak, iako sam se obrazovala u tim pravcima, ono što me je oduvek istinski privlačilo jeste kreativnost, estetika i rad sa ljudima. Vođena tim osećajem, paralelno sam se usavršavala i u oblasti umetnosti, kroz studije primenjenih umetnosti, što je dodatno oblikovalo moj senzibilitet i pristup lepoti.

Svoj pravi profesionalni put pronašla sam u industriji lepote, gde sam uspela da spojim znanje, kreativnost i preduzetnički duh. Osnivač sam studija lepote i akademije „Estetik“, koji je osnovan 2016. godine u Užicu. Od samog početka, moja vizija je bila da stvorim mesto koje će pružati vrhunske usluge, ali i prostor u kome će se klijenti osećati sigurno, negovano i samouvereno.

Kroz godine predanog rada, „Estetik“ je izrastao u jedan od prepoznatljivijih studija u zapadnoj Srbiji. Svu svoju energiju, znanje i iskustvo usmerila sam na razvoj usluga koje ističu prirodnu lepotu, uz individualan pristup svakoj ženi. Poseban fokus stavljam na kvalitet, edukaciju i kontinuirano usavršavanje, jer verujem da samo tako možemo pratiti i postavljati standarde u ovoj industriji.

Pored rada sa klijentima, razvila sam i Akademiju „Estetik“, sa ciljem da svoje znanje i iskustvo prenesem budućim profesionalcima. Kroz edukacije, mentorstvo i praktičan rad, pomažem polaznicima da steknu sigurnost, veštine i pravi pristup poslu, kako bi izgradili uspešnu karijeru u oblasti lepote.

Danas, moj rad obuhvata kako svakodnevni rad sa klijentima, tako i edukaciju novih generacija stručnjaka. Moja misija ostaje ista — da kroz lepotu, znanje i posvećenost doprinesem samopouzdanju žena i pomognem drugima da izgrade sopstveni put u ovoj industriji.`;

  return (
    <div className="w-full">

     
      <section
        className="min-h-[90vh] flex items-center px-6 text-white relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lepota u <span className="text-yellow-500">detaljima</span>
          </h1>

          <p className="text-gray-200 mb-6">
            Profesionalni tretmani za nokte, obrve i trepavice.
          </p>

          <Link
            to="/services"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Pogledaj usluge
          </Link>
        </div>
      </section>

      
      <section className="py-16 px-6 bg-white dark:bg-gray-900 flex flex-col items-center text-center">
        
        <img
          src={ownerImg}
          alt="Vlasnica"
          className="w-32 h-32 object-cover rounded-full mb-3 shadow-lg"
        />

        <h3 className="text-lg font-semibold">Svetlana Janković</h3>
        <p className="text-sm text-gray-500 mb-6">Osnivač Estetik studija</p>

        <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-xl max-w-xl shadow">
          
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-100 dark:bg-gray-800 rotate-45"></div>

          <p className="text-gray-700 dark:text-gray-300 max-h-[6rem] overflow-hidden">
            {ownerText}
          </p>

          <button
            onClick={() => setOpenModal(true)}
            className="mt-4 text-yellow-500 text-sm hover:underline"
          >
            Pročitaj više
          </button>
        </div>
      </section>

     
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
          Usluge
        </h2>

      


<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

  <Link to="/services/Edukacija" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 hover:shadow-xl transition">
    <h3 className="text-lg font-semibold mb-2">Edukacija</h3>
    <p className="text-sm text-gray-500">Profesionalne obuke i mentorstvo</p>
  </Link>

  <Link to="/services/Trajna sminka" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 hover:shadow-xl transition">
    <h3 className="text-lg font-semibold mb-2">Trajna šminka</h3>
    <p className="text-sm text-gray-500">Prirodan i dugotrajan izgled</p>
  </Link>

  <Link to="/services/Nadogradnja trepavica" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 hover:shadow-xl transition">
    <h3 className="text-lg font-semibold mb-2">Trepavice</h3>
    <p className="text-sm text-gray-500">Od prirodnog do glam efekta</p>
  </Link>

  <Link to="/services/Tretmani lica" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 hover:shadow-xl transition">
    <h3 className="text-lg font-semibold mb-2">Tretmani lica</h3>
    <p className="text-sm text-gray-500">Nega, hidratacija i anti-aging</p>
  </Link>

  <Link to="/services/Tretmani tela" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 hover:shadow-xl transition">
    <h3 className="text-lg font-semibold mb-2">Tretmani tela</h3>
    <p className="text-sm text-gray-500">Oblikovanje i regeneracija</p>
  </Link>

  <Link to="/services/Nokti" className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 hover:shadow-xl transition">
    <h3 className="text-lg font-semibold mb-2">Nokti</h3>
    <p className="text-sm text-gray-500">Negovani i elegantni nokti</p>
  </Link>

</div>
      </section>

     
      <section className="bg-gray-100 dark:bg-black text-black dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
          Naš rad
        </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">

  {[img2, img3, img4, img5, img6, img7, img8].map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl shadow-lg group"
    >
      <img
        src={img}
        alt="Estetik rad"
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />
    </div>
  ))}

</div>
      </section>

     
      <section className="py-16 px-6">
        <img
          src={img9}
          alt="Salon"
          className="w-full max-h-[500px] object-cover rounded-xl"
        />
      </section>



<section className="py-16 px-6 bg-white dark:bg-gray-900">

  <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">
    Partneri i brendovi
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={vekomLogo}
        alt="Vekom"
        className="h-16 object-contain mx-auto"
      />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={vertonaLogo}
        alt="Vertona"
        className="h-16 object-contain mx-auto"
      />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={skeyndorLogo}
        alt="Skeyndor"
        className="h-16 object-contain mx-auto"
      />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={mesmeriLogo}
        alt="Mesmeri"
        className="h-16 object-contain mx-auto"
      />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={yodeimaLogo}
        alt="Yodeima"
        className="h-16 object-contain mx-auto"
      />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={aleksandarLogo}
        alt="Aleksandar Cosmetics"
        className="h-16 object-contain mx-auto"
      />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={etalonLogo}
        alt="Etalon Mix"
        className="h-16 object-contain mx-auto"
      />
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
      <img
        src={premiumLogo}
        alt="Premium"
        className="h-16 object-contain mx-auto"
      />
    </div>

  </div>
</section>

   

     
      
      {openModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-gray-900 max-w-2xl p-6 rounded-xl overflow-y-auto max-h-[80vh]">

            <h2 className="text-xl font-bold mb-4 text-yellow-500">
              Svetlana Janković
            </h2>

            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {ownerText}
            </p>

            <button
              onClick={() => setOpenModal(false)}
              className="mt-6 bg-yellow-500 px-4 py-2 rounded text-black"
            >
              Zatvori
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Home;