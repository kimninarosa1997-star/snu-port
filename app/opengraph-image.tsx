import { ImageResponse } from "next/og";
import { siteContent } from "@/lib/content";

export const alt = `${siteContent.meta.name} — ${siteContent.meta.oneLineEn}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { meta, hero } = siteContent;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0B0B0D",
          color: "#F4F4F5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9A9AA3",
            margin: 0,
          }}
        >
          {meta.name} · Portfolio
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 0.95,
              margin: 0,
              maxWidth: 960,
            }}
          >
            {meta.oneLineEn}
          </p>
          <p
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#E4E4E7",
              margin: 0,
              maxWidth: 900,
            }}
          >
            {hero.supportingEn.slice(0, 140)}
            {hero.supportingEn.length > 140 ? "…" : ""}
          </p>
        </div>
        <p style={{ fontSize: 20, color: "#D4AF50", margin: 0 }}>{meta.position}</p>
      </div>
    ),
    { ...size },
  );
}
