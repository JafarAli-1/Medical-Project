import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroImage6 from "@/public/Image 6@2x.png";
import DrImage from "@/public/Mask Group 5@2x.png";

export default function Hero5() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1" }}>
        <Image
          src={HeroImage6}
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
        طب الأطفال
      </Title>

      <Text
        className={styles.desText}
        style={{
          zIndex: "2",
          position: "relative",
          top: "600px",
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
        طب الأطفال أحد أهم التخصصات والفروع الطبية! يُنظر إلى تخصص طب الأطفال أو
        ما يُشار إليه باللغة الإنجليزية Pediatrics أنَّه من العلوم الحديثة
        نسبيًا، وهو بالطبع يندرج تحت الاختصاصات الفرعية لتخصص الطب، أي يختار
        الطلبة الاختصاص في مجال معين بعد الانتهاء من مسيرتهم الدراسية في الطب
        البشري بشكلٍ عام <br /> <br /> <br /> يُعنى تخصص طب الأطفال بتقديم
        الرعاية الطبية للأطفال وتشخيص أمراضهم، وعلاجهم سواءً كانوا حديثي الولادة
        أم لا؛ فهو معني بتقديم الرعاية والعناية الطبية والصحية للإنسان في
        المرحلة ما بين سن الطفولة، وحتى بلوغ سن الرشد. لا يقتصر طب الأطفال على
        رعاية الأطفال وصحتهم فحسب، بل يعنى بالعديد من الأمور أهمها العناية
        بمراحل نمو الأطفال، وصحتهم البدنية والنفسية، فضلًا عن معالجة الأمراض،
        والإعاقات، والإصابات المختلفة. يمتلك تخصص طب الأطفال صفات كثيرة تُميّزه
        عن غيره من التخصصات الطبية الأخرى؛ وأصبَح ذات أهمية فريدة من نوعها نظرًا
        للتطوُّر الذي شهده في المراحل الأخيرة.  ويُوجَد فرق شاسع وكبير بين طب
        الأطفال وطب البالغين بالتأكيد لأسباب عدة، لعل أبرزها إصابة الأطفال
        أمراضًا لا تُصيب سواهم كمرض الجدري مثلًا، واختلاف الأجسام والحالات
        البدنية والنفسية من الصغار للكبار، ممَّا يؤدي إلى إحداث الفرق بين طب
        الأطفال وطب البالغين. تخصصك من صفاتك <br /> تعرَّف على السمات، والصفات،
        والقدرات الشخصية، والمهارات التي تؤهلك لدراسة تخصص طب الأطفال: من
        المُحتمل أنَّك تسأل نفسك الآن: هل أستطيع أنْ أصبح طبيب أطفال ناجحًا؟
        يتعيَّن على الطلبة المُقبلين على اختيار مسارهم الجامعي التحلِّي بما
        يُؤهلهم نحو دراسة هذا التخصص، فلو كُنت تحب الأطفال، ادرس طب الأطفال،
        وابتعد عنه فيما إذا كانت ميولك تتجه نحو تكنولوجيا المعلومات، أو العلوم
        الإدارية مثلًا. وتذكَّر باستمرار أنَّ الإرادة، والمثابرة، والطموح،
        والرغبة على الدراسة هم حلفاء نجاحك وتميّزك في المجال، إلى جانب المهارات
        المبينة في القائمة أدناه: <br /> <br /> المؤهلات العلمية: <br /> ◦
        التميّز الأكاديمي.
        <br /> ◦ مستوى جيد في اللغة الإنجليزية.
        <br /> ◦ التحاق الطلبة في المسار العلمي في مرحلة الثانوية العامة.
        <br /> الصفات الشخصية:
        <br /> ◦ حُب الأطفال، والعمل الخيري، والمساعدة.
        <br /> ◦ التعاطف مع الأطفال والصبر عليهم.
        <br /> ◦ البشاشة.
        <br /> ◦ الشخصية الاجتماعية.
        <br /> ◦ عدم التأثُّر كثيرًا بالحالات النفسية.
        <br /> ◦ مهارات التحليل، والتفكير الجيد، حيث يتطلَّب التخصص التفكير في
        نتائج الفحوصات وتحليلها.
        <br /> ◦ حُب القراءة، حيث يعتمد طب الأطفال عليها كثيرًا وذلك لاحتوائه
        على المعلومات الغزيرة والتفاصيل الكثيرة.
        <br /> ◦ مستوى عالٍ من التركيز حتى يتمكَّن الأطباء من التوصُّل إلى
        التشخيص المرضي الصحيح للطفل.
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
