import { Store, Wrench, Package, LifeBuoy, HeartHandshake } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const FEATURES = [
{ icon: Store, title: 'Revenda Especializada', desc: 'Linha completa de drones agrícolas DJI Agras.' },
{ icon: Wrench, title: 'Assistência Técnica', desc: 'Equipe autorizada e capacitada para manutenção.' },
{ icon: Package, title: 'Peças Originais', desc: 'Componentes 100% originais com garantia.' },
{ icon: LifeBuoy, title: 'Suporte Pós-venda', desc: 'Acompanhamento contínuo após a compra.' },
{ icon: HeartHandshake, title: 'Atendimento Personalizado', desc: 'Soluções sob medida para sua propriedade.' }];


export function About() {
  return (
    <section data-ev-id="ev_15f0faa84c" id="sobre" className="bg-white py-24">
			<div data-ev-id="ev_d583ea345f" className="mx-auto max-w-7xl px-5">
				<Reveal className="mx-auto max-w-3xl text-center">
					<span data-ev-id="ev_9a619ab74f" className="text-sm font-bold uppercase tracking-widest text-brand-light">Quem Somos</span>
					<h2 data-ev-id="ev_9bcd314fc9" className="mt-3 font-display text-3xl font-extrabold text-brand-deep text-balance sm:text-4xl">
						Especialistas em agricultura de precisão
					</h2>
					<p data-ev-id="ev_b1218a42ec" className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
						A INOVA DRONE é especializada em soluções para agricultura de precisão. Trabalhamos com drones agrícolas DJI, oferecendo venda, assistência técnica especializada, peças originais, treinamento e suporte completo para nossos clientes.
					</p>
				</Reveal>

				<div data-ev-id="ev_44fb62453d" className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
					{FEATURES.map((f, i) =>
          <Reveal key={f.title} delay={i * 80}>
							<div data-ev-id="ev_db2d677aeb" className="group h-full rounded-2xl border border-border bg-muted/40 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-amber/50 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(15,46,28,0.25)]">
								<div data-ev-id="ev_42e41e4da7" className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-deep text-amber transition-colors group-hover:bg-amber group-hover:text-brand-deep">
									<f.icon className="h-7 w-7" />
								</div>
								<h3 data-ev-id="ev_e33816bbed" className="font-display text-base font-bold text-brand-deep">{f.title}</h3>
								<p data-ev-id="ev_7b3a3c16c6" className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
							</div>
						</Reveal>
          )}
				</div>
			</div>
		</section>);

}