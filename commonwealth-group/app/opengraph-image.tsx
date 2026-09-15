import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "The Commonwealth Group | Sample redesign";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f4ef",
          color: "#141414",
          padding: "64px 72px",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#ffffff",
              padding: 10,
              boxShadow: "0 0 0 1px rgba(96, 0, 0, 0.18)",
            }}
          >
            <img src={logoSrc} width={381} height={132} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#600000",
            }}
          >
            Sample redesign · Preview only
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 600,
              maxWidth: 980,
              color: "#141414",
            }}
          >
            The Commonwealth Group
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#5c5555",
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
            color: "#5c5555",
          }}
        >
          <span>Development · Leasing · Management · Est. 1973</span>
          <span style={{ color: "#600000" }}>Preview only</span>
        </div>
      </div>
    ),
    size,
  );
}
