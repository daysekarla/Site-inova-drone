import { Reveal } from '@/components/Reveal';

import entrega1 from '@/assets/uploads/entregas/entrega-1.jpg';
import entrega2 from '@/assets/uploads/entregas/entrega-2.jpg';
import entrega3 from '@/assets/uploads/entregas/entrega-3.jpg';

const DELIVERIES = [
  {
    img: entrega1,
    title: 'Marinho',
    description: 'Entrega tecnica e treinamento realizado com nosso cliente Marinho, que agora conta com tecnologia de ponta na sua lavoura.',
  },
  {
    img: entrega2,
    title: 'Clezio',
    description: 'Tecnologia DJI Agriculture chegando aos nossos clientes.',
  },
  {
    img: entrega3,
    title: 'Fabio',
    description: 'Mais um cliente contando com a tecnologia e suporte da Inova Drone.',
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
            Tecnologia que sai da nossa loja e chega ao campo para transformar
            a produtividade dos nossos clientes.
          </p>
        </Reveal>

        {/* Galeria de entregas */}
        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {DELIVERIES.map((delivery, index) => (
            <Reveal key={delivery.title + index} delay={index * 120}>
              <div className="group h-full overflow-hidden rounded-3xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(10,93,143,0.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_-20px_rgba(10,93,143,0.4)]">

                {/* Foto */}
                <div className="overflow-hidden">
                  <img
                    src={delivery.img}
                    alt={delivery.title}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Informações */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-extrabold text-brand-deep">
                    {delivery.title}
                  </h3>

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