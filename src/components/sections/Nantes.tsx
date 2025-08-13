import Button from '../ui/Button';

const Nantes = () => {
  return (
    <section id="nantes" className="scroll-mt-28 py-16 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-surface-secondary rounded-2xl p-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.8!2d-1.5419!3d47.2173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEzJzAyLjMiTiAxwrAzMiczMC4xIlc!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              📍 Nantes - Gare SNCF
            </h2>
            <div className="space-y-4 text-secondary">
              <p className="text-lg">
                Notre consigne à Nantes est située à proximité immédiate de la gare SNCF, 
                parfait pour les voyageurs en transit ou pour explorer la ville les mains libres.
              </p>
              
              <div className="bg-background rounded-lg p-6 shadow-md border border-token">
                <h3 className="font-bold text-xl mb-4 text-primary">Informations pratiques</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">📍</span>
                    <div>
                      <strong>Adresse :</strong><br />
                      5 Boulevard de Stalingrad<br />
                      44000 Nantes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">🚊</span>
                    <div>
                      <strong>Transports :</strong><br />
                      Tramway : Ligne 1 - Gare SNCF (1 min)<br />
                      Bus : C2, C3, 12, 26
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">🕐</span>
                    <div>
                      <strong>Horaires :</strong><br />
                      Lundi - Dimanche : 8h00 - 22h00
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-secondary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">📞</span>
                    <div>
                      <strong>Contact local :</strong><br />
                      06 XX XX XX XX
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h3 className="font-bold text-xl mb-3 text-primary">À proximité</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>• Gare SNCF (2 min)</li>
                  <li>• Château des Ducs (10 min)</li>
                  <li>• Passage Pommeraye (8 min)</li>
                  <li>• Île de Nantes (15 min)</li>
                </ul>
              </div>
              
              <Button variant="secondary" size="large" className="mt-6">
                Réserver à Nantes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nantes;
