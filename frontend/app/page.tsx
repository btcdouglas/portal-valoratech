export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* ── Blobs de fundo ──────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none select-none">
        {/* Blob 1 — índigo, canto superior esquerdo */}
        <div
          style={{
            position: "fixed",
            top: "-10%",
            left: "-5%",
            width: "55vw",
            height: "55vw",
            maxWidth: 700,
            maxHeight: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "float1 14s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        {/* Blob 2 — violeta, canto inferior direito */}
        <div
          style={{
            position: "fixed",
            bottom: "-15%",
            right: "-5%",
            width: "60vw",
            height: "60vw",
            maxWidth: 750,
            maxHeight: 750,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "float2 18s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        {/* Blob 3 — âmbar, centro-baixo */}
        <div
          style={{
            position: "fixed",
            bottom: "10%",
            left: "20%",
            width: "40vw",
            height: "40vw",
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float3 20s ease-in-out infinite",
            zIndex: 0,
          }}
        />
      </div>

      {/* ── Conteúdo central ─────────────────────────────────────── */}
      <main
        className="relative flex flex-col items-center text-center max-w-2xl w-full gap-8 py-24"
        style={{ zIndex: 1 }}
      >
        {/* Badge shimmer */}
        <div className="animate-enter">
          <span
            className="badge-shimmer inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border"
            style={{
              color: "#374151",
              borderColor: "#e5e7eb",
              letterSpacing: "0.12em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34d399",
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            Em Desenvolvimento
          </span>
        </div>

        {/* Wordmark com gradiente animado */}
        <div className="animate-enter-delay-1">
          <h1
            className="wordmark-gradient font-black leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 12vw, 7rem)",
              letterSpacing: "-0.035em",
            }}
          >
            ValoraTech
          </h1>
        </div>

        {/* Slogan + subtítulo */}
        <div className="animate-enter-delay-2 flex flex-col items-center gap-4">
          <p
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.15rem, 3vw, 1.5rem)",
              color: "#111827",
              letterSpacing: "-0.01em",
            }}
          >
            Tecnologia com Propósito e Resultado
          </p>

          <p
            className="max-w-md leading-relaxed"
            style={{
              fontSize: "1rem",
              color: "#6b7280",
            }}
          >
            Estamos construindo algo extraordinário. Em breve, nossa plataforma
            estará disponível para transformar o seu negócio.
          </p>
        </div>

        {/* Redes sociais — descomente quando tiver os links
        <div className="animate-enter-delay-3 flex items-center gap-6 mt-2">
          <a
            href="https://linkedin.com/company/valoratech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "#9ca3af", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#111827")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
        */}
      </main>

      {/* ── Rodapé ───────────────────────────────────────────────── */}
      <footer
        className="animate-enter-delay-3 absolute bottom-0 left-0 right-0 px-6 pb-8"
        style={{ zIndex: 1 }}
      >
        <div
          className="max-w-2xl mx-auto pt-5"
          style={{ borderTop: "1px solid #e5e7eb" }}
        >
          <p
            className="text-center text-sm"
            style={{ color: "#9ca3af" }}
          >
            © {year} ValoraTech · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
