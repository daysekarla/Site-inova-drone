import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site-config';
import logo from '@/assets/uploads/logo-inova.png';

const LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Drones', href: '#drones' },
  { label: 'Diferenciais', href: '#porque' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Localização', href: '#localizacao' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const quote = whatsappLink(
    'Olá! Gostaria de solicitar um orçamento de drone agrícola DJI.'
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#083B5C]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src={logo}
            alt="Inova Drone"
            className="h-20 w-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-[#2E7D32]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botão */}
        <a
          href={quote}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#2E7D32] md:flex"
        >
          <MessageCircle className="h-4 w-4" />
          Solicitar orçamento
        </a>

        {/* Botão Menu Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="border-t border-white/10 bg-[#083B5C] px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:text-[#2E7D32]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2E7D32]"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}