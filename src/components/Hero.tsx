import { MessageCircle, ChevronDown } from 'lucide-react';
import { whatsappLink } from '@/lib/site-config';
import heroImg from '@/assets/generated/hero-drone.jpg';

export function Hero() {
  const quote = whatsappLink(
    'Olá! Gostaria de solicitar um orçamento de drone agrícola DJI.'
  );

  const stats = [
    { n: '100%', l: 'Peças originais DJI' },
    { n: '+50', l: 'Drones vendidos' },
    { n: '24/7', l: 'Suporte ao produtor' },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-deep"
    >
      {/* Imagem de fundo */}
      <img
        src={heroImg}
        alt="Drone agrícola DJI pulverizando uma lavoura verde ao entardecer"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-[70%_center]
          sm:object-center
        "
      />

      {/* Camadas sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-transparent to-transparent" />

      {/* Conteúdo */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28">
        <div className="max-w-2xl">

          {/* Selo */}
          <span className="mb-5 inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            Revenda autorizada DJI Agriculture
          </span>

          {/* Título */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
            Tecnologia{' '}
            <span className="text-amber">
              DJI
            </span>{' '}
            para transformar a produtividade no campo
          </h1>

          {/* Descrição */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 text-pretty sm:text-lg">
            Revenda especializada em drones agrícolas DJI, assistência técnica
            autorizada, peças originais e suporte completo para prestadores de serviços e produtores
            rurais.
          </p>

          {/* Botões */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center justify-center gap-2
                rounded-full
                bg-[#0A66C2]
                px-8 py-4
                text-base font-bold text-white
                shadow-[0_15px_40px_-10px_rgba(10,102,194,0.5)]
                transition-all duration-300
                hover:scale-[1.03]
                hover:bg-[#2E7D32]
                active:scale-[0.98]
                active:bg-[#2E7D32]
              "
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Orçamento
            </a>

            <a
              href="#drones"
              className="
                flex items-center justify-center gap-2
                rounded-full
                border border-white/25
                bg-white/5
                px-8 py-4
                text-base font-semibold text-white
                backdrop-blur-sm
                transition-all
                hover:bg-white/10
              "
            >
              Conheça nossos drones
            </a>
          </div>

          {/* Indicadores */}
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.l}>
                <div className="font-display text-2xl font-extrabold text-amber">
                  {stat.n}
                </div>

                <div className="text-xs text-white/70">
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seta para próxima seção */}
      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition-colors hover:text-amber"
        aria-label="Rolar"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}