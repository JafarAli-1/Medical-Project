"use client";

import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import LogoSVG from "@/SVG/Logo";
import LogoFooter from "@/public/Group 73@2x.png";
import classes from "./style.module.css";
import Image from "next/image";

const data = [
  {
    title: "خريطة الموقع",
    links: [
      { label: "الصفحة الرئيسية", link: "#" },
      { label: "الشهادات", link: "#" },
      { label: "أقسام الأكاديمية", link: "#" },
      { label: "أتصل بنا", link: "#" },
    ],
  },
  {
    title: "روابط هامة",
    links: [
      { label: "الصفحة الرئيسية", link: "#" },
      { label: "الشهادات", link: "#" },
      { label: "أقسام الأكاديمية", link: "#" },
      { label: "أتصل بنا", link: "#" },
    ],
  },
  {
    title: "Contact US",
    links: [
      { label: "+44 733 7741 279", link: "#" },
      { label: "+44 733 7741 279", link: "#" },
      { label: "INFO@MEDICAL.COM", link: "#" },
      { label: "3 BOYD ST , LONDON E1 1FQ", link: "#" },
    ],
  },
];

export default function Footer({ value }: any) {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer style={{ top: value }} className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src={LogoFooter}
            alt="Logo Footer"
            width={100}
            height={150}
            className={classes.imgFooter}
          />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Group
          gap={0}
          className={classes.social}
          justify="flex-start"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
