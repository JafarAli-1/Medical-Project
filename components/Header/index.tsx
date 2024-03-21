"use client";

import FaceBookSVG from "@/SVG/Facebook";
import InstgramSVG from "@/SVG/Instgram";
import LogoSVG from "@/SVG/Logo";
import TicTok from "@/SVG/Tictok";
import { Box, Button, Container, Flex, Group } from "@mantine/core";
import styles from "./style.module.css";

const links = [
  { link: "/", label: "الصفحة الرئيسية" },
  { link: "/about", label: "من نحن" },
  { link: "/", label: "الشهادات" },
  { link: "/", label: "شركاء النجاح" },
  { link: "/", label: "أقسام الأكاديمية" },
  { link: "/contact-us", label: "اتصل بنا" },
];
export default function Header() {
  const items = links.map((link) => (
    <a
      style={{
        color: "#10224B",
        textDecoration: "none",
        fontSize: "19px",
        fontWeight: 500,
      }}
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <div
      style={{
        backgroundColor: "#fff",
        paddingTop: "8px",
        paddingBottom: "8px",
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <Container maw="90%">
        <Flex align="center" justify="space-between">
          <LogoSVG />

          <Flex align="center" gap="md">
            <FaceBookSVG />
            <InstgramSVG />
            <TicTok />
            <Button
              className={styles.btnHeader}
              radius="xl"
              style={{
                width: "fit-content",
                backgroundColor: "#10224B",
                height: "25px",
              }}
            >
              English
            </Button>
          </Flex>
        </Flex>

        <Group ml={50} gap="30px" visibleFrom="sm" dir="rtl">
          {items}
        </Group>
      </Container>
    </div>
  );
}
