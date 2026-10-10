import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-sky">404</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mb-8 text-mute">The page you are looking for does not exist or has moved.</p>
        <Button href="/">Back to home</Button>
      </main>
      <Footer />
    </>
  );
}
