export function Background() {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="grid-layer" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <svg className="circuit-lines" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path d="M0 190h240l36 36h170l34-34h250" />
        <path d="M1440 560h-230l-42-42H980l-50 50H690" />
        <path d="M110 800V690l34-34V510" />
        <circle cx="480" cy="192" r="3" /><circle cx="930" cy="568" r="3" />
      </svg>
    </div>
  )
}
