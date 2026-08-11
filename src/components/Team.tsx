import { MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { whatsappLink } from '@/lib/site-config';
import member1 from '@/assets/generated/team-1.png';
import member2 from '@/assets/generated/team-2.png';

// 👥 Para adicionar novos vendedores, basta incluir mais objetos nesta lista.
const TEAM = [
{ img: member1, name: 'Carlos Mendes', role: 'Consultor de Vendas', phone: '5591999999999' },
{ img: member2, name: 'Ana Beatriz', role: 'Especialista em Agricultura de Precisão', phone: '5591999999999' }];


export function Team() {
  return (
    <section data-ev-id="ev_e8dbff683b" id="equipe" className="bg-muted/50 py-24">
			<div data-ev-id="ev_cd8fbc9420" className="mx-auto max-w-7xl px-5">
				<Reveal className="mx-auto max-w-2xl text-center">
					<span data-ev-id="ev_ba6cfe8f3d" className="text-sm font-bold uppercase tracking-widest text-brand-light">Nossa Equipe</span>
					<h2 data-ev-id="ev_53da1d38f4" className="mt-3 font-display text-3xl font-extrabold text-brand-deep text-balance sm:text-4xl">
						Fale com um especialista
					</h2>
					<p data-ev-id="ev_0cbb969e20" className="mt-4 text-muted-foreground">Nossos consultores estão prontos para atender você.</p>
				</Reveal>

				<div data-ev-id="ev_b99b35947c" className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-7 sm:grid-cols-2">
					{TEAM.map((m, i) => {
            const link = whatsappLink(`Olá ${m.name}! Vim pelo site da INOVA DRONE e gostaria de atendimento.`, m.phone);
            return (
              <Reveal key={m.name} delay={i * 120}>
								<div data-ev-id="ev_1da8da4bed" className="group overflow-hidden rounded-3xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(15,46,28,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_-20px_rgba(15,46,28,0.35)]">
									<div data-ev-id="ev_45c429f627" className="relative overflow-hidden">
										<img data-ev-id="ev_93831ab883" src={m.img} alt={`${m.name} — ${m.role}`} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
										<div data-ev-id="ev_ba4ecea0a5" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-deep/70 to-transparent" />
									</div>
									<div data-ev-id="ev_77a44a98ea" className="p-6">
										<h3 data-ev-id="ev_1a41fd7350" className="font-display text-lg font-extrabold text-brand-deep">{m.name}</h3>
										<p data-ev-id="ev_de76271230" className="text-sm text-muted-foreground">{m.role}</p>
										<a data-ev-id="ev_209dd6f4a9"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-all hover:brightness-105">

											<MessageCircle className="h-4 w-4" /> WhatsApp
										</a>
									</div>
								</div>
							</Reveal>);

          })}
				</div>
			</div>
		</section>);

}