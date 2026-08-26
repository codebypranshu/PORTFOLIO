const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`px-6 py-20 md:px-8 md:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-10 md:mb-12">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="text-4xl font-bold sm:text-5xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;