function SectionTitle({ title, subtitle, align = 'left' }) {
  return (
    <div className={`title-wrap ${align === 'left' ? 'align-left' : ''}`.trim()}>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}

export default SectionTitle
