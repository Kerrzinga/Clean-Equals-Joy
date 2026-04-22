import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: '📍',
    iconColor: 'text-cyan-600',
    title: 'Locally Focused',
    description:
      'Based in North Auckland. We are your neighbors and we care about the local community\'s satisfaction.',
  },
  {
    icon: '🛡️',
    iconColor: 'text-emerald-500',
    title: 'Trusted & Secure',
    description:
      'Experienced cleaners who are background-checked and fully insured for your absolute peace of mind.',
  },
  {
    icon: '✨',
    iconColor: 'text-cyan-600',
    title: 'Professional Quality',
    description:
      'We use top-tier equipment and products to ensure every surface is left sanitized and sparkling clean.',
  },
];

export default function Home() {
  const navigate = useNavigate();

  const handleNav = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <div
        className="h-[80vh] min-h-[500px] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Discover the Joy of a <br />
            <span className="text-cyan-400">Spotless Home</span>
          </h1>
          <p className="text-xl text-slate-200 mb-8 font-light drop-shadow">
            Premium, reliable cleaning services across North Auckland. From
            Whangaparāoa to Albany, we handle the mess so you can enjoy your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNav('/contact')}
              className="bg-cyan-600 hover:bg-cyan-500 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => handleNav('/services')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 text-lg font-bold py-3 px-8 rounded-full shadow-lg transition"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Area Intro & USP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-cyan-700 font-bold uppercase tracking-wider text-sm mb-2">
            Welcome to Clean Equals Joy
          </p>
          <h2 className="text-3xl font-bold text-slate-800">
            Your Trusted Local Experts in North Auckland
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We provide high-quality cleaning for homes and businesses in
            Whangaparāoa, Silverdale, Orewa, and Albany.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, iconColor, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition"
            >
              <div className={`text-4xl ${iconColor} mb-4`}>{icon}</div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
