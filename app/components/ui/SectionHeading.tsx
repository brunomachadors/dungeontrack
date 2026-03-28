type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignment} ${className}`.trim()}>
      <p className="font-display section-title text-sm font-semibold text-red-800">
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-3xl font-bold text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-xl leading-relaxed text-stone-700">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
