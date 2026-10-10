import MinimalHeader from "@/components/MinimalHeader";
import Footer from "@/components/Footer";

export default function SpeakLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MinimalHeader action="contact" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
