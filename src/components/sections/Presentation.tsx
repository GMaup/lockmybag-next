import Button from '../ui/Button';
import Image from 'next/image';

const Presentation = () => {
  return (
    <section id="presentation" className="scroll-mt-28 pt-20 pb-16 bg-gradient-to-br from-surface-primary to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Consigne à bagages
              <span className="text-brand-primary"> sécurisée</span>
            </h1>
            <p className="text-xl text-secondary mb-8">
              Déposez vos bagages en toute sécurité à Rouen et Nantes. 
              Service disponible 7j/7 de 8h à 22h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="large" href="#pricing">
                Réserver maintenant
              </Button>
              <Button variant="outline" size="large" href="#howitworks">
                Comment ça marche ?
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-surface-primary rounded-full blur-3xl opacity-30"></div>
              <Image 
                src="/images/common/6a402d57-c8cb-4c8a-ad49-edfbea789e3e.webp" 
                alt="Service de consigne à bagages"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
