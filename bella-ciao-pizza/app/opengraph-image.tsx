import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Bella Ciao Pizza | Preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const pie = await readFile(
    join(process.cwd(), "public/photos/pizza-zingaro.jpg"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const pieSrc = `data:image/jpeg;base64,${pie.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#14110f",
          color: "#f5ede3",
        }}
      >
        <div
          style={{
            width: "56%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 60px",
          }}
        >
          <img src={logoSrc} width={162} height={130} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                display: "flex",
                fontSize: 56,
                lineHeight: 1.05,
                fontWeight: 600,
                color: "#d4af37",
              }}
            >
              Bella Ciao Pizza
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.35,
                color: "#f5ede3",
              }}
            >
              Wood-fired mobile pizza
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "rgba(245, 237, 227, 0.72)",
              }}
            >
              Dayton / South Brunswick, NJ
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#d4af37",
              }}
            >
              (732) 309-3034
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(245, 237, 227, 0.55)",
            }}
          >
            Preview only · MJL Collective
          </div>
        </div>
        <div
          style={{
            width: "44%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <img
            src={pieSrc}
            alt=""
            width={528}
            height={630}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
