import { MessageCircle, Phone, Mail } from 'lucide-react';
import { CONTACT, whatsappLink } from '@/lib/site-config';
import logo from '@/assets/uploads/logo-inova.png';


function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}


function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}


export function Footer() {
  const wpp = whatsappLink(
    'Olá! Vim pelo site da INOVA DRONE.'
  );


  return (
    <footer className="bg-brand-deep pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-5">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo e descrição */}
          <div>
            <a href="#hero" className="inline-flex items-center">
              <img
                src={logo}
                alt="Inova Drone Tecnologia Agropecuária"
                className="w-[190px] h-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Revenda especializada em drones agrícolas DJI, assistência técnica
              autorizada e peças originais para a agricultura de precisão.
            </p>
          </div>


          {/* Contato */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contato
            </h4>

            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                {CONTACT.phoneDisplay}
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-white" />
                {CONTACT.email}
              </li>

              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-white" />
                {CONTACT.address}
              </li>

            </ul>
          </div>


          {/* Redes Sociais */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Redes Sociais
            </h4>

            <div className="mt-4 flex gap-3">

              {/* Instagram */}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-[#2E7D32] hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>


              {/* Facebook */}
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-[#2E7D32] hover:text-white"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>


              {/* WhatsApp */}
              <a
                href={wpp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-[#2E7D32] hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

            </div>


            <p className="mt-5 text-xs text-white/50">
              CNPJ: {CONTACT.cnpj}
            </p>
          </div>

        </div>


        {/* Direitos autorais */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} INOVA DRONE TECNOLOGIA AGROPECUÁRIA LTDA.
          <br />
          Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}