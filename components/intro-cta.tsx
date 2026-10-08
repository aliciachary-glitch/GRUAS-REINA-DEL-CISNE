import { Phone, MessageCircle, Smartphone } from "lucide-react"

export function IntroCta() {
  return (
    <section className="bg-[#1c1c1c] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Tu Auxilio en Carretera, <span className="text-[#e0a82e]">Cuando Más lo Necesitas</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-sm text-neutral-300 sm:text-base">
          Servicio de grúas y asistencia vehicular 24/7 en Ambato y todo el Ecuador.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="tel:0993885978"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f43f5e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/30 transition-all hover:-translate-y-0.5 hover:bg-[#e11d48] sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Llamar Ahora
          </a>
          <a
            href="https://wa.me/593993885978?text=Servicio%20de%20Gruas%2C%20como%20podemos%20ayudarte%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#22c55e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/30 transition-all hover:-translate-y-0.5 hover:bg-[#16a34a] sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar por WhatsApp
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-10">
          <a href="tel:0993885978" className="flex items-center gap-2 text-sm font-semibold text-[#e0a82e]">
            <Smartphone className="h-4 w-4" />
            0993 885 978
          </a>
        </div>
      </div>
    </section>
  )
}
