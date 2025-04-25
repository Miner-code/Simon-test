import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const form = document.querySelector(".contact-form");
    if (form) {
      form.classList.add("slide-in-left");
      form.style.animationDelay = "0.3s";
      form.style.opacity = 0;
    }
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen scroll-smooth bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
    >
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="accueil" className="relative text-white py-28 px-6 text-center scroll-mt-20 bg-black/80">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Digitalisez votre chantier. <br /> Instantanément.
            </h1>
            <button className="bg-[#8e00ae] hover:bg-[#a300ab] text-white font-semibold px-6 py-3 rounded-xl transition">
              Demander une démo
            </button>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section id="fonctionnalites" className="scroll-mt-20 text-white py-20 px-6 bg-black/80">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wider text-[#a300ab]">
            Faites plus avec KodiBuild
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Gestion des tâches", desc: "Assignez et suivez les tâches facilement" },
              { title: "Suivi", desc: "Gérez les équipes et les présences" },
              { title: "Rapports en temps réel", desc: "Analysez les données instantanément" },
              { title: "Plans interactifs", desc: "Accédez aux plans et documents" },
            ].map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tarifs */}
        <section id="tarifs" className="scroll-mt-20 text-white py-20 px-6 bg-black/80">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wider text-[#a300ab]">
            Tarifs
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[{
              title: "Basique",
              price: "29€/mois",
              features: [
                "✔ Accès aux fonctionnalités essentielles",
                "✔ Suivi de projet",
                "✔ Rapports simples",
              ],
            }, {
              title: "Standard",
              price: "59€/mois",
              features: [
                "✔ Fonctionnalités avancées",
                "✔ Gestion des tâches",
                "✔ Rapports détaillés",
              ],
            }, {
              title: "Premium",
              price: "99€/mois",
              features: [
                "✔ Toutes les fonctionnalités",
                "✔ Support prioritaire",
                "✔ Rapports personnalisés",
              ],
            }].map((plan, i) => (
              <div key={i} className="bg-[#1a1a1a] flex flex-col justify-between rounded-xl shadow-md border-t-4 border-[#7900b2] p-6 w-full text-center">
                <div>
                  <h3 className="text-xl font-bold text-[#fcfcfc] mb-2">{plan.title}</h3>
                  <p className="text-2xl font-bold text-[#8e00ae] mb-4">{plan.price}</p>
                  <ul className="text-left text-sm mb-6 space-y-2 text-gray-300">
                    {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                </div>
                <button className="mt-auto bg-[#8e00ae] hover:bg-[#a300ab] text-white px-4 py-2 rounded-lg font-semibold transition">
                  CHOISIR
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Chiffres */}
        <section id="chiffres" className="scroll-mt-20 text-white py-20 px-6 bg-black/80">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wider">
            KodiBuild en chiffres
          </h2>
          <div className="flex flex-wrap justify-center gap-12 text-center max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold">3.2k+</p>
              <p className="text-sm text-gray-400">Projets</p>
            </div>
            <div>
              <p className="text-4xl font-bold">145k+</p>
              <p className="text-sm text-gray-400">Heures économisées</p>
            </div>
            <div>
              <p className="text-4xl font-bold">8.5k+</p>
              <p className="text-sm text-gray-400">Utilisateurs</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 text-white py-20 px-6 bg-black/80">
          <h2 className="text-2xl font-bold text-center mb-12 uppercase tracking-wider text-[#a300ab]">
            Contactez-nous
          </h2>
          <form className="contact-form max-w-xl mx-auto flex flex-col gap-4 bg-[#1a1a1a] p-6 rounded-xl shadow-md border-t-4 border-[#8e00ae]">
            <input
              type="text"
              placeholder="Votre nom"
              className="p-3 border border-gray-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8e00ae]"
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              className="p-3 border border-gray-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8e00ae]"
              required
            />
            <textarea
              rows="5"
              placeholder="Votre message"
              className="p-3 border border-gray-700 bg-transparent text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#8e00ae]"
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
      <Footer />
    </div>
  );
}
