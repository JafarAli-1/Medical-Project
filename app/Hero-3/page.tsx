import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero3 from "@/components/Hero-3";
import { Box } from "@mantine/core";

export default function HeroPage3() {
  return (
    <div>
      <Header />
      <Hero3 />
      <Footer value={1000} />
    </div>
  );
}
