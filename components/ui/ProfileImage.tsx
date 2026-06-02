"use client";

import Image from "next/image";
import { useState } from "react";
import { siteContent } from "@/lib/content";

const FALLBACK_SRC = "/images/profile-placeholder.svg";

type ProfileImageProps = {
  alt: string;
  fallbackCaption?: string;
  className?: string;
};

export function ProfileImage({ alt, fallbackCaption, className = "" }: ProfileImageProps) {
  const profileSrc = siteContent.assets.profileImage;
  const [src, setSrc] = useState<string>(profileSrc);
  const isFallback = src === FALLBACK_SRC;

  return (
    <div
      className={`relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border border-border bg-neutral-900 lg:mx-0 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${isFallback ? "opacity-80" : "grayscale"}`}
        sizes="(max-width: 768px) 320px, 320px"
        onError={() => {
          if (src !== FALLBACK_SRC) setSrc(FALLBACK_SRC);
        }}
      />
      {isFallback && fallbackCaption ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-canvas/90 to-transparent p-4">
          <p className="text-caption text-neutral-300">{fallbackCaption}</p>
        </div>
      ) : null}
    </div>
  );
}
