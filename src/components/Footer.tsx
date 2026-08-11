import { Instagram, Facebook, MessageCircle, Phone, Mail } from 'lucide-react';
import { CONTACT, whatsappLink } from '@/lib/site-config';

export function Footer() {
  const wpp = whatsappLink('Olá! Vim pelo site da INOVA DRONE.');
  return (
    <footer data-ev-id="ev_78e83126a1" className="bg-brand-deep pt-16 pb-8 text-white">
			<div data-ev-id="ev_c10fd4036c" className="mx-auto max-w-7xl px-5">
				<div data-ev-id="ev_8ce8ac6dd7" className="grid grid-cols-1 gap-10 md:grid-cols-3">
					<div data-ev-id="ev_1b741a867c">
						<div data-ev-id="ev_65634f1b36" className="flex items-center gap-2">
							<span data-ev-id="ev_409a90846a" className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber text-base font-extrabold text-brand-deep">ID</span>
							<span data-ev-id="ev_02e2652d8a" className="font-display text-xl font-extrabold">INOVA <span data-ev-id="ev_591a84e9c0" className="text-amber">DRONE</span></span>
						</div>
						<p data-ev-id="ev_dc6b5af763" className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
							Revenda especializada em drones agrícolas DJI, assistência técnica autorizada e peças originais para a agricultura de precisão.
						</p>
					</div>

					<div data-ev-id="ev_772d99585b">
						<h4 data-ev-id="ev_2b9cffa3e3" className="font-display text-sm font-bold uppercase tracking-wider text-amber">Contato</h4>
						<ul data-ev-id="ev_95b606fa3c" className="mt-4 flex flex-col gap-3 text-sm text-white/80">
							<li data-ev-id="ev_90e58d292b" className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber" /> {CONTACT.phoneDisplay}</li>
							<li data-ev-id="ev_727fc48e68" className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber" /> {CONTACT.email}</li>
							<li data-ev-id="ev_7f91a739c9" className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-amber" /> {CONTACT.address}</li>
						</ul>
					</div>

					<div data-ev-id="ev_69a1f1aee2">
						<h4 data-ev-id="ev_3764fd7e5c" className="font-display text-sm font-bold uppercase tracking-wider text-amber">Redes sociais</h4>
						<div data-ev-id="ev_c92f216e93" className="mt-4 flex gap-3">
							<a data-ev-id="ev_9000cf71ec" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber hover:text-brand-deep">
								<Instagram className="h-5 w-5" />
							</a>
							<a data-ev-id="ev_d9d03c0521" href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber hover:text-brand-deep">
								<Facebook className="h-5 w-5" />
							</a>
							<a data-ev-id="ev_029ac1ac8a" href={wpp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber hover:text-brand-deep">
								<MessageCircle className="h-5 w-5" />
							</a>
						</div>
						<p data-ev-id="ev_2153d5e2b2" className="mt-5 text-xs text-white/50">CNPJ: {CONTACT.cnpj}</p>
					</div>
				</div>

				<div data-ev-id="ev_ee40825780" className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
					Direitos reservados © {new Date().getFullYear()} INOVA DRONE.
				</div>
			</div>
		</footer>);

}