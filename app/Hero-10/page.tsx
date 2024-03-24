import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero10 from "@/components/Hero-10";
import { Box } from "@mantine/core";

export default function HeroPage3() {
  return (
    <div>
      <Header />
      <Hero10 />
      <Footer value={1000} />
    </div>
  );
}
