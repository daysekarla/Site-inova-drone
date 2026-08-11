import { MapPin } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CONTACT } from '@/lib/site-config';

export function Location() {
  const query = encodeURIComponent(CONTACT.address);
  return (
    <section data-ev-id="ev_0923c672cf" id="localizacao" className="bg-white py-24">
			<div data-ev-id="ev_4d75eb9420" className="mx-auto max-w-7xl px-5">
				<Reveal className="mx-auto max-w-2xl text-center">
					<span data-ev-id="ev_dc110bfdb5" className="text-sm font-bold uppercase tracking-widest text-brand-light">Localização</span>
					<h2 data-ev-id="ev_cfa4c8cb2a" className="mt-3 font-display text-3xl font-extrabold text-brand-deep text-balance sm:text-4xl">
						Estamos prontos para atender você
					</h2>
					<p data-ev-id="ev_8776864985" className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
						<MapPin className="h-5 w-5 text-amber" /> {CONTACT.address}
					</p>
				</Reveal>
				<Reveal delay={120} className="mt-10 overflow-hidden rounded-3xl border border-border shadow-[0_20px_50px_-25px_rgba(15,46,28,0.4)]">
					<iframe data-ev-id="ev_da29ea17f5"
          title="Mapa INOVA DRONE"
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen />

				</Reveal>
			</div>
		</section>);

}