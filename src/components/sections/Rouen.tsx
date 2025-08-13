import Button from '../ui/Button';

const Rouen = () => {
  return (
    <section id="rouen" className="scroll-mt-28 py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              📍 Rouen - Centre Ville
            </h2>
            <div className="space-y-4 text-secondary">
              <p className="text-lg">
                Notre point de consigne à Rouen est idéalement situé en plein cœur du centre historique, 
                à seulement 5 minutes à pied de la Cathédrale Notre-Dame.
              </p>
              
              <div className="bg-background rounded-lg p-6 shadow-md">
                <h3 className="font-bold text-xl mb-4 text-primary">Informations pratiques</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">📍</span>
                    <div>
                      <strong>Adresse :</strong><br />
                      15 Rue du Gros-Horloge<br />
                      76000 Rouen
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">🚇</span>
                    <div>
                      <strong>Transports :</strong><br />
                      Métro : Station Palais de Justice (2 min)<br />
                      Bus : Lignes F1, F2, 5, 11, 13
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">🕐</span>
                    <div>
                      <strong>Horaires :</strong><br />
                      Lundi - Dimanche : 8h00 - 22h00
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-primary w-6 flex-shrink-0 inline-flex justify-center mt-0.5">📞</span>
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
                  <li>• Cathédrale Notre-Dame (5 min)</li>
                  <li>• Gros-Horloge (1 min)</li>
                  <li>• Place du Vieux-Marché (3 min)</li>
                  <li>• Musée des Beaux-Arts (7 min)</li>
                </ul>
              </div>
              
              <Button variant="peps1" size="large" className="mt-6">
                Réserver à Rouen
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-surface-primary rounded-2xl p-4 border border-peps1-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.3674837266!2d1.0909!3d49.4432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI2JzM1LjUiTiAxwrAwNSczMi44IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
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
        </div>
      </div>
    </section>
  );
};

export default Rouen;
