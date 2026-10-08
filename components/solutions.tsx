import { PhoneCall } from "lucide-react"

export function Solutions() {
  return (
    <section id="soluciones" className="bg-[#1c1c1c] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">Garantía de Seguridad</p>
          <h2 className="mt-3 text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl">
            Soluciones Integrales de{" "}
            <span className="text-[#e0a82e]">Transporte y Rescate</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-neutral-400 sm:text-base">
            Ofrecemos un traslado seguro, rápido y confiable para todo tipo de automotores, operando de manera
            ininterrumpida los 365 días del año. Desde nuestra base en Ambato, conectamos rápidamente con las vías más
            importantes de la zona centro y todo el Ecuador.
          </p>
          <a
            href="tel:0993885978"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#f43f5e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 transition-all hover:-translate-y-0.5 hover:bg-[#e11d48]"
          >
            <PhoneCall className="h-4 w-4" />
            Solicitar Servicio
          </a>
        </div>

        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/rescue.png"
            alt="Grúa naranja levantando una camioneta roja accidentada con el volcán Chimborazo de fondo"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
