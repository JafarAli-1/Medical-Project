import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroValidate2 from "@/components/Hero-Validation-2";
import { Box } from "@mantine/core";

export default function ValidatePage2() {
  return (
    <div>
      <Header />
      <HeroValidate2 />
      <Footer value={500} />
    </div>
  );
}
