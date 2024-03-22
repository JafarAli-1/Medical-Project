import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero4 from "@/components/Hero-4";
import { Box } from "@mantine/core";

export default function HeroPage3() {
  return (
    <div>
      <Header />
      <Hero4 />
      <Footer value={1000} />
    </div>
  );
}
