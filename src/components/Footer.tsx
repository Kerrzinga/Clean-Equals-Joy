import { useNavigate } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Services', to: '/services' },
  { label: 'Get a Quote', to: '/contact' },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleNav = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="text-2xl mr-2 text-cyan-500">✨</span>
            <span className="font-bold text-xl text-white">
              Clean<span className="text-cyan-500">Equals</span>Joy
            </span>
          </div>
          <p className="text-sm text-slate-400">
            Your local North Auckland experts in residential and commercial hygiene.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
            Quick Navigation
          </h4>
          <ul className="space-y-2">
            {footerLinks.map(({ label, to }) => (
              <li key={to}>
                <button
                  onClick={() => handleNav(to)}
                  className="hover:text-cyan-400 transition"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
            Direct Contact
          </h4>
          <p className="mb-2">
            📞 <strong>022-404-5867</strong>
          </p>
          <p className="mb-2">✉ hello@cleanequalsjoy.co.nz</p>
          <p>📍 North Auckland, NZ</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        &copy; 2025 Clean Equals Joy. All rights reserved. North Auckland Professional Cleaners.
      </div>
    </footer>
  );
}
