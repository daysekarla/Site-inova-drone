import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site-config';

export function WhatsAppFloat() {
  const href = whatsappLink('Olá! Vim pelo site da INOVA DRONE e gostaria de mais informações sobre os drones agrícolas DJI.');
  return (
    <a data-ev-id="ev_e5b3ee945e"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:pr-5">

			<MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
			<span data-ev-id="ev_5fc84a059d" className="hidden text-sm font-semibold sm:inline">Fale conosco</span>
			<span data-ev-id="ev_109b13f9d8" className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
		</a>);

}