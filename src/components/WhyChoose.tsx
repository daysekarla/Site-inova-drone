import { Headset, BadgeCheck, Users, LifeBuoy, Cog, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const REASONS = [
{ icon: Headset, title: 'Atendimento Especializado' },
{ icon: BadgeCheck, title: 'Produtos Originais DJI' },
{ icon: Users, title: 'Equipe Técnica' },
{ icon: LifeBuoy, title: 'Suporte Completo' },
{ icon: Cog, title: 'Peças de Reposição' },
{ icon: ShieldCheck, title: 'Garantia' }];


export function WhyChoose() {
  return (
    <section data-ev-id="ev_06159df587" id="porque" className="relative overflow-hidden bg-brand-deep py-24">
			<div data-ev-id="ev_0f343e814c" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
			<div data-ev-id="ev_6e7ce68706" className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-light/20 blur-3xl" />
			<div data-ev-id="ev_44b406dc4c" className="relative mx-auto max-w-7xl px-5">
				<Reveal className="mx-auto max-w-2xl text-center">
					<span data-ev-id="ev_6e359f30b5" className="text-sm font-bold uppercase tracking-widest text-amber">Por que escolher</span>
					<h2 data-ev-id="ev_d374021ed4" className="mt-3 font-display text-3xl font-extrabold text-white text-balance sm:text-4xl">
						Por que escolher a Inova Drone
					</h2>
				</Reveal>
				<div data-ev-id="ev_4113e05feb" className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{REASONS.map((r, i) =>
          <Reveal key={r.title} delay={i * 70}>
							<div data-ev-id="ev_2afa7ce702" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-amber/40 hover:bg-white/10">
								<div data-ev-id="ev_d310b81699" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber text-brand-deep">
									<r.icon className="h-6 w-6" />
								</div>
								<span data-ev-id="ev_17bdb5412d" className="font-display text-base font-semibold text-white">{r.title}</span>
							</div>
						</Reveal>
          )}
				</div>
			</div>
		</section>);

}