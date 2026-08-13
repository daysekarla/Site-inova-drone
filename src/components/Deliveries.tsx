import { Reveal } from '@/components/Reveal';

import entrega1 from '@/assets/uploads/entregas/entrega-1.jpg';
import entrega2 from '@/assets/uploads/entregas/entrega-2.jpg';
import entrega3 from '@/assets/uploads/entregas/entrega-3.jpg';
import entrega4 from '@/assets/uploads/entregas/entrega-4.png';
import entrega5 from '@/assets/uploads/entregas/entrega-5.png';
import entrega6 from '@/assets/uploads/entregas/entrega-6.png';

const DELIVERIES = [
  {
    img: entrega1,
    client: 'Potiguar',
    drone: 'DJI Agras T70P',
    description:
      'Entrega técnica e treinamento para uma operação com maior capacidade, eficiência e tecnologia no campo.',
  },
  {
    img: entrega2,
    client: 'Clezio',
    drone: 'DJI Agras T25',
    description:
      'Uma solução compacta e versátil para trazer mais agilidade e precisão às operações agrícolas.',
  },
  {
    img: entrega3,
    client: 'Fabio',
    drone: 'DJI Agras T25P',
    description:
      'Tecnologia DJI Agriculture para uma rotina de trabalho mais eficiente, prática e precisa no campo.',
  },
  {
    img: entrega4,
    client: 'Sul Para Drones',
    drone: 'DJI Agras T25',
    description:
      'Mais tecnologia DJI Agriculture chegando ao campo, com suporte e acompanhamento da INOVA DRONE.',
  },
  {
    img: entrega5,
    client: 'Marcilei',
    drone: 'DJI Agras T25P',
    description:
      'Tecnologia, precisão e rendimento operacional para tornar as atividades agrícolas mais eficientes.',
  },
  {
    img: entrega6,
    client: 'Pauleci',
    drone: 'DJI Agras T25',
    description:
      'Uma solução desenvolvida para unir precisão, eficiência e tecnologia nas operações do dia a dia.',
  },
];

export function Deliveries() {
  return (
    <section id="entregas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* Título da seção */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#2B84B8]">
            Nossos Clientes
          </span>

          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep sm:text-4xl">
            Entregas realizadas
          </h2>

          <p className="mt-4 text-muted-foreground">
            Tecnologia DJI Agriculture chegando ao campo para trazer mais
            eficiência, precisão e produtividade às operações dos nossos clientes.
          </p>
        </Reveal>

        {/* Galeria de entregas */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {DELIVERIES.map((delivery, index) => (
            <Reveal
              key={delivery.client + index}
              delay={index * 120}
            >
              <div className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(10,93,143,0.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_-20px_rgba(10,93,143,0.4)]">

                {/* Foto */}
                <div className="overflow-hidden">
                  <img
                    src={delivery.img}
                    alt={`Entrega de ${delivery.drone} para ${delivery.client}`}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Informações */}
                <div className="p-6">

                  {/* Modelo do drone */}
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2B84B8]">
                    {delivery.drone}
                  </span>

                  {/* Cliente */}
                  <h3 className="mt-2 font-display text-lg font-extrabold text-brand-deep">
                    {delivery.client}
                  </h3>

                  {/* Descrição */}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {delivery.description}
                  </p>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}