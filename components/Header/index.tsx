"use client";

import FaceBookSVG from "@/SVG/Facebook";
import InstgramSVG from "@/SVG/Instgram";
import LogoSVG from "@/SVG/Logo";
import TicTok from "@/SVG/Tictok";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Group,
  Menu,
} from "@mantine/core";
import styles from "./style.module.css";
import { IconChevronDown } from "@tabler/icons-react";

const links = [
  { link: "/", label: "الصفحة الرئيسية" },
  { link: "/", label: "من نحن" },
  {
    link: "#1",
    label: "الشهادات",
    links: [
      { link: "/", label: "شهادات معتمدة" },
      { link: "/", label: "عضوية و اعتمادات" },
    ],
  },

  { link: "/", label: "شركاء النجاح" },
  {
    link: "#2",
    label: "أقسام الأكاديمية",
    links: [
      { link: "/", label: "التقنيات الصحية و الطبية" },
      { link: "/", label: "قسم التمريـــــــــــض" },
      { link: "/", label: "قسم طب الأطفـــــــــــال" },
      { link: "/", label: "قسم الطب النفســـــــي" },
      { link: "/", label: "طب الامراض الجلـــــــدية" },
      { link: "/", label: "قســـــــم التخـــــــــــــــدير" },
      { link: "/", label: "قسم الليزر والاشـــــــــعة" },
      { link: "/", label: "قسم الطب البشـــــــــري" },
      { link: "/", label: "قسم الطب التجميـــلي" },
    ],
  },

  { link: "/", label: "اتصل بنا" },
];

export default function Header() {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="click"
          styles={{
            dropdown: {
              backgroundColor: "#10224B",
              border: "none",
            },
            item: {
              color: "#FFFFFF",
              fontSize: "17px",
              fontWeight: "600",
              fontFamily: "GE SS Two - Persian",
              textAlign: "right",
              borderBottom: "1px solid rgb(255 255 255 / 22%)",
              borderRadius: "0px",
              backgroundColor: "unset",
            },
          }}
        >
          <Menu.Target>
            <a
              style={{
                color: "#10224B",
                textDecoration: "none",
                fontSize: "19px",
                fontWeight: 500,
              }}
              href={link.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        style={{
          color: "#10224B",
          textDecoration: "none",
          fontSize: "19px",
          fontWeight: 500,
        }}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

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
