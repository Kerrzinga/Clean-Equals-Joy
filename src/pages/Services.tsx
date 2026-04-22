import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  bookLabel: string;
}

const services: Service[] = [
  {
    title: 'The Joyful Regular Clean',
    description:
      'Maintenance cleaning on a weekly or fortnightly basis. Ideal for busy families in Albany or Silverdale.',
    imageUrl:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    features: [
      'All living areas dusted & vacuumed',
      'Bathroom & Kitchen deep sanitization',
      'Floor mopping and waste removal',
    ],
    bookLabel: 'Book Regular Clean',
  },
  {
    title: 'Spring & Deep Clean',
    description:
      'A heavy-duty clean that reaches into every corner. Perfect for seasonal refreshes or post-renovation.',
    imageUrl:
      'https://images.unsplash.com/photo-1584820927498-cafe8c1c969f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Skirting boards and window tracks',
      'Inside ovens and large appliances',
      'Wall spot cleaning and high dusting',
    ],
    bookLabel: 'Book Deep Clean',
  },
  {
    title: 'Move-In / Move-Out',
    description:
      'Stress-free tenancy cleans. We meet high property management standards across North Auckland.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Comprehensive bond-return cleaning',
      'Sanitizing all cupboards and shelves',
      'Detailed surface scrubbing',
    ],
    bookLabel: 'Book Move Clean',
  },
  {
    title: 'Office & Commercial',
    description:
      'Maintain a professional image with our customized commercial cleaning schedules.',
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Daily/Weekly office upkeep',
      'Sanitization of shared spaces',
      'Professional floor care',
    ],
    bookLabel: 'Book Office Clean',
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="page-enter py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Cleaning Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional solutions for every environment. We make sure your space feels brand new.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
            >
              <div
                className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.imageUrl}')` }}
              />
              <div className="p-8 relative bg-slate-50 z-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="text-slate-600 space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <button
                  onClick={handleBook}
                  className="text-cyan-700 font-bold hover:text-cyan-900 flex items-center gap-1 mt-auto"
                >
                  {service.bookLabel} <span>➔</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
