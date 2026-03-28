import type { ReactNode } from 'react';

type NoticeCardProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

function NoticeCard({
  eyebrow,
  title,
  children,
  className = '',
  contentClassName = '',
}: NoticeCardProps) {
  return (
    <article
      className={`wanted-card rounded-3xl px-6 py-6 ${className}`.trim()}
    >
      {eyebrow ? (
        <p className="font-display text-sm uppercase tracking-[0.18em] text-red-800">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h3 className="font-display mt-3 text-2xl font-semibold text-stone-900">
          {title}
        </h3>
      ) : null}
      <div
        className={`text-lg leading-relaxed text-stone-700 ${title ? 'mt-3' : 'mt-2'} ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </article>
  );
}

export default NoticeCard;
