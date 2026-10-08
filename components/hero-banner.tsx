"use client"

import { useState, useRef, useEffect } from "react"
import { Phone, Globe, Clock, MessageCircle } from "lucide-react"

export function HeroBanner() {
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by battery saver or policy; poster is shown
      })
    }
  }, [])

  return (
    <section id="inicio" className="relative isolate min-h-[480px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px] w-full overflow-hidden flex items-center justify-end bg-black">
      {/* Background Video with Poster Fallback */}
      {!videoFailed ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-truck.png"
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 h-full w-full object-cover brightness-[0.75] contrast-[1.05]"
        >
          <source
            src="/Tow_Truck_Promotion_A_polished_tow_truck_is_showcased_against_a_dark_UeHBOVn0%20(1).mp4"
            type="video/mp4"
          />
          <source
            src="/Tow_Truck_Promotion_A_polished_tow_truck_is_showcased_against_a_dark_UeHBOVn0 (1).mp4"
            type="video/mp4"
          />
          {/* Alternative image fallback */}
          <img
            src="/images/hero-truck.png"
            alt="Grúa de plataforma Reina del Cisne en Ambato"
            className="h-full w-full object-cover"
          />
        </video>
      ) : (
        /* Fallback image when video cannot load */
        <img
          src="/images/hero-truck.png"
          alt="Grúa de plataforma Reina del Cisne en Ambato"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.75]"
        />
      )}

      {/* Dark gradient overlays for readability and high contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 md:bg-gradient-to-r md:from-black/30 md:via-black/60 md:to-black/90" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex w-full max-w-lg flex-col gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 text-right backdrop-blur-md shadow-2xl sm:p-8">
          <div>
            <p
              className="font-serif text-3xl font-bold leading-none text-[#e0a82e] italic drop-shadow-md sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Gruas Reina
              <br />
              del Cisne
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold uppercase leading-tight text-white drop-shadow-md sm:text-2xl lg:text-3xl">
              Ofrecemos Servicio
              <br />
              <span className="text-[#e0a82e]">de Grúa en Ambato</span>
            </h2>
            <div className="mt-2 flex items-center justify-end gap-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f43f5e] sm:text-sm">
                <Clock className="h-4 w-4" />
                Asistencia 24/7
              </span>
            </div>
          </div>

          <div className="border-t border-white/15 pt-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#e0a82e] sm:text-sm">
              Tu Auxilio en Carretera
            </p>
            <p className="mt-1 text-xs font-medium text-neutral-300">Atención Inmediata:</p>
            <p className="flex items-center justify-end gap-2 text-sm font-bold text-white sm:text-base">
              <Phone className="h-4 w-4 text-[#e0a82e]" />
              0993 885 978
            </p>
            <p className="mt-0.5 flex items-center justify-end gap-2 text-xs text-neutral-300 sm:text-sm">
              <Globe className="h-3.5 w-3.5 text-[#e0a82e]" />
              www.gruasreinadelcisne.com
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-2 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">
            <a
              href="https://wa.me/593993885978?text=Servicio%20de%20Gruas%2C%20como%20podemos%20ayudarte%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#22c55e] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-green-950/40 transition-all hover:-translate-y-0.5 hover:bg-[#16a34a] sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar por WhatsApp
            </a>
            <a
              href="tel:0993885978"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f43f5e] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-rose-950/40 transition-all hover:-translate-y-0.5 hover:bg-[#e11d48] sm:text-sm"
            >
              <Phone className="h-4 w-4" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
