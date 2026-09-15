import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Commonwealth Group | Sample redesign by MJL Collective";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1C2C",
          color: "#F4F1EA",
          padding: "64px 72px",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C4A56A",
          }}
        >
          MJL Collective · Spec preview
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 980,
            }}
          >
            The Commonwealth Group
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#D6D0C4",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Sample institutional redesign. Not the official website.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#A8A29A",
          }}
        >
          <span>Development · Leasing · Management · Est. 1973</span>
          <span style={{ color: "#C4A56A" }}>Preview only</span>
        </div>
      </div>
    ),
    size,
  );
}
