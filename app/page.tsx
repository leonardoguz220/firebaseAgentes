const features = [
  {
    title: "Responde por ti",
    text: "Tus agentes atienden consultas frecuentes a cualquier hora, con el tono y la información de tu negocio.",
    icon: (
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
    ),
  },
  {
    title: "Automatiza tareas",
    text: "Deja que se encarguen de lo repetitivo: ordenar datos, enviar recordatorios y preparar resúmenes.",
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  },
  {
    title: "Siempre conectado",
    text: "Funciona sobre la nube, sin instalar nada. Abre el enlace y tu equipo de agentes está listo.",
    icon: (
      <path d="M7 18a5 5 0 0 1-.6-9.97A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7Z" />
    ),
  },
];

const steps = [
  {
    n: "01",
    title: "Cuéntales qué necesitas",
    text: "Describe en lenguaje natural lo que quieres que hagan.",
  },
  {
    n: "02",
    title: "Elige a tu agente",
    text: "Selecciona uno de los perfiles disponibles o personaliza el tuyo.",
  },
  {
    n: "03",
    title: "Míralos trabajar",
    text: "Recibe resultados claros y ajusta lo que quieras en cualquier momento.",
  },
];

function Logo() {
  return (
    <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2 14.4 9.6 22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2Z" />
        </svg>
      </span>
      Agentes
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative flex-1 overflow-hidden bg-slate-950 text-slate-100">
      {/* Resplandores de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[40rem] -right-40 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
          <a href="#funciones" className="transition-colors hover:text-white">
            Funciones
          </a>
          <a href="#como-funciona" className="transition-colors hover:text-white">
            Cómo funciona
          </a>
          <a
            href="#empezar"
            className="rounded-full bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
          >
            Empezar
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pt-20 pb-28 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Agentes de IA listos para ayudarte
          </span>
          <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            Tu equipo de{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              agentes inteligentes
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Delega lo repetitivo y concéntrate en lo importante. Simple de usar,
            rápido de poner en marcha y pensado para personas, no para
            ingenieros.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#empezar"
              className="w-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Probar ahora
            </a>
            <a
              href="#como-funciona"
              className="w-full rounded-full border border-white/15 px-8 py-3.5 font-medium text-slate-200 transition-colors hover:bg-white/5 sm:w-auto"
            >
              Ver cómo funciona
            </a>
          </div>
        </section>

        {/* Funciones */}
        <section id="funciones" className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Todo lo que necesitas, nada de lo que no
            </h2>
            <p className="mt-4 text-slate-400">
              Tres ideas simples para ahorrarte tiempo cada día.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-white/[.04] p-8 backdrop-blur transition-colors hover:border-orange-400/40 hover:bg-white/[.07]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-500/15 text-orange-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section
          id="como-funciona"
          className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-28"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Así de fácil
            </h2>
          </div>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <span className="bg-gradient-to-b from-orange-300 to-orange-600/40 bg-clip-text text-6xl font-bold text-transparent">
                  {s.n}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Llamada a la acción */}
        <section id="empezar" className="mx-auto max-w-5xl scroll-mt-8 px-6 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-slate-900 to-violet-600/20 px-8 py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Empieza hoy, sin complicaciones
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Pon a trabajar a tu primer agente en minutos.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              Crear mi primer agente
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Agentes. Hecho con Next.js y Firebase.</p>
        </div>
      </footer>
    </div>
  );
}
