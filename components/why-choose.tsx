const reasons = [
  {
    number: "01",
    title: "Disponibilidad Total",
    description: "Atención inmediata a cualquier hora del día o de la noche (24/7) los 365 días del año.",
  },
  {
    number: "02",
    title: "Ubicación Estratégica",
    description: "Base operativa en Ambato para una rápida respuesta en la zona central y vías interprovinciales.",
  },
  {
    number: "03",
    title: "Seguridad Certificada",
    description: "Equipamiento técnico adecuado para evitar daños en la carrocería o chasis durante el traslado.",
  },
  {
    number: "04",
    title: "Cobertura Nacional",
    description: "Despacho rápido y asistencia total tanto a nivel provincial como nacional.",
  },
]

export function WhyChoose() {
  return (
    <section id="valores" className="bg-[#141414] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">Nuestros Valores</p>
        <h2 className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          Por Qué <span className="text-[#e0a82e]">Elegirnos</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.number} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f43f5e] text-sm font-bold text-white">
                {reason.number}
              </span>
              <div>
                <h3 className="text-base font-bold text-white">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
