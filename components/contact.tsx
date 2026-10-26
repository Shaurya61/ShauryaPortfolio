"use client";

import React, { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const fieldClass =
  "w-full rounded-xl border border-bg/20 bg-bg/[0.06] px-4 py-3 text-bg placeholder:text-bg/50 transition-colors focus:border-bg focus:outline-none";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" ref={ref} className="scroll-mt-20 pb-24 pt-8 sm:pb-32">
      <div className="grid gap-12 rounded-3xl bg-ink p-6 text-bg sm:p-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="display text-[2.75rem] font-extrabold leading-[0.95] sm:text-[4.25rem]">
            Let&apos;s build something.
          </h2>
          <p className="mt-6 max-w-[26rem] text-lg leading-relaxed text-bg/80">
            Email is the quickest way to reach me. Or leave a message here and
            I&apos;ll reply to the address you give.
          </p>
          <a
            className="mt-6 inline-block break-all text-xl font-semibold underline decoration-sayso decoration-2 underline-offset-4 sm:text-2xl"
            href="mailto:shauryanayyar.dev@gmail.com"
          >
            shauryanayyar.dev@gmail.com
          </a>
        </div>

        <form
          ref={formRef}
          className="flex flex-col gap-5"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            formRef.current?.reset();
            toast.success("Message sent.");
          }}
        >
          <label className="flex flex-col gap-2 text-sm font-medium">
            Your email
            <input
              className={fieldClass}
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="you@company.com"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium">
            Message
            <textarea
              className={`${fieldClass} h-40 resize-y`}
              name="message"
              required
              maxLength={5000}
            />
          </label>
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
}
