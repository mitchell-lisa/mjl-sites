import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "SHQ Properties | Sample redesign";
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
          background: "#1c1c1c",
          color: "#ffffff",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <img src={logoSrc} width={280} height={92} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#d4d4d4",
            }}
          >
            Preview only · MJL Collective
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 0.95,
              fontWeight: 800,
              maxWidth: 980,
              textTransform: "uppercase",
            }}
          >
            Building Dreams Together
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 860,
              lineHeight: 1.35,
            }}
          >
            Family-owned REI and general contracting in Southern New Jersey
            since 1999. Not the official website.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#d4d4d4",
          }}
        >
          <span>We buy properties · Flooring · Trim · Tile</span>
          <span>(856) 488-8070</span>
        </div>
      </div>
    ),
    size,
  );
}
