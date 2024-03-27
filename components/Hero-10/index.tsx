import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroImage12 from "@/public/Image 12@2x.png";
import DrImage from "@/public/Mask Group 5@2x.png";

export default function Hero10() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1", width: "100%" }}>
        <Image
          src={HeroImage12}
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
        الطب البشري
      </Title>

      <Text
        className={styles.desText}
        style={{
          zIndex: "2",
          position: "relative",
          top: "850px",
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
        تخصص الطب البشري من التخصصات التي يقبل عليها الناس منذ القديم، وفي
        العقود الأخيرة، ازداد الإقبال على دراسة الطب البشري في الجامعات، كون
        تخصص الطب البشري من أهم التخصصات التي يبحث عنها الطلاب، وقد كثرت
        الجامعات التي أولت للتخصص عناياتها الخاصة، مما أسهم في تموضع التخصص على
        خريطة مهمة عالمياً، نظراً للوسائل والخدمات التي باتت تحتضن التخصص وتطوره
        وتهتم به. ماهي مميزات دراسة الطب البشري؟ لعلَّ أهم المزايا التي تدفع
        الطلبة لاختيار تخصص الطب البشري يعود إلى المكانة المرموقة للطبيب في
        المجتمعات، كونه يتعامل مع أنبل تخصص عرفه البشر، إذ يتمتع الطبيب بمكانة
        اجتماعية مرموقة في جميع أنحاء العالم، والحصول على مكانة رفيعة في المجتمع
        مقصد مهم للإنسان، كما أن الطبيب يتمتع بدخل ممتاز، يعينه على نفقات الحياة
        ورفاهها، إضافة إلى أن الطبيب يستطيع الحصول على وظيفة مستقرّة، كما أن
        مجالات عمله لا تنحصر في العمل بالمستشفيات، أو العيادات الطبية، كما أن
        الطبيب يحمل مهنة إنسانية تتجلى في مساعدة المرضى، إذ يُؤمن معظم الأطباء
        أنه لا شيء أجمل من مساعدة الناس والمرضى ومعالجتهم. مجالات عمل تخصص الطب
        البشري بعد التخرج تعد مجالات العمل لتخصص الطب البشري من المجالات المهمة،
        إذ يستطيع المتخصص الذي أنهى سنوات دراسته أن يجد مجالاً لتخصصه بسرعة،
        نظراً لحاجات المجتمعات إلى الأطباء كل يوم، أما فرص العمل التي يمكن أن
        يعمل بها الخريج بعد إنهائه دراسة الطب البشري فمتنوعة، ومنها: إمكانية
        العمل في المستشفيات الحكومية والخاصة، وكذلك العمل في مراكز البحوث الطبية
        والمؤسسات التي تعنى بنشر الثقافة الطبية، إضافة إلى المراكز البحثية
        الطبية، والمستوصفات، والعيادات.   ماهي أقسام كلية الطب البشري؟ يعد تخصص
        الطب البشري من أهم التخصصات التي عرفت منذ القديم، وهو تخصص عام يشمل
        العديد من الفروع التخصصية، ومنها: طبّ النّساء والولادة، طبّ الأطفال،
        جراحة الأنف والأذن والحنجرة، والأمراض الجلديّة، وجراحة العيون، والطبّ
        النّفسي، والباطنيّة، وطبّ الأعصاب، وجراحة العظام، وغيرها.
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
