import React, { useEffect } from "react";
import ipadView from "../assets/iPad_view.png";
import compView from "../assets/Comp_view.png";

export default function Accueil() {
  useEffect(() => {
    const fadeIn = (selector, animationClass) => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.classList.add(animationClass);
        el.style.animationDelay = `${i * 0.2}s`;
        el.style.opacity = 0;
      });
    };

    fadeIn(".animate-on-load", "fade-slide-up");
    fadeIn(".feature-card", "slide-in-left");
    fadeIn(".tarif-card", "slide-in-right");

    const form = document.querySelector(".contact-form");
    if (form) {
      form.classList.add("slide-in-left");
      form.style.animationDelay = "0.3s";
      form.style.opacity = 0;
    }
  }, []);

  return (
    <main className="scroll-smooth">
      {/* Hero section */}
      <section className="bg-[#6400b6] text-white text-center py-20 px-6" id="accueil">
        <h1 className="text-4xl font-bold font-poppins mb-4 animate-on-load">
          Pilotez vos chantiers, en un coup d’œil
        </h1>
        <p className="text-lg max-w-xl mx-auto mb-6 animate-on-load">
          Une solution intuitive pour avoir une vue claire et globale de vos projets,
          sur tous vos supports.
        </p>
        <button className="bg-[#8e00ae] hover:bg-[#a300ab] text-white font-semibold px-6 py-3 rounded-xl transition animate-on-load">
          ESSAI GRATUIT
        </button>
      </section>

      {/* Fonctionnalités */}
      <section className="bg-[#fcfcfc] py-20 px-6 max-w-6xl mx-auto" id="fonctionnalites">
        <h2 className="text-3xl font-bold text-center text-[#6400b6] mb-12">
          Fonctionnalités
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="feature-card bg-white p-6 rounded-xl shadow-md border-t-4 border-[#8e00ae]">
            <h3 className="text-xl font-semibold text-[#7900b2] mb-2">Suivi de projet</h3>
            <p>Suivez en temps réel l’avancement de vos chantiers.</p>
          </div>
          <div className="feature-card bg-white p-6 rounded-xl shadow-md border-t-4 border-[#8e00ae]">
            <h3 className="text-xl font-semibold text-[#7900b2] mb-2">Gestion des tâches</h3>
            <p>Attribuez et suivez les tâches de votre équipe facilement.</p>
          </div>
          <div className="feature-card bg-white p-6 rounded-xl shadow-md border-t-4 border-[#8e00ae]">
            <h3 className="text-xl font-semibold text-[#7900b2] mb-2">Rapports détaillés</h3>
            <p>Consultez des rapports précis pour analyser la progression.</p>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="bg-[#fcfcfc] py-20 px-6 max-w-6xl mx-auto" id="tarifs">
        <h2 className="text-3xl font-bold text-center text-[#6400b6] mb-12">Tarifs</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="tarif-card bg-white rounded-xl shadow-md border-t-4 border-[#7900b2] p-6 w-72 text-center">
            <h3 className="text-xl font-bold text-[#6400b6] mb-2">Basique</h3>
            <p className="text-2xl font-bold text-[#8e00ae] mb-4">29€/mois</p>
            <ul className="text-left text-sm mb-6 space-y-2">
              <li>✔ Accès aux fonctionnalités essentielles</li>
              <li>✔ Suivi de projet</li>
              <li>✔ Rapports simples</li>
            </ul>
            <button className="bg-[#8e00ae] hover:bg-[#a300ab] text-white px-4 py-2 rounded-lg font-semibold transition">
              CHOISIR
            </button>
          </div>

          <div className="tarif-card bg-white rounded-xl shadow-md border-t-4 border-[#7900b2] p-6 w-72 text-center">
            <h3 className="text-xl font-bold text-[#6400b6] mb-2">Standard</h3>
            <p className="text-2xl font-bold text-[#8e00ae] mb-4">59€/mois</p>
            <ul className="text-left text-sm mb-6 space-y-2">
              <li>✔ Fonctionnalités avancées</li>
              <li>✔ Gestion des tâches</li>
              <li>✔ Rapports détaillés</li>
            </ul>
            <button className="bg-[#8e00ae] hover:bg-[#a300ab] text-white px-4 py-2 rounded-lg font-semibold transition">
              CHOISIR
            </button>
          </div>

          <div className="tarif-card bg-white rounded-xl shadow-md border-t-4 border-[#7900b2] p-6 w-72 text-center">
            <h3 className="text-xl font-bold text-[#6400b6] mb-2">Premium</h3>
            <p className="text-2xl font-bold text-[#8e00ae] mb-4">99€/mois</p>
            <ul className="text-left text-sm mb-6 space-y-2">
              <li>✔ Toutes les fonctionnalités</li>
              <li>✔ Support prioritaire</li>
              <li>✔ Rapports personnalisés</li>
            </ul>
            <button className="bg-[#8e00ae] hover:bg-[#a300ab] text-white px-4 py-2 rounded-lg font-semibold transition">
              CHOISIR
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#fcfcfc] py-20 px-6 max-w-lg mx-auto" id="contact">
        <h2 className="text-3xl font-bold text-center text-[#6400b6] mb-12">Contactez-nous</h2>
        <form className="contact-form flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md border-t-4 border-[#8e00ae]">
          <input
            type="text"
            placeholder="Votre nom"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8e00ae]"
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8e00ae]"
            required
          />
          <textarea
            rows="5"
            placeholder="Votre message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8e00ae]"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#8e00ae] hover:bg-[#a300ab] text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  );
}
