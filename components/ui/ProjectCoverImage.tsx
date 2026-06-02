"use client";

import Image from "next/image";

type ProjectCoverImageProps = {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProjectCoverImage({
  src,
  alt,
  className = "",
  priority = false,
}: ProjectCoverImageProps) {
  if (!src) {
    return (
      <div
        className={`project-card-visual absolute inset-0 ${className}`}
        aria-hidden={alt ? undefined : true}
      />
    );
  }

  const isLocalAsset = src.startsWith("/");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized={isLocalAsset}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
      className={`object-cover object-center grayscale-0 transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
    />
  );
}
