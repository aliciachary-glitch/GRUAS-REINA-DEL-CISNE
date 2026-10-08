"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Avisos", href: "#aviso" },
  { label: "Fotos", href: "#servicios" },
  { label: "Dirección", href: "#soluciones" },
  { label: "Redes", href: "#valores" },
  { label: "Contactos", href: "#contactos" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#141414]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Grúas Reina del Cisne - Inicio">
          <img
            src="/images/logo.png"
            alt="Logo Grúas Reina del Cisne"
            className="h-12 w-auto rounded-sm bg-white/90 p-1"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-200 transition-colors hover:text-[#e0a82e]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0993885978"
          className="hidden items-center gap-2 text-sm font-semibold text-[#f43f5e] transition-colors hover:text-[#fb7185] md:flex"
        >
          <Phone className="h-4 w-4" />
          Llamar: 0993 885 978
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-neutral-200 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-white/5 px-4 py-3 md:hidden"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/5 hover:text-[#e0a82e]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0993885978"
            className="mt-1 flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold text-[#f43f5e]"
          >
            <Phone className="h-4 w-4" />
            Llamar: 0993 885 978
          </a>
        </nav>
      )}
    </header>
  )
}
