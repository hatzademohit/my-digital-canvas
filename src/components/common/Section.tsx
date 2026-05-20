import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-12 px-6 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {(title || eyebrow) && (
          <div className="mb-14 text-center">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}