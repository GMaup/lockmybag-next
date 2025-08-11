'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quels types de bagages acceptez-vous ?",
      answer: "Nous acceptons tous types de bagages : sacs à dos, valises (toutes tailles), sacs de sport, poussettes, équipements sportifs (skis, planches de surf), instruments de musique. Seuls les objets dangereux ou illégaux sont refusés."
    },
    {
      question: "Mes bagages sont-ils assurés ?",
      answer: "Oui, tous les bagages déposés sont automatiquement assurés jusqu'à 1000€ par bagage. L'assurance est incluse dans le prix, sans frais supplémentaires."
    },
    {
      question: "Puis-je déposer mes bagages pour plusieurs jours ?",
      answer: "Absolument ! Nous proposons des tarifs dégressifs pour les dépôts de plusieurs jours. Vous pouvez laisser vos bagages jusqu'à 30 jours consécutifs."
    },
    {
      question: "Comment fonctionne la réservation ?",
      answer: "C'est très simple : réservez en ligne en 2 minutes, recevez votre confirmation par email, présentez-vous avec votre code de réservation. Pas besoin d'imprimer, votre smartphone suffit !"
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer: "Oui, l'annulation est gratuite jusqu'à 24h avant votre dépôt. Passé ce délai, la réservation n'est plus remboursable mais reste modifiable."
    },
    {
      question: "Que se passe-t-il si je récupère mes bagages en retard ?",
      answer: "Nos horaires sont flexibles (8h-22h). Si vous ne pouvez pas récupérer vos bagages avant 22h, contactez-nous et nous trouverons une solution. Des frais supplémentaires peuvent s'appliquer pour une récupération le lendemain."
    },
    {
      question: "Acceptez-vous les groupes ?",
      answer: "Oui ! Pour les groupes de plus de 5 personnes, contactez-nous directement pour bénéficier de tarifs préférentiels et d'un service personnalisé."
    },
    {
      question: "Y a-t-il une limite de poids ?",
      answer: "Nous n'avons pas de limite de poids stricte, mais pour les bagages exceptionnellement lourds (>30kg), merci de nous prévenir à l'avance."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-28 py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur notre service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-primary pr-8">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-brand-primary transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Une autre question ?
          </h3>
          <p className="text-secondary mt-4 pb-4">
            Notre équipe est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@lockmybag.fr" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@lockmybag.fr
            </a>
            <a href="tel:+33600000000" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 XX XX XX XX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
