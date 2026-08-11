import { MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { whatsappLink } from '@/lib/site-config';
import t25 from "@/assets/uploads/drone-t25p.png";
import t55 from "@/assets/uploads/drone-t55.png"
import t70 from "@/assets/uploads/drone-t70p.png";
import t100 from "@/assets/uploads/drone-t100.png";
import t100dupla from '@/assets/uploads/drone-t100-bateria-dupla.png';

const DRONES = [
{
  img: t25,
  name: 'DJI Agras T25P',
  tag: 'Pequenas e médias áreas',
  desc: 'Ideal para pequenas e médias propriedades, oferecendo alta eficiência, economia e precisão.'
},
{
  img: t70,
  name: 'DJI Agras T70P',
  tag: 'Grandes áreas',
  desc: 'Alta produtividade para grandes áreas com excelente rendimento operacional.'
},
{
  img: t55,
  name: 'DJI Agras T55',
  tag: 'Versatilidade',
  desc: 'Equilíbrio perfeito entre capacidade e agilidade para diversas aplicações agrícolas.'
},
{
  img: t100,
  name: 'DJI Agras T100',
  tag: 'Alta performance',
  desc: 'Tecnologia de última geração para máxima produtividade e eficiência.'
},
{
  img: t100dupla,
  name: 'DJI Agras T100 Dupla Bateria',
  tag: 'Máxima autonomia',
  desc: 'Versão com dupla bateria para operações prolongadas e maior cobertura de área.'
}];


export function Drones() {
  return (
    <section data-ev-id="ev_acaa8dddb3" id="drones" className="bg-muted/50 py-24">
			<div data-ev-id="ev_cdb18fe2e3" className="mx-auto max-w-7xl px-5">
				<Reveal className="mx-auto max-w-2xl text-center">
					<span data-ev-id="ev_3ae51c0ba0" className="text-sm font-bold uppercase tracking-widest text-brand-light">Nossos Drones</span>
					<h2 data-ev-id="ev_5ae35e74ec" className="mt-3 font-display text-3xl font-extrabold text-brand-deep text-balance sm:text-4xl">
						A linha DJI Agras completa
					</h2>
					<p data-ev-id="ev_340e99d5e0" className="mt-4 text-muted-foreground">Escolha o drone ideal para o tamanho da sua operação.</p>
				</Reveal>

				<div data-ev-id="ev_26fcce5217" className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
					{DRONES.map((d, i) => {
            const link = whatsappLink(`Olá! Tenho interesse no drone ${d.name}. Poderia me enviar um orçamento?`);
            return (
              <Reveal key={d.name} delay={i * 120}>
								<div data-ev-id="ev_ae67aded40" className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(15,46,28,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_-20px_rgba(15,46,28,0.35)]">
									<div data-ev-id="ev_45a49e7c35" className="relative overflow-hidden bg-gradient-to-b from-muted to-white p-6">
										<span data-ev-id="ev_9658a029f9" className="absolute left-5 top-5 z-10 rounded-full bg-brand-deep px-3 py-1 text-[11px] font-semibold text-amber">{d.tag}</span>
										<img data-ev-id="ev_96202ff433" src={d.img} alt={d.name} className="mx-auto h-52 w-full object-contain transition-transform duration-500 group-hover:scale-110" />
									</div>
									<div data-ev-id="ev_726e97b752" className="flex flex-1 flex-col p-6">
										<h3 data-ev-id="ev_cc9ed86482" className="font-display text-xl font-extrabold text-brand-deep">{d.name}</h3>
										<p data-ev-id="ev_9695c4d5be" className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
										<a data-ev-id="ev_b75f400936"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-amber hover:text-brand-deep">

											<MessageCircle className="h-4 w-4" /> Solicitar orçamento
											<ArrowRight className="h-4 w-4" />
										</a>
									</div>
								</div>
							</Reveal>);

          })}
				</div>
			</div>
		</section>);

}