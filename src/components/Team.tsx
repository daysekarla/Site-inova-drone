import { MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { whatsappLink } from '@/lib/site-config';

import member1 from '@/assets/generated/team-1.png';
import member2 from '@/assets/generated/team-2.png';
import member3 from '@/assets/generated/team-3.png';
import member4 from '@/assets/generated/team-4.png';

// Para adicionar novos funcionários, basta incluir mais um objeto nesta lista.
const TEAM = [
  {
    img: member1,
    name: 'Dayse Karla',
    role: 'Administrativo e Financeiro',
    phone: '5594991540152',
  },
  {
    img: member2,
    name: 'Samuel Ferreira',
    role: 'Pós-venda',
    phone: '5594992931734',
  },
  {
    img: member3,
    name: 'Jefreson Menezes',
    role: 'Assistência Técnica',
    phone: '5594992407978',
  },
  {
    img: member4,
    name: 'Khaliny Vitoria',
    role: 'Marketing Digital',
    phone: '5594991223578',
  },
];

export function Team() {
  return (
    <section id="equipe" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* Título da seção */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-light">
            Nossa Equipe
          </span>

          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep text-balance sm:text-4xl">
            Especialistas ao seu lado
          </h2>

          <p className="mt-4 text-muted-foreground">
            Uma equipe preparada para oferecer atendimento comercial, suporte
            técnico e acompanhamento em todas as etapas.
          </p>
        </Reveal>

        {/* Equipe */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-7 sm:grid-cols-2">
          {TEAM.map((member, index) => {
            const link = whatsappLink(
              `Olá ${member.name}! Vim pelo site da INOVA DRONE e gostaria de atendimento.`,
              member.phone
            );

            return (
              <Reveal key={member.name} delay={index * 120}>
                <div className="group overflow-hidden rounded-3xl border border-border bg-white shadow-[0_10px_30px_-15px_rgba(15,46,28,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_-20px_rgba(15,46,28,0.35)]">

                  {/* Foto */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.img}
                      alt={`${member.name} — ${member.role}`}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-deep/70 to-transparent" />
                  </div>

                  {/* Informações */}
                  <div className="p-6">
                    <h3 className="font-display text-lg font-extrabold text-brand-deep">
                      {member.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>

                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-all hover:brightness-105"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}