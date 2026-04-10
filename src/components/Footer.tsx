export function Footer() {
  return (
    <footer className="bg-background px-4 py-10 md:px-6">
      <div className="mx-auto max-w-6xl border-t border-border-subtle pt-8">
        <pre
          className="mb-4 text-[9px] leading-tight text-[#2a2a2a]"
          aria-hidden
        >
          {`· — · — · — · — · — · — ·`}
        </pre>
        <p className="text-[10px] uppercase tracking-[0.15em] text-muted">
          © {new Date().getFullYear()} Tom Courcy — made with React & trop de café
        </p>
      </div>
    </footer>
  )
}
