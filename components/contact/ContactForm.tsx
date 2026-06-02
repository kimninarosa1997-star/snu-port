"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { localized, siteContent, uiStrings } from "@/lib/content";

const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();

const inputClassName =
  "w-full min-h-11 border border-border bg-background px-4 py-2.5 text-body text-foreground placeholder:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30";

export function ContactForm() {
  const { locale } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!formspreeFormId) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const body = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-label={localized(locale, uiStrings.contact.form.ariaLabel)}
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className="sr-only">
          {localized(locale, uiStrings.contact.form.name)}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={isSending}
          placeholder={localized(locale, uiStrings.contact.form.name)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          {localized(locale, uiStrings.contact.form.email)}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={isSending}
          placeholder={localized(locale, uiStrings.contact.form.email)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          {localized(locale, uiStrings.contact.form.message)}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          disabled={isSending}
          placeholder={localized(locale, uiStrings.contact.form.message)}
          className={`${inputClassName} min-h-[8rem] resize-y`}
        />
      </div>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex min-h-11 w-full items-center justify-center bg-neutral-950 px-7 py-3 text-label uppercase tracking-[var(--tracking-label)] text-neutral-050 transition-colors hover:bg-neutral-800 focus-visible:focus-ring disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSending
          ? localized(locale, uiStrings.contact.form.sending)
          : localized(locale, uiStrings.contact.form.submit)}
      </button>

      {status === "success" ? (
        <p role="status" className="text-body text-success">
          {localized(locale, uiStrings.contact.form.success)}
        </p>
      ) : null}

      {status === "error" ? (
        <p role="alert" className="text-body text-error">
          {localized(locale, uiStrings.contact.form.error)}{" "}
          <a href={`mailto:${siteContent.contact.email}`} className="underline underline-offset-2">
            {siteContent.contact.email}
          </a>
        </p>
      ) : null}
    </form>
  );
}

export function hasContactForm(): boolean {
  return Boolean(formspreeFormId);
}
