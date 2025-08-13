const Footer = () => {
  return (
    <footer className="bg-inverse text-inverse py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LockMyBag</h3>
            <p className="text-inverse-muted">
              Service de consigne à bagages sécurisé à Rouen et Nantes
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Villes</h4>
            <ul className="space-y-2 text-inverse-muted">
              <li>
                <a href="#rouen" className="text-inverse hover:text-brand-secondary transition-colors">
                  Rouen - Centre-ville
                </a>
              </li>
              <li>
                <a href="#nantes" className="text-inverse hover:text-brand-secondary transition-colors">
                  Nantes - Gare SNCF
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-inverse-muted">
              <li>📧 contact@lockmybag.fr</li>
              <li>📱 06 XX XX XX XX</li>
              <li>🕒 7j/7 - 8h à 22h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-inverse-soft mt-8 pt-8 text-center text-inverse-muted">
          <p>&copy; 2025 LockMyBag. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
