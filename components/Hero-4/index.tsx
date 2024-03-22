import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroImage4 from "@/public/Image 5@2x.png";
import DrImage from "@/public/Mask Group 6@2x.png";

export default function Hero4() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1" }}>
        <Image
          src={HeroImage4}
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
        قسم التمريض
      </Title>

      <Text
        className={styles.desText}
        style={{
          zIndex: "2",
          position: "relative",
          top: "900px",
          width: "fit-content",
        }}
        fz="25px"
        c="#0C205D"
        pr="24px"
        pl="24px"
        lh="2"
        ta="right"
      >
        تعد مجالات العمل لتخصص التمريض من المجالات المضمونة، إذ يستطيع المتخصص
        الذي أنهى سنوات دراسته أن يجد مجالاً لتخصصه، فبعد التخرج يحق له العمل
        ضمن مجالات العمل في المستشفيات الحكومية أو الخاصة، وكذلك بمراكز التأهيل
        والعلاج الطبيعي، والعمل في الهيئات والمنظمات المختلفة، مثل مراكز الأمومة
        والطفولة، ومراكز تنظيم الأسرة، ومراكز التدريب والتثقيف الصحي، إضافة إلى
        العمل في الجامعات والمدارس أيضاً، كما تعد مهنة التمريض من أكثر المهن
        التي تفتح لصاحبها مجالاً للعمل في الخارج، مثل: <br /> • مدرب سريري •
        مشرف تمريض • معلم تمريض • مشرف مختبر • ممرض قانوني • ممرض جراحة • ممرض
        نسائية وتوليد • ممرض أمومة وطفولة • ممرض في العناية الحثيثة • ممرض مساعد
        أو زائر بيتي • رئيس قسم كلية التمريض في الجامعات أو الأقسام الطبية
      </Text>

      <Box
        className={styles.boxRes}
        p="24px"
        style={{
          background: "linear-gradient(#B6E8EE, #12D0E700)",
          zIndex: "2",
          position: "relative",
          top: "1000px",
          width: "fit-content",
        }}
      >
        <Text c="#0C205D" fz="25px" lh="2" ta="right">
          <Title> ما هي أقسام كلية التمريض؟ </Title>
          يعد تخصص التمريض من أهم التخصصات في العالم، وهو تخصص يتبع للعلوم
          الصحية، وقد شهد التطور الكبير في قطاع التمريض استحداث كثير من التخصصات
          في مجال التمريض في الجامعات ومنها: • تمريض صحة الأم والطفل • التمريض
          السريري • الطوارئ والحوادث • تمريض صحة المجتمع • العناية الحثيثة
          المركزة • التمريض الإداري • رعاية المسنين • تمريض الصحة النفسية •
          تمريض صحة المجتمع • التمريض الباطني والجراحي • تمريض الحروق • تمريض
          الأمومة والطفولة • الأمراض والعظام • العمليات والتخدير والإفاقة
          <Title mt="xl">
              أهم المواد والمساقات الدراسية التي يشملها تخصص التمريض
          </Title>
          تتنوع المساقات الدراسية في تخصص التمريض، بما يعطي التصور العام عن هذا
          التخصص، وسبل التدرج فيه، ليصل الدارس إلى إتقان تخصصه في علم التمريض،
          وعموماً، فإن المساقات التي تدرس في تخصص التمريض تبدأ بتلقي العلوم
          الطبية والمهارات المختلفة، ففي السنوات الأولى يدرس الطالب أساسيات
          التمريض، ومنها تتفرع مساقات في التمريض وأخلاقه وآدابه، إضافة إلى حقوق
          الممرض والمريض، وهناك مادة التشريح وتركيب جسم الإنسان، وأمراض الدم
          والكيمياء وعلم الأدوية وعلم التمريض، وعلوم الأحياء الدقيقة وعلم وظائف
          الأعضاء، والأدوية، والبكتيريا، والطفيليات، والسلوك الإنساني، وإعداد
          التقارير وبعض المواد الإدارية والنظرية المتعلقة بطبيعة علم الممرض في
          المهنة، وجميعها مواد أولية بسيطة، وفي السنة الثانية حتى الرابعة هناك
          المواد التخصصية في علم التمريض لتهيئة الطالب لسنة الامتياز والتخرج.
        </Text>
      </Box>

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
                د. داليا درهوم
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
