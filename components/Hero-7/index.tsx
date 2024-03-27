import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroImage8 from "@/public/Image 8@2x.png";
import DrImage from "@/public/Mask Group 5@2x.png";

export default function Hero7() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1", width: "100%" }}>
        <Image
          src={HeroImage8}
          alt="Home Page Image For Third Hero Page"
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
        طب الامراض الجلدية
      </Title>

      <Text
        className={styles.desText}
        style={{
          zIndex: "2",
          position: "relative",
          top: "900px",
          width: "fit-content",
          background: "linear-gradient(#12D0E700, #B6E8EE)",
        }}
        fz="25px"
        c="#0C205D"
        pr="24px"
        pl="24px"
        pb="32px"
        lh="2"
        ta="right"
      >
        طب الجلد أو علم الجلد وأمراضه (بالإنجليزية: Dermatology)‏ هو تخصص طبي
        يُعنى بالأمراض التي تصيب الجلد والأغشية المخاطية كما وُيعنى أيضاً بأمراض
        الأظافر والشعر وهو مرتبط تقليدياً بالأمراض المنتقلة عن طريق الجنس (طب
        الأمراض المنقولة جنسيا)، وكثيراً مايسمى الطبيب المختص بهذا الفرع الطبي
        بطبيب الأمراض الجلدية والزهرية. يعد الجلد العضو الأكثر مرئيةً للآخرين،
        كما وأنه العضو الأكثر عرضة للتأثيرات البيئية المحيطة. يعد هذا العضو ذو
        تداخل مع العديد من الأعضاء الداخلية الأخرى كالغدد الصم والجهاز العصبي
        المركزي فهو يتأثر بالإشارات الواردة من هذه الأعضاء ويبدو ذلك واضحاً من
        خلال تغير لونه، وكمثال لها حالة الخجل حيث يصبح الجلد وردي اللون وذلك
        بفضل شبكة الأوعية الشعرية المتوزعة في أدمة الجلد والتي تتوسع بشكل تالي
        لهذه الإشارات الواردة من الجهاز العصبي المركزي. مثال آخر هو تفاقم بعض
        الأمراض بشكل تالي للشدة النفسية التي يتعرض لها للمريض، كما في حالة تفاقم
        مرض الصدفية Psoriasis أو حب الشباب Acne. أيضاً فإن الجلد يعد مرآة للجسم
        فهو يعكس الحالة الداخلية للجسم في كثير من الأمراض.
      </Text>

      <Container>
        <Flex
          justify="center"
          align="flex-start"
          className={styles.flexResponsive}
        >
          <Image src={DrImage} alt="Mis.Word" className={styles.img2} />

          <Box
            className={styles.boxRes2}
            style={{
              background: "linear-gradient(#CBCBCB, #FFFFFF00)",
              padding: "32px",
              width: "70%",
              zIndex: "1",
              borderRadius: "277px",
              position: "relative",
            }}
          >
            <>
              <Title ta="right" fz="45px" mt="xl" c="#0064AD">
                د. أحمد سمير الدليمي
              </Title>

              <Text mt="md" c="#10224B" ta="right" fz="xl">
                ماجستير أختصاص. أحياء مجهرية طبيه والفحص الجزيئي . طب تجميل
                الجراحي والغير جراحي
              </Text>
            </>
          </Box>
        </Flex>
      </Container>
    </div>
  );
}
