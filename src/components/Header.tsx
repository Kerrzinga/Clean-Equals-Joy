import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileNav = (to: string) => {
    setMobileOpen(false);
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleMobileNav('/')}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <span className="text-3xl mr-2 text-cyan-600">✨</span>
            <span className="font-bold text-2xl tracking-tight text-slate-800">
              Clean<span className="text-cyan-700">Equals</span>Joy
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-slate-600 font-medium pb-1 transition-all duration-200 hover:text-cyan-700 ${
                    isActive
                      ? 'text-cyan-700 font-semibold border-b-2 border-cyan-700'
                      : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:0224045867"
              className="bg-cyan-700 hover:bg-cyan-800 text-white px-5 py-2 rounded-full font-semibold transition shadow-md flex items-center gap-2"
            >
              <span>✆</span> 022-404-5867
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-slate-600 hover:text-cyan-700 focus:outline-none text-3xl"
              aria-label="Toggle menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ label, to }) => (
              <button
                key={to}
                onClick={() => handleMobileNav(to)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:text-cyan-700"
              >
                {label}
              </button>
            ))}
            <a
              href="tel:0224045867"
              className="block w-full text-center mt-4 bg-cyan-700 text-white px-3 py-3 rounded-md font-bold"
              onClick={() => setMobileOpen(false)}
            >
              ✆ 022-404-5867
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
