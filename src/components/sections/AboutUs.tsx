import Image from 'next/image';

const AboutUs = () => {
  const stats = [
    { number: "10K+", label: "Bagages stockés" },
    { number: "4.9/5", label: "Note moyenne" },
    { number: "2", label: "Villes" },
    { number: "24/7", label: "Support client" }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      location: "Rouen",
      rating: 5,
      comment: "Service parfait ! J'ai pu visiter le centre historique de Rouen sans m'encombrer de mes valises. Personnel très sympathique."
    },
    {
      name: "Thomas B.",
      location: "Nantes",
      rating: 5,
      comment: "Très pratique près de la gare. J'ai déposé mes bagages le matin et récupéré le soir sans problème. Je recommande !"
    },
    {
      name: "Sophie M.",
      location: "Rouen",
      rating: 5,
      comment: "Excellent service, rapide et sécurisé. Les tarifs sont très raisonnables. Je reviendrai sans hésiter."
    }
  ];

  return (
    <section id="about-us" className="scroll-mt-28 py-16 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            À Propos de LockMyBag
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Depuis 2025, nous facilitons vos déplacements en vous libérant de vos bagages. 
            Notre mission : vous permettre de profiter pleinement de votre journée.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">{stat.number}</div>
              <div className="text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Notre Histoire</h3>
              <div className="space-y-4 text-secondary">
                <p>
                  LockMyBag est né d&apos;un constat simple : il est difficile de profiter d&apos;une ville 
                  quand on est encombré de bagages. Que vous soyez touriste, voyageur d&apos;affaires 
                  ou simplement de passage, nous sommes là pour vous simplifier la vie.
                </p>
                <p>
                  Nous avons créé un service de consigne moderne, sécurisé et accessible, 
                  avec des emplacements stratégiques à Rouen et Nantes. Notre équipe passionnée 
                  s&apos;engage à offrir une expérience client exceptionnelle.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Nos Valeurs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-secondary w-5 flex-shrink-0 inline-flex justify-center mt-0.5">✓</span>
                      <div><strong>Sécurité</strong> : Vos biens sont notre priorité</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-secondary w-5 flex-shrink-0 inline-flex justify-center mt-0.5">✓</span>
                      <div><strong>Simplicité</strong> : Un service facile et rapide</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-secondary w-5 flex-shrink-0 inline-flex justify-center mt-0.5">✓</span>
                      <div><strong>Flexibilité</strong> : Des horaires adaptés à vos besoins</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-secondary w-5 flex-shrink-0 inline-flex justify-center mt-0.5">✓</span>
                      <div><strong>Confiance</strong> : Une équipe à votre écoute</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-brand-soft rounded-2xl p-8 text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/branding/lockmybag-badge.svg"
                  alt="Logo LockMyBag"
                  width={96}
                  height={96}
                  className="h-24 w-24 drop-shadow-md"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2 text-primary">Notre Engagement</h4>
              <p className="text-secondary">
                Vous offrir la liberté de découvrir et profiter de chaque instant, 
                sans vous soucier de vos bagages.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Ce que disent nos clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-warning">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted">{testimonial.location}</span>
                </div>
                <p className="text-secondary mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                <p className="font-semibold text-primary">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
