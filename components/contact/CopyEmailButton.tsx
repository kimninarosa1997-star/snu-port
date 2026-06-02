"use client";

import { useCallback, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { localized, uiStrings } from "@/lib/content";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const { locale } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleCopy = useCallback(async () => {
    setFailed(false);

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      return;
    } catch {
      /* fallback below */
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (ok) {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
        return;
      }
    } catch {
      /* ignore */
    }

    setFailed(true);
    window.setTimeout(() => setFailed(false), 3000);
  }, [email]);

  const label = copied
    ? localized(locale, uiStrings.contact.copySuccess)
    : failed
      ? localized(locale, uiStrings.contact.copyError)
      : localized(locale, uiStrings.contact.copyEmail);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-h-11 w-full items-center justify-center border border-border px-7 py-3 text-label uppercase tracking-[var(--tracking-label)] text-foreground transition-colors hover:border-foreground focus-visible:focus-ring sm:w-auto"
      >
        {label}
      </button>
      <p role="status" aria-live="polite" className="sr-only">
        {copied ? localized(locale, uiStrings.contact.copySuccess) : failed ? localized(locale, uiStrings.contact.copyError) : ""}
      </p>
    </div>
  );
}
