import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero5 from "@/components/Hero-5";
import { Box } from "@mantine/core";

export default function HeroPage3() {
  return (
    <div>
      <Header />
      <Hero5 />
      <Footer value={700} />
    </div>
  );
}
