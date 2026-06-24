import "./TextReveal.css";

type TextRevealProps = {
  text: string;
  highlightWords?: string[];
  className?: string;
};

export function TextReveal({
  text,
  highlightWords = [],
  className = "",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <span className={`text-reveal ${className}`} aria-label={text}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
        const isHighlighted = highlightWords.includes(cleanWord);

        return (
          <span
            className={`text-reveal-word ${isHighlighted ? "is-highlighted" : ""}`}
            style={{ animationDelay: `${index * 55}ms` }}
            key={`${word}-${index}`}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}