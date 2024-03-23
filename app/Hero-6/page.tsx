import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero6 from "@/components/Hero-6";
import { Box } from "@mantine/core";

export default function HeroPage3() {
  return (
    <div>
      <Header />
      <Hero6 />
      <Footer value={1000} />
    </div>
  );
}
