"use client"

import { useEffect, useRef, useState } from "react"
import { doc, getDocFromServer } from "firebase/firestore"
import { getFirebaseDb, hasFirebaseConfig } from "@/lib/firebase"
import { Bell, RefreshCw, AlertCircle, CheckCircle2, AlertTriangle, Radio } from "lucide-react"

type Notice = {
  title: string
  message: string
}

type ViewState = {
  phase: "demo" | "loading" | "connected" | "error"
  notice: Notice
  status: string
  errorDetail?: string
}

const defaultNotice: Notice = {
  title: "Atención 24/7 en Carreteras de Ambato y Ecuador",
  message: "Estamos operativos día y noche. Si necesitas asistencia o remolque inmediato, contáctanos a cualquier hora.",
}

const hints: Record<string, string> = {
  "permission-denied": "Permiso denegado: Revisa las reglas de Firestore (deben permitir 'allow get: if true;' en avisos/principal).",
  "notice/missing": "Documento no encontrado: En la consola de Firebase > Firestore, crea la colección 'avisos' y dentro el documento con ID manual 'principal'.",
  "notice/fields": "Campos incompletos: En el documento 'principal', agrega los campos tipo string 'titulo' y 'mensaje' con texto.",
  unavailable: "Servicio no disponible: Comprueba tu conexión a Internet y que Firestore Database esté creado en modo de producción.",
}

export function NoticeBoard() {
  const [view, setView] = useState<ViewState>({
    phase: "loading",
    notice: defaultNotice,
    status: "Conectando con Firebase...",
  })
  const [refresh, setRefresh] = useState(0)
  const clickPending = useRef(false)

  useEffect(() => {
    let active = true

    async function fetchNotice() {
      if (!hasFirebaseConfig()) {
        if (active) {
          setView({
            phase: "demo",
            notice: defaultNotice,
            status: "Falta configuración de Firebase en lib/firebase-config.ts",
          })
          clickPending.current = false
        }
        return
      }

      if (active) {
        setView((prev) => ({
          ...prev,
          phase: "loading",
          status: "Consultando aviso en tiempo real...",
        }))
      }

      try {
        const db = getFirebaseDb()
        const docRef = doc(db, "avisos", "principal")
        const snap = await getDocFromServer(docRef)

        if (!snap.exists()) {
          const err = new Error("missing")
          ;(err as any).code = "notice/missing"
          throw err
        }

        const data = snap.data()
        const titulo = typeof data?.titulo === "string" ? data.titulo.trim() : ""
        const mensaje = typeof data?.mensaje === "string" ? data.mensaje.trim() : ""

        if (!titulo || !mensaje) {
          const err = new Error("fields")
          ;(err as any).code = "notice/fields"
          throw err
        }

        if (active) {
          setView({
            phase: "connected",
            notice: { title: titulo, message: mensaje },
            status: `Aviso oficial leído desde Firestore. Última sincronización: ${new Date().toLocaleTimeString("es-EC")}`,
          })
        }
      } catch (error: any) {
        const code = error?.code || ""
        const rawMsg = error?.message || "Error desconocido"
        const friendlyMsg = hints[code] || `Error al leer Firestore: ${code ? `[${code}] ` : ""}${rawMsg}`

        if (active) {
          setView({
            phase: "error",
            notice: {
              title: "No se pudo cargar el aviso oficial",
              message: "Verifica que el documento 'principal' exista en la colección 'avisos' de tu consola Firebase con los campos 'titulo' y 'mensaje'.",
            },
            status: friendlyMsg,
            errorDetail: code ? `Código: ${code}` : undefined,
          })
        }
      } finally {
        if (active) clickPending.current = false
      }
    }

    void fetchNotice()

    return () => {
      active = false
    }
  }, [refresh])

  const badgeConfig = {
    demo: {
      text: "Modo Demostración",
      bg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      dot: "bg-amber-400",
    },
    loading: {
      text: "Conectando a Firebase…",
      bg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      dot: "bg-blue-400 animate-pulse",
    },
    connected: {
      text: "Conectado a Firebase",
      bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      dot: "bg-emerald-400",
    },
    error: {
      text: "Conexión pendiente",
      bg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      dot: "bg-rose-400",
    },
  }[view.phase]

  return (
    <section id="aviso" className="relative border-y border-white/5 bg-[#181818] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Decorative subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e0a82e]/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#e0a82e]/10 text-[#e0a82e]">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#e0a82e]">Tablón de Avisos Oficiales</p>
            </div>
            <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              Información de <span className="text-[#e0a82e]">Última Hora</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${badgeConfig.bg}`}
            >
              <span className={`h-2 w-2 rounded-full ${badgeConfig.dot}`} />
              {badgeConfig.text}
            </span>

            <button
              type="button"
              disabled={view.phase === "loading"}
              onClick={() => {
                if (clickPending.current) return
                clickPending.current = true
                setRefresh((v) => v + 1)
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50 cursor-pointer"
              title="Volver a consultar aviso en Firebase"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${view.phase === "loading" ? "animate-spin text-[#e0a82e]" : ""}`} />
              Actualizar aviso
            </button>
          </div>
        </div>

        {/* Notice Card */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e0a82e] to-[#b8861b] text-black shadow-lg shadow-amber-950/40">
              <Bell className="h-6 w-6 text-black" />
            </div>

            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wider text-[#e0a82e]">
                Aviso: avisos / principal
              </p>
              <h3 id="notice-title" className="mt-1 text-xl font-bold text-white sm:text-2xl">
                {view.notice.title}
              </h3>
              <p id="notice-message" className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base whitespace-pre-line">
                {view.notice.message}
              </p>
            </div>
          </div>

          {/* Status footer inside card */}
          <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              {view.phase === "connected" && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
              {view.phase === "error" && <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0" />}
              {view.phase === "loading" && <RefreshCw className="h-4 w-4 text-blue-400 shrink-0 animate-spin" />}
              {view.phase === "demo" && <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />}
              <span id="status" role="status" aria-live="polite" className={view.phase === "error" ? "text-rose-300 font-medium" : ""}>
                {view.status}
              </span>
            </div>

            {view.errorDetail && (
              <span className="font-mono text-[11px] text-rose-400/80">
                {view.errorDetail}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
