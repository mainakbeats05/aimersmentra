import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Departments } from "@/components/Departments";
import { Colleges } from "@/components/Colleges";
import { Cities } from "@/components/Cities";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Policies } from "@/components/Policies";
import { Footer } from "@/components/Footer";
import { CounsellingProvider } from "@/components/CounsellingDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aimers Mentra — India's Premium College Admission Consultancy" },
      { name: "description", content: "Premium admission consultancy guiding students into India's top colleges — MIT-WPU, SSPU, DY Patil, SRM, Symbiosis, NMIMS, VIT and more. Expert counselling for B.Tech, MBA, MBBS, BBA, BDS." },
      { property: "og:title", content: "Aimers Mentra — Your Pathway To Top Colleges" },
      { property: "og:description", content: "From dreams to admissions. India's premium educational consultancy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CounsellingProvider>
      <main className="relative">
        <Background />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Departments />
        <Colleges />
        <Cities />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Policies />
        <Footer />
      </main>
    </CounsellingProvider>
  );
}
