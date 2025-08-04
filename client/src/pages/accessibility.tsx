import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Accessibility() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 fade-in">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Accessibility</h1>
            <p className="text-lg text-muted-foreground mb-8">Learn about our accessibility features and commitment.</p>
            <p>Coming soon...</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
