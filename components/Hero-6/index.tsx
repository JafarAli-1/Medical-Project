import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroImage7 from "@/public/Image 7@2x.png";
import DrImage from "@/public/Mask Group 5@2x.png";

export default function Hero6() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1" }}>
        <Image
          src={HeroImage7}
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
        الطب النفسي
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
        lh="2"
        ta="right"
      >
        لطب النفسي هو فرع من فروع الطب متخصص في دراسة وتشخيص ووقاية وعلاج
        الاضطرابات النفسية، ويشمل هذا مختلف التشوهات ذات الصلة بالمزاج والسلوك
        والإدراك والفهم.
        <br /> يبدأ التقييم النفسي الأولي لشخص ما عادة بالسيرة المرضية وفحص
        الحالة العقلية، وقد تجري بعض الفحوصات الطبية والاختبارات النفسية، وفي
        بعض الأحيان يستخدم التصوير العصبي أو تقنيات الفسيولوجيا العصبية.
        <br /> غالبا ما يتم تشخيص الاضطرابات النفسية وفقا للمعايير الواردة في
        مراجع التشخيص مثل المرجع المستخدم على نطاق واسع الدليل التشخيصي
        والإحصائي للاضطرابات العقلية (DSM)، الذي نشرته الجمعية الأمريكية للأطباء
        النفسيين (APA)، <br />
        والتصنيف الدولي للأمراض (ICD)، والمنشور من قبل منظمة الصحة العالمية
        (WHO). نشرت الطبعة الخامسة من الدليل التشخيصي والإحصائي للاضطرابات
        العقلية (DSM-5) في عام 2013، <br /> وكان من المتوقع أن تكون ذات فائدة
        كبيرة للعديد من المجالات الطبية. يُعتبر الجمع بين الدواء النفسي والعلاج
        النفسي أكثر الأساليب شيوعا للعلاج النفسي في الممارسة الحالية، ولكن
        الممارسة المعاصرة قد تشمل أيضا مجموعة واسعة من الوسائل الأخرى، على سبيل
        المثال، معالجة إلزامية مجتمعية، والتوظيف المدعوم. قد يتم صرف العلاج
        للمرضى الداخليين أو الخارجيين، اعتمادا على شدة الاضطراب الوظيفي أو على
        جوانب أخرى من الاضطراب، وتجرى الأبحاث والعلاجات النفسية في مجال في الطب
        النفسي ككل على أساس متعدد التخصصات، على سبيل المثال، مع علماء الأوبئة،
        استشاريي الصحة العقلية، والممرضات والأخصائيين النفسيين والمتخصصين في
        الصحة العامة، وأخصائيين الأشعة، والعاملين الاجتماعيين.
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
