import { PhoneCall } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contactos" className="border-t-2 border-[#e0a82e] bg-[#1c1c1c]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <img
            src="/images/logo.png"
            alt="Logo Grúas Reina del Cisne"
            className="h-16 w-auto rounded-sm bg-white/90 p-1"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            Base Operativa: Ambato, Provincia de Tungurahua, Ecuador. Ofrecemos asistencia en carretera continua para
            todo el país.
          </p>
        </div>

        <div>
          <h3 className="text-base font-bold text-white">Contactos</h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>
              <a href="tel:0993885978" className="transition-colors hover:text-white">
                Llamadas: 0993 885 978
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/593993885978?text=Servicio%20de%20Gruas%2C%20como%20podemos%20ayudarte%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#22c55e]"
              >
                WhatsApp: 0993 885 978
              </a>
            </li>
            <li>Ambato - Ecuador</li>
          </ul>
        </div>

        <div className="md:text-right">
          <h3 className="text-base font-bold text-[#e0a82e] md:text-right">Asistencia Inmediata</h3>
          <a
            href="tel:0993885978"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#f43f5e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 transition-all hover:-translate-y-0.5 hover:bg-[#e11d48]"
          >
            <PhoneCall className="h-4 w-4" />
            Llámanos Ahora
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Grúas Reina del Cisne. Todos los derechos reservados.</p>
          <p>www.gruasreinadelcisne.com</p>
        </div>
      </div>
    </footer>
  )
}
