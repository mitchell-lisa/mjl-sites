import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { PreviewBanner } from "@/components/PreviewBanner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-pad">
      <div id="top" />
      <PreviewBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
