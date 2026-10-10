export function SectionHeading({ eyebrow, title, description, center = false, className = '' }) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-sky-500 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-light leading-relaxed text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
