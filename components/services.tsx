import { Truck, Anchor, ShieldCheck, Navigation } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: Truck,
    title: "Traslado de Vehículos Livianos",
    description:
      "Remolque seguro de automóviles, camionetas y motocicletas en plataforma o gancho con extremo cuidado.",
  },
  {
    icon: Anchor,
    title: "Transporte de Carga Pesada",
    description: "Movilización de camiones, buses, maquinaria agrícola e industrial a nivel provincial y nacional.",
  },
  {
    icon: ShieldCheck,
    title: "Asistencia en Carretera 24/7",
    description: "Extracción por siniestros, rescate en cunetas, paso de corriente y auxilio mecánico básico de inmediato.",
  },
  {
    icon: Navigation,
    title: "Cobertura Extendida",
    description: "Despacho inmediato desde nuestra base central en Ambato hacia cualquier carretera o ciudad de Ecuador.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-[#141414] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">Profesionales al Rescate</p>
        <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          Nuestros <span className="text-[#e0a82e]">Servicios</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group rounded-xl border border-rose-500/20 bg-[#1c1c1c] p-6 transition-all hover:-translate-y-1 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-900/20"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#f43f5e] text-white transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug text-[#e0a82e]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
