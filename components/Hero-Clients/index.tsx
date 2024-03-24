import { Box, Button, Flex, Input, Space, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroClientsImage from "@/public/Image 3@2x.png";
import CertificateImage from "@/public/Ceetifacat-01@2x.png";
import ClientImage1 from "@/public/Rectangle 35@2x.png";
import ClientImage2 from "@/public/Rectangle 36@2x.png";
import ClientImage3 from "@/public/Rectangle 37@2x.png";
import ClientImage4 from "@/public/Rectangle 38@2x.png";
import ClientImage5 from "@/public/Rectangle 39@2x.png";
import ClientImage6 from "@/public/Rectangle 40@2x.png";
import ClientImage7 from "@/public/Rectangle 41@2x.png";
import ClientImage8 from "@/public/Rectangle 42@2x.png";
import ClientImage9 from "@/public/Rectangle 43@2x.png";
import ClientImage10 from "@/public/IMG-20240117-WA0001@2x.png";
import ClientImage11 from "@/public/IMG-20240117-WA0002@2x.png";
import ClientImage12 from "@/public/IMG-20240117-WA0005@2x.png";
import ClientImage13 from "@/public/صورة واتساب بتاريخ 2024-01-17 في 16.59.18_cb4d4dcb@2x.png";
import ClientImage14 from "@/public/Mask Group 7@2x.png";
import ClientImage15 from "@/public/IMG-20240117-WA0007@2x.png";

export default function HeroClients() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1" }}>
        <Image
          src={HeroClientsImage}
          alt="Home Page Image For Validation Page"
          className={styles.img}
        />
      </Box>

      <Title
        className={styles.titleRes}
        style={{
          zIndex: "2",
          position: "relative",
          top: "150px",
          left: "150px",
          width: "fit-content",
        }}
        ta="left"
        c="#fff"
        fz="60px"
      >
        شركاء النجاح
      </Title>

      {/* <Box
        className={styles.boxRes}
        style={{
          zIndex: "2",
          position: "relative",
          top: "500px",
          textAlign: "center",
        }}
      >
        <Text c="#10224B" fz="35px" className={styles.titleRes2}>
          اكتب رقم الشهادة للتحقق من صحتها على الفور
        </Text>

        <Flex justify="center" align="center" gap="xl" mt="xl" wrap="wrap">
          <Button className={styles.btn} size="xl">
            تحقق من الرمز الخاص بك
          </Button>
          <Input
            className={styles.input}
            size="xl"
            styles={{
              input: {
                height: "40px",
                backgroundColor: "white",
                color: "black",
                width: "650px",
                border: "1px solid #17C2C8",
              },
            }}
          />
        </Flex>

        <Image
          style={{ marginTop: "50px" }}
          src={CertificateImage}
          alt="Certificate Image"
          width={300}
          height={400}
        />
      </Box> */}

      <Box
        className={styles.boxRes}
        style={{
          zIndex: "2",
          position: "relative",
          top: "650px",
          textAlign: "center",
        }}
      >
        <Flex justify="center" align="center" gap="xl" wrap="wrap">
          <Image
            src={ClientImage1}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage2}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage3}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage4}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage5}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />

          <Image
            src={ClientImage6}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage7}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage8}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage9}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage10}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />

          <Image
            src={ClientImage11}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage12}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage13}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage14}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
          <Image
            src={ClientImage15}
            alt="Image Clients"
            width={150}
            height={150}
            className={styles.imgClients}
          />
        </Flex>
      </Box>
    </div>
  );
}
