import { Box, Button, Flex, Input, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroValidateImage from "@/public/Image 2@2x.png";
import CertificateImage from "@/public/Ceetifacat-01@2x.png";

export default function HeroValidate() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1" }}>
        <Image
          src={HeroValidateImage}
          alt="Home Page Image For Validation Page"
          className={styles.img}
        />
      </Box>

      <Title
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
        شهادات معتمدة
      </Title>

      <Box
        style={{
          zIndex: "2",
          position: "relative",
          top: "500px",
          textAlign: "center",
        }}
      >
        <Text c="#10224B" fz="35px">
          اكتب رقم الشهادة للتحقق من صحتها على الفور
        </Text>

        <Flex justify="center" align="center" gap="xl" mt="xl">
          <Button size="xl">تحقق من الرمز الخاص بك</Button>
          <Input
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
      </Box>
    </div>
  );
}
