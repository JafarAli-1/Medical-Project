import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero7 from "@/components/Hero-7";
import { Box } from "@mantine/core";

export default function HeroPage3() {
  return (
    <div>
      <Header />
      <Hero7 />
      <Footer value={1000} />
    </div>
  );
}
