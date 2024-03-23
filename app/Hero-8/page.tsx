import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero8 from "@/components/Hero-8";
import { Box } from "@mantine/core";

export default function HeroPage3() {
  return (
    <div>
      <Header />
      <Hero8 />
      <Footer value={1000} />
    </div>
  );
}
