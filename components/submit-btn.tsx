import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-bg px-7 font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
      disabled={pending}
    >
      {pending && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
      )}
      {pending ? "Sending" : "Send message"}
    </button>
  );
}
