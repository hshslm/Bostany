import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bostany - Quality Since 1900";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2D2D2D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#C5993A",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "#C41E24",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#FAFAF7",
              fontFamily: "serif",
            }}
          >
            B
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FAFAF7",
            letterSpacing: "0.05em",
          }}
        >
          BOSTANY
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#C5993A",
            marginTop: 16,
            letterSpacing: "0.15em",
          }}
        >
          QUALITY SINCE 1900
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(250, 250, 247, 0.5)",
            marginTop: 24,
          }}
        >
          {"Egypt's Trusted Food Brand"}
        </div>

        {/* Bottom gold line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#C5993A",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
