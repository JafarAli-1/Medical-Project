import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroClients from "@/components/Hero-Clients";
import { Box } from "@mantine/core";

export default function ValidatePage2() {
  return (
    <div>
      <Header />
      <HeroClients />
      <Footer value={700} />
    </div>
  );
}
