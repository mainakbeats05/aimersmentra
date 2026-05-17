import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Colleges } from "@/components/Colleges";
import { Cities } from "@/components/Cities";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aimers Mentra — India's Premium College Admission Consultancy" },
      { name: "description", content: "Premium admission consultancy guiding students into India's top colleges — Symbiosis, NMIMS, MIT-WPU, Christ, VIT, SRM and more. Expert counselling, career guidance and end-to-end admission support." },
      { property: "og:title", content: "Aimers Mentra — Your Pathway To Top Colleges" },
      { property: "og:description", content: "From dreams to admissions. India's premium educational consultancy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Colleges />
      <Cities />
      <WhyUs />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
