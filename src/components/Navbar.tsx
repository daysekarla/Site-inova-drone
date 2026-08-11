import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site-config';

const LINKS = [
{ label: 'Início', href: '#hero' },
{ label: 'Quem Somos', href: '#sobre' },
{ label: 'Drones', href: '#drones' },
{ label: 'Diferenciais', href: '#porque' },
{ label: 'Equipe', href: '#equipe' },
{ label: 'Localização', href: '#localizacao' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const quote = whatsappLink('Olá! Gostaria de solicitar um orçamento de drone agrícola DJI.');

  return (
    <header data-ev-id="ev_11d364867e"
    className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
    scrolled ? 'bg-[#0a2114]/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`
    }>

			<div data-ev-id="ev_ad078b3f38" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
				<a data-ev-id="ev_9fa4617401" href="#hero" className="flex items-center gap-2">
					<span data-ev-id="ev_d54bc6aeb9" className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber text-[15px] font-extrabold text-brand-deep">ID</span>
					<span data-ev-id="ev_9404221543" className="font-display text-lg font-extrabold tracking-tight text-white">
						INOVA <span data-ev-id="ev_95dcc2193c" className="text-amber">DRONE</span>
					</span>
				</a>

				<nav data-ev-id="ev_0ee8caf1ef" className="hidden items-center gap-7 lg:flex">
					{LINKS.map((l) =>
          <a data-ev-id="ev_de24e1827c" key={l.href} href={l.href} className="text-sm font-medium text-white/80 transition-colors hover:text-amber">
							{l.label}
						</a>
          )}
				</nav>

				<a data-ev-id="ev_06a1f7cc0b"
        href={quote}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-brand-deep transition-transform hover:scale-105 md:flex">

					<MessageCircle className="h-4 w-4" />
					Orçamento
				</a>

				<button data-ev-id="ev_7d4938bbec" className="text-white lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
					{open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
				</button>
			</div>

			{open &&
      <div data-ev-id="ev_be8f17b3ba" className="border-t border-white/10 bg-[#0a2114] px-5 py-4 lg:hidden">
					<div data-ev-id="ev_d58b4925dc" className="flex flex-col gap-1">
						{LINKS.map((l) =>
          <a data-ev-id="ev_3694b39836"
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5">

								{l.label}
							</a>
          )}
						<a data-ev-id="ev_0b630d4740"
          href={quote}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-brand-deep">

							<MessageCircle className="h-4 w-4" /> Solicitar Orçamento
						</a>
					</div>
				</div>
      }
		</header>);

}