import { Box, Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import styles from "./style.module.css";
import HeroImage9 from "@/public/Image 9@2x.png";
import DrImage from "@/public/Mask Group 5@2x.png";

export default function Hero8() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1", width: "100%" }}>
        <Image
          src={HeroImage9}
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
        قسم التخدير
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
        التخدير هي عملية استخدام الأدوية القادرة على محاصرة الإحساس بالألم بصورة
        أساسية، وبعض الاحاسيس الأخرى في مجال الطب (خاصة الجراحة، وطب الأسنان).
        ويشمل: المسكنات (التي تخفف، أو تمنع الألم)، والشلل المؤقت لعضلات الجسم
        (ارتخاء العضلات)، وفقدان الذاكرة، وفقدان الوعي. ويشار للمريض الذي يكون
        تحت تأثير الأدوية المخدرة بأنه مُخَدَّر. <br /> <br /> يستعمل التخدير
        لمساعدة المريض على الخضوع للإجراءات الطبية، والعمليات الجراحية دون ألم
        أو معاناة. ويوجد ثلاثة أسس للتخدير: <br /> <br /> تخدير عام: يثبط نشاط
        الجهاز العصبي المركزي، مما يؤدي إلى فقدان الوعي، وفقدان عام للإحساس يشمل
        كامل الجسم. تهدئة: تثبط الجهاز العصبي المركزي إلى أقل درجة، وتثبط القلق
        وخلق ذاكرة طويلة المدى للأحداث، ولكن دون فقد الوعي. تخدير ناحي، وتخدير
        موضعي: لمنع انتقال النبضات العصبية بين جزء معين من الجسم والجهاز العصبي
        المركزي، مما يسبب فقد الأحساس في هذا الجزء من الجسم. ويتميز هذا النوع
        بأن المريض يكون واع إلا إذا تم إعطائه مخدر عام، أو مهدئ في نفس الوقت.
        ويوجد منه نوعان: إحصار طرفي يثبط الإحساس في مكان ما في الجسم، مثل: تخدير
        الأسنان في مجال طب الأسنان، أو إحصار عصب لتثبيط الإحساس في الطرف
        بالكامل. إحصار مركزي حيث يتم تخدير منطقة معينة في الجهاز العصبي المركزي
        نفسه لتثبيط استقبال الإحساس القادم إليه من المناطق الموجودة خارج مكان
        الإحصار مثل تخدير فوق الجافية، والتخدير النصفي. ولتجهيز إجراء طبي يقوم
        طبيب التخدير باختيار وتحديد الجرعات اللازمة من دواء واحد أو أكثر، للوصول
        إلى نوع ودرجة التخدير المناسبة لنوع الإجراء الطبي، وللمريض. وتشمل أنواع
        هذه الأدوية: المخدر العام، والمنومات، والمهدئات، والناركوتيات،
        والمسكنات.
        <br /> <br /> يوجد للتخدير مخاطر رئيسية، ومخاطر ثانوية. ومن أمثلة
        المخاطر الرئيسية: الوفاة، والنوبة القلبية، والانصمام الرئوي، بينما تشمل
        المخاطر الثانوية: قيء، وغثيان بعد العملية، وإعادة حجز المريض في
        المستشفى. ويتناسب حدوث المضاعفات مع حالة المريض الصحية، ودرجة تعقيد
        العملية الجراحية، ونوع التخدير. غالبا ما يستيقظ المريض خلال دقائق بعد
        انتهاء تأثير المخدر، ويستعيد قدرته على الإحساس خلال ساعات. ولكن يوجد
        إستثناء واحد وهو حالة تسمى هذيان ما بعد العملية تتميز باستمرار التشوش،
        والارتباك لأسابيع، أو شهور بعد العملية، وهي حالة شائعة مع المرضى الذين
        يخضعون لجراحات القلب، وكبار السن.
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
