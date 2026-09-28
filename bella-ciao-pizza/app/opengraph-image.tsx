import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Bella Ciao Pizza, wood-fired pizza that comes to you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const pie = await readFile(join(process.cwd(), "public/photos/pizza-zingaro.jpg"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const pieSrc = `data:image/jpeg;base64,${pie.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#17130f",
          color: "#f4efe6",
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
          <img src={logoSrc} width={150} height={120} alt="" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", fontSize: 58, lineHeight: 0.95, color: "#f4efe6" }}>
              Wood-fired pizza that comes to you.
            </div>
            <div style={{ display: "flex", fontSize: 24, color: "#d4b483" }}>
              Mobile wood-fired pizza · New Jersey
            </div>
            <div style={{ display: "flex", fontSize: 24, color: "#f4efe6" }}>(732) 309-3034</div>
          </div>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: "0.14em", color: "#d4b483" }}>
            YOUR PARTY. OUR OVEN.
          </div>
        </div>
        <div style={{ width: "44%", height: "100%", display: "flex", overflow: "hidden" }}>
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
