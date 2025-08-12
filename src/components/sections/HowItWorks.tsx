const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Réservez en ligne",
      description: "Choisissez votre ville, la date et le nombre de bagages. Paiement sécurisé en ligne.",
      icon: "📱"
    },
    {
      number: "2",
      title: "Déposez vos bagages",
      description: "Rendez-vous à notre point de consigne avec votre confirmation. Dépôt rapide en 2 minutes.",
      icon: "🎒"
    },
    {
      number: "3",
      title: "Profitez de votre journée",
      description: "Explorez la ville les mains libres. Vos bagages sont en sécurité dans notre espace surveillé.",
      icon: "🚶"
    },
    {
      number: "4",
      title: "Récupérez vos affaires",
      description: "Revenez quand vous voulez avant 22h. Récupération simple avec votre code de réservation.",
      icon: "✅"
    }
  ];

  return (
    <section id="howitworks" className="scroll-mt-28 py-16 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Un processus simple et rapide en 4 étapes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full">
                  <svg className="w-full h-2 text-border" viewBox="0 0 100 10">
                    <path
                      d="M 0 5 L 100 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-primary text-brand-primary-foreground rounded-full text-3xl font-bold mb-4">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Étape {step.number}
                </h3>
                <h4 className="text-lg font-semibold mb-2 text-brand-primary">
                  {step.title}
                </h4>
                <p className="text-secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-surface-primary rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              💡 Bon à savoir
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <div className="flex items-start">
                <span className="text-2xl mr-3">🔒</span>
                <div>
                  <strong>Sécurité maximale</strong>
                  <p className="text-sm text-secondary mt-1">
                    Espace surveillé 24/7 avec caméras et alarme
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">📏</span>
                <div>
                  <strong>Toutes tailles</strong>
                  <p className="text-sm text-secondary mt-1">
                    Sacs à dos, valises, équipements sportifs acceptés
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🎫</span>
                <div>
                  <strong>Sans impression</strong>
                  <p className="text-sm text-secondary mt-1">
                    Confirmation sur smartphone suffisante
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
