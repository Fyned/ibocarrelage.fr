interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align]

  return (
    <div className={`mb-12 md:mb-16 max-w-2xl ${alignClass} ${className}`}>
      {label && (
        <span className="inline-block text-[#E31E24] text-xs font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#2B2A29]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-white/60' : 'text-[#838383]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
