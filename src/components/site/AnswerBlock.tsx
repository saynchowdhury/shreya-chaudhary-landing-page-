/**
 * Direct question-and-answer block. Keeps key facts easy to parse for both
 * readers and search/AI systems, without keyword stuffing.
 */
export function AnswerBlock({
  question,
  answer,
  tone = "light",
}: {
  question: string;
  answer: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={
        tone === "dark"
          ? "border-l border-peach/60 pl-6"
          : "border-l border-blush pl-6"
      }
    >
      <h2
        className={
          tone === "dark"
            ? "font-display text-2xl text-ivory md:text-[1.75rem]"
            : "font-display text-2xl text-charcoal md:text-[1.75rem]"
        }
      >
        {question}
      </h2>
      <p
        className={
          tone === "dark"
            ? "mt-4 max-w-3xl text-base leading-relaxed text-ivory/75"
            : "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground"
        }
      >
        {answer}
      </p>
    </div>
  );
}
