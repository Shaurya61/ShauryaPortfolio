import React from "react";

type DeltaProps = {
  before: string;
  after: string;
};

export function Delta({ before, after }: DeltaProps) {
  return (
    <>
      <s className="delta-old">{before}</s>
      <span className="sr-only"> to </span>{" "}
      <span className="delta-new">{after}</span>
    </>
  );
}

// Renders {old|new} as a Delta and **text** as bold; see lib/data.ts
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\{[^|}]+\|[^}]+\}|\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        const delta = part.match(/^\{([^|}]+)\|([^}]+)\}$/);
        if (delta) {
          return <Delta key={index} before={delta[1]} after={delta[2]} />;
        }
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-ink">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}
