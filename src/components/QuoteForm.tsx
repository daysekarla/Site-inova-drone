import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { whatsappLink } from '@/lib/site-config';

const DRONES = ['DJI Agras T25P', 'DJI Agras T55', 'DJI Agras T70P', 'DJI Agras T100', 'DJI Agras T100 Dupla Bateria', 'Não sei / Preciso de ajuda'];

export function QuoteForm() {
  const [form, setForm] = useState({ nome: '', telefone: '', cidade: '', drone: DRONES[0], mensagem: '' });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
    `*Novo orçamento — INOVA DRONE*\n\n` +
    `*Nome:* ${form.nome}\n` +
    `*Telefone:* ${form.telefone}\n` +
    `*Cidade:* ${form.cidade}\n` +
    `*Drone de interesse:* ${form.drone}\n` +
    `*Mensagem:* ${form.mensagem || '—'}`;
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer');
  };

  const inputCls =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-brand-deep outline-none transition-all placeholder:text-muted-foreground focus:border-amber focus:ring-2 focus:ring-amber/30';

  return (
    <section data-ev-id="ev_cf2f78bb47" id="orcamento" className="bg-white py-24">
			<div data-ev-id="ev_91a89cc450" className="mx-auto max-w-6xl px-5">
				<div data-ev-id="ev_d16eed6b36" className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
					<Reveal>
						<span data-ev-id="ev_3952e46459" className="text-sm font-bold uppercase tracking-widest text-brand-light">Solicite um orçamento</span>
						<h2 data-ev-id="ev_cfc4dd14fc" className="mt-3 font-display text-3xl font-extrabold text-brand-deep text-balance sm:text-4xl">
							Vamos falar sobre a sua lavoura
						</h2>
						<p data-ev-id="ev_a6ba364c1a" className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
							Preencha o formulário e envie diretamente para o nosso WhatsApp. Nossa equipe responde rapidamente com o melhor orçamento para a sua necessidade.
						</p>
						<div data-ev-id="ev_e26e898793" className="mt-8 flex items-center gap-3 rounded-2xl border border-amber/30 bg-amber/10 p-5">
							<MessageCircle className="h-8 w-8 shrink-0 text-brand-light" />
							<p data-ev-id="ev_e8c03aee99" className="text-sm text-brand-deep">
								Ao enviar, uma conversa no WhatsApp será aberta automaticamente com os seus dados preenchidos.
							</p>
						</div>
					</Reveal>

					<Reveal delay={120}>
						<form data-ev-id="ev_db05abef14" onSubmit={handleSubmit} className="rounded-3xl border border-border bg-muted/30 p-6 shadow-[0_20px_50px_-25px_rgba(15,46,28,0.4)] sm:p-8">
							<div data-ev-id="ev_7824741bf8" className="flex flex-col gap-4">
								<div data-ev-id="ev_788222d86c">
									<label data-ev-id="ev_50a0afd00e" className="mb-1.5 block text-sm font-semibold text-brand-deep">Nome</label>
									<input data-ev-id="ev_fa15225417" required value={form.nome} onChange={update('nome')} placeholder="Seu nome completo" className={inputCls} />
								</div>
								<div data-ev-id="ev_56f49985cf" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div data-ev-id="ev_a4294030c8">
										<label data-ev-id="ev_12215264a2" className="mb-1.5 block text-sm font-semibold text-brand-deep">Telefone</label>
										<input data-ev-id="ev_91ea29b81b" required value={form.telefone} onChange={update('telefone')} placeholder="(00) 00000-0000" className={inputCls} />
									</div>
									<div data-ev-id="ev_2f8a08c0e4">
										<label data-ev-id="ev_ab23bc9e23" className="mb-1.5 block text-sm font-semibold text-brand-deep">Cidade</label>
										<input data-ev-id="ev_edbde61fca" required value={form.cidade} onChange={update('cidade')} placeholder="Sua cidade" className={inputCls} />
									</div>
								</div>
								<div data-ev-id="ev_8d1ae221b0">
									<label data-ev-id="ev_9481b32afc" className="mb-1.5 block text-sm font-semibold text-brand-deep">Drone de interesse</label>
									<select data-ev-id="ev_727c3b7a58" value={form.drone} onChange={update('drone')} className={inputCls}>
										{DRONES.map((d) =>
                    <option data-ev-id="ev_6c8e921c14" key={d} value={d}>{d}</option>
                    )}
									</select>
								</div>
								<div data-ev-id="ev_d25b7ce8f7">
									<label data-ev-id="ev_7d66e5721a" className="mb-1.5 block text-sm font-semibold text-brand-deep">Mensagem</label>
									<textarea data-ev-id="ev_072c8560ca" value={form.mensagem} onChange={update('mensagem')} rows={3} placeholder="Conte um pouco sobre a sua necessidade" className={inputCls} />
								</div>
								<button data-ev-id="ev_c289338945"
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white transition-all hover:scale-[1.02] hover:brightness-105">

									<Send className="h-5 w-5" /> Enviar pelo WhatsApp
								</button>
							</div>
						</form>
					</Reveal>
				</div>
			</div>
		</section>);

}