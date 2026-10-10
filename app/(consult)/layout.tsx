import MinimalHeader from "@/components/MinimalHeader";
import Footer from "@/components/Footer";

export default function ConsultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MinimalHeader action="phone" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
