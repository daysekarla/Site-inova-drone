import { MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import { whatsappLink } from '@/lib/site-config';
import heroImg from '@/assets/generated/hero-drone.png';

export function Hero() {
  const quote = whatsappLink('Olá! Gostaria de solicitar um orçamento de drone agrícola DJI.');
  return (
    <section data-ev-id="ev_f867c40dcf" id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-brand-deep">
			<img data-ev-id="ev_617033e3ab" src={heroImg} alt="Drone agrícola DJI pulverizando uma lavoura verde ao entardecer" className="absolute inset-0 h-full w-full object-cover" />
			<div data-ev-id="ev_a3bf7d67bf" className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/30" />
			<div data-ev-id="ev_60fa26ee3b" className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent" />

			<div data-ev-id="ev_03a74272a6" className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20">
				<div data-ev-id="ev_ffa69cbe84" className="max-w-2xl">
					<span data-ev-id="ev_0689cc7d56" className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-soft">
						<Sparkles className="h-3.5 w-3.5" /> Revenda autorizada DJI Agras
					</span>
					<h1 data-ev-id="ev_3740754d4f" className="font-display text-4xl font-extrabold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
						Tecnologia <span data-ev-id="ev_5d88a738a8" className="text-amber">DJI</span> para transformar a produtividade no campo
					</h1>
					<p data-ev-id="ev_bc36009f94" className="mt-6 max-w-xl text-base leading-relaxed text-white/80 text-pretty sm:text-lg">
						Revenda especializada em drones agrícolas DJI, assistência técnica autorizada, peças originais e suporte completo para produtores rurais.
					</p>
					<div data-ev-id="ev_5f5d4cdca8" className="mt-9 flex flex-col gap-4 sm:flex-row">
						<a data-ev-id="ev_af038ed0f5"
            href={quote}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-bold text-brand-deep shadow-[0_15px_40px_-10px_rgba(245,165,22,0.7)] transition-all hover:scale-[1.03] hover:bg-amber-soft">

							<MessageCircle className="h-5 w-5" /> Solicitar Orçamento
						</a>
						<a data-ev-id="ev_300110c5f8"
            href="#drones"
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">

							Conheça nossos drones
						</a>
					</div>

					<div data-ev-id="ev_2cdf63b69c" className="mt-12 flex flex-wrap gap-8">
						{[
            { n: '100%', l: 'Peças originais DJI' },
            { n: '+500', l: 'Hectares pulverizados' },
            { n: '24/7', l: 'Suporte ao produtor' }].
            map((s) =>
            <div data-ev-id="ev_372c9d9290" key={s.l}>
								<div data-ev-id="ev_3faf689959" className="font-display text-2xl font-extrabold text-amber">{s.n}</div>
								<div data-ev-id="ev_c6f4ee1c75" className="text-xs text-white/70">{s.l}</div>
							</div>
            )}
					</div>
				</div>
			</div>

			<a data-ev-id="ev_7c4618711d" href="#sobre" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-amber" aria-label="Rolar">
				<ChevronDown className="h-7 w-7 animate-bounce" />
			</a>
		</section>);

}