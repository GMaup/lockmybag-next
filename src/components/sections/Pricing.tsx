import Card from '../ui/Card';
import Image from 'next/image';

const Pricing = () => {
  const pricingItems = [
    {
      key: 'S',
      title: 'Taille S',
      desc: 'Petit sac ou sac à dos',
      img: '/images/common/TailleCasiers-ChatGPT Image 27 avr. 2025, 23_05_07-S-2.png',
      alt: 'Casier taille S',
      priceHour: '1,5 € /heure',
      priceDay: '6 € la journée'
    },
    {
      key: 'M',
      title: 'Taille M',
      desc: 'Valise cabine',
      img: '/images/common/TailleCasiers-ChatGPT Image 27 avr. 2025, 23_05_07-M-2.png',
      alt: 'Casier taille M',
      priceHour: '2,5 € /heure',
      priceDay: '11 € la journée'
    },
    {
      key: 'L',
      title: 'Taille L',
      desc: 'Grande valise',
      img: '/images/common/TailleCasiers-ChatGPT Image 27 avr. 2025, 23_05_07-L-2.png',
      alt: 'Casier taille L',
      priceHour: '3,5 € /heure',
      priceDay: '15 € la journée'
    }
  ];

  return (
    <section id="pricing" className="scroll-mt-28 py-16 bg-surface-light">
      <div className="container mx-auto px-4">

      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tarifs
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
          Nos tarifs simples et transparents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingItems.map((item) => (
            <Card key={item.key} className="h-full">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-full aspect-square overflow-hidden rounded-lg bg-surface mb-4">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={544}
                    height={544}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="menu-description">
                  <h3 className="heading-style-h3 text-2xl font-bold mb-1">{item.title}</h3>
                  <div className="text-secondary">{item.desc}</div>
                </div>
                <div className="price-tag mt-4 text-peps2 font-semibold">
                  {item.priceHour}<br />{item.priceDay}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
