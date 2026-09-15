import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PreviewBanner } from "@/components/PreviewBanner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PreviewBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
