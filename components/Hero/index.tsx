import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Input,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import HomePageImage from "@/public/Home page@2x.png";
import styles from "./style.module.css";
import CircleImage from "@/public/Ellipse 5@2x.png";
import MissImage from "@/public/Mask Group 1@2x.png";
import Women from "@/public/Women.png";
import Stat1 from "@/public/Rectangle 49@2x.png";
import Stat2 from "@/public/Rectangle 48@2x.png";
import Stat3 from "@/public/Rectangle 50@2x.png";

export default function Hero() {
  return (
    <div>
      <Box style={{ position: "absolute", zIndex: "1" }}>
        <Image
          src={HomePageImage}
          alt="Home Page Image"
          className={styles.img}
        />
      </Box>

      <Title
        style={{
          zIndex: "2",
          position: "relative",
          top: "150px",
          left: "100px",
          width: "fit-content",
        }}
        ta="left"
        c="#fff"
        fz="45px"
      >
        أكاديمية لندن للأبحاث العلمية والتدريب
      </Title>
      <Text
        style={{
          zIndex: "2",
          position: "relative",
          top: "160px",
          left: "110px",
          width: "fit-content",
        }}
        ta="left"
        c="#fff"
        fz="30px"
        fw="400"
      >
        مختصون في إقامة الكورسات التدريبية والمهنية <br /> لجميع التخصصات الطبية
        الجراحية والغير الجراحية
      </Text>

      {/* About-Us Hero */}
      <Box style={{ position: "relative", top: "650px" }}>
        <Title
          fz="45px"
          ta="center"
          c="#10224B"
          style={{
            zIndex: "2",
            position: "relative",
          }}
        >
          من نحن ؟
        </Title>

        <Title
          mt="xl"
          c="#10224B"
          ta="center"
          style={{
            zIndex: "2",
            position: "relative",
          }}
        >
          أكاديمية لندن للأبحاث العلمية والتدريب
        </Title>

        <Text
          style={{
            zIndex: "2",
            position: "relative",
          }}
          c="#10224B"
          mt="xl"
          fz="xl"
          pl="100px"
          pr="100px"
          ta="center"
          lh="2"
        >
          نحن اكاديمي تعليمي تدريبي ومركز ابحاث علمي المسجل رسميا في المملكه
          المتحده بالرقم الضريبي 15265814 ومصدق رسميا من قبل وزاره الخارجية
          البريطانية وزارة العدل حيث يعتبر مركزنا من اقوى الاكاديميات في العالم
          من حيث الرصانة العلمية الدولية واستخدام افضل واحدث الأساليب العلمية
          والعملية والتقنينات الحديثه في عالم التدريب الطبي نحن مختصون في اقامة
          الكورسات التدريبية والمهنية لجميع التخصصات الطبيه. الجراحيه والغير
          الجراحية بأشراف افضل الاطباء المختصين في العالم اجمع
        </Text>

        <Flex
          style={{
            zIndex: "1",
            position: "relative",
            left: "-150px",
            top: "-200px",
            height: "fit-content",
          }}
          justify="flex-start"
        >
          <Image src={CircleImage} alt="Circle Image" className={styles.img2} />
        </Flex>

        <Title
          style={{
            zIndex: "1",
            position: "relative",
            left: "-150px",
            top: "-200px",
            height: "fit-content",
          }}
          fz="40px"
          c="#10224B"
          ta="right"
        >
          كلمة مدير المركز
        </Title>

        {/* Leader-Word */}
        <Box
          //   bg="#B6E8EE"

          pt="24px"
          pb="24px"
          style={{
            position: "relative",
            zIndex: "2",
            top: "-92px",
            background: "linear-gradient(#B6E8EE, #12D0E700)",
          }}
        >
          <Flex align="center" justify="center" gap="250px">
            <Image src={MissImage} alt="Mis.Word" className={styles.img3} />
            <Text lh="xl" fz="25px" c="#10224B" fw="normal" w="40%" ta="right">
              تمثل مراكز الأبحاث والدراسات في عالمنا المعاصر دليلا ملموسا على
              تطور المعرفة في أي بلد من البلدان، في العالم فهذه المؤسسات بما
              تنتجه من منتج معرفي عالي الجودة، وما تضمه من مهارات بشرية متقدمة
              أصبحت خزان معرفي لا يمكن التفريط به او اهماله ، لاسيما تلك المراكز
              المعنية بالدراسات الاستراتيجية؛ كونها على احتكاك مباشر مع بيئة صنع
              القرار- أشخاصا وقضايا- فتقدم لها خيارات متعددة لاتخاذ قرارات
              رشيدة، بعد أن تأخذ كل الاحتمالات في الحسبان، لذا تجد كل صانع قرار
              مؤثر في عالم اليوم الى جانبه نخبة مختارة من . المستشارين العاملين
              في هذه المراكز
            </Text>
          </Flex>
        </Box>

        {/* Board-Content */}

        <Box>
          <Flex justify="center">
            <Button radius="50px" w="fit-content" h="80px" fz="40px">
              مما يتكون البورد؟
            </Button>
          </Flex>

          <Text mt="xl" fz="24px" ta="center" c="#10224B" pl="250px" pr="250px">
            يتكون البورد من مجموعة من الخبراء الذين يضعون معايير الخبرة والمعرفة
            اللازمة لجميع التخصصات الطبية والصيدلية والاشعة والسونار والتمريض
            والطب الوقائي للترقي لدرجة أخصائي معتمد في مجال معين، وبناء عليها
            يتم تصميم اختبار من يجتازه ينال شهادة ولقب البورد، وهي من الشهادات
            المعروفة في العالم. وتعتبر شهادة البورد شهادة رفع كفاءة وزياده خبرة
            علمية حديثة
          </Text>
        </Box>

        {/* How Can I Work */}
        <Container mt="xl">
          <Flex align="flex-start">
            <Image src={Women} alt="Mis.Word" className={styles.img4} />

            <Box
              style={{
                background: "linear-gradient(#CBCBCB, #FFFFFF00)",
                borderRadius: "40px",
                padding: "16px",
                width: "100%",
                position: "relative",
                top: "70px",
                zIndex: "1",
              }}
            >
              <>
                <Title ta="right" fz="45px" mt="xl" c="#0064AD">
                  كيف أعمل في مركز البحوث؟
                </Title>

                <Title c="black" ta="right" mt="xl">
                  الاوراق المطلوبة
                </Title>

                <Text mt="md" c="#10224B" ta="right" fz="xl">
                  صورة شهادة الماجستير ونسخة من الرسالة ( لوظيفة باحث مساعد ){" "}
                  <br />
                  صورة شهادة البكالوريوس <br /> بيان درجات الاربع او الخمس سنوات
                  <br />
                  الدراسية موضحا بها النسبة المئوية صورة شخصية صورة جواز السفر
                </Text>
              </>
            </Box>
          </Flex>

          {/* Statistcs */}
          <Group
            pos="relative"
            justify="center"
            gap="100px"
            style={{ zIndex: "5", top: "400px" }}
          >
            <Flex align="center" direction="column" gap="md">
              <Image src={Stat1} alt="Stat1" width={150} height={150} />
              <Title c="#10224B">0000</Title>
              <Text c="#10224B" fz="xl">
                المتدربين
              </Text>
            </Flex>
            <Flex align="center" direction="column" gap="md">
              <Image src={Stat2} alt="Stat1" width={150} height={150} />
              <Title c="#10224B">0000</Title>
              <Text c="#10224B" fz="xl">
                قصص النجاح
              </Text>
            </Flex>
            <Flex align="center" direction="column" gap="md">
              <Image src={Stat3} alt="Stat1" width={150} height={150} />
              <Title c="#10224B">0000</Title>
              <Text c="#10224B" fz="xl">
                الطلاب الحاصلين على الشهاده
              </Text>
            </Flex>
          </Group>

          {/* Validation The Certificate */}
          <Box className={styles.boxCertification}>
            <Flex align="center" justify="center" gap="100px">
              <Flex direction="column" gap="md">
                <Text c="#FFFFFF" fz="25px">
                  اكتب رقم الشهادة للتحقق من صحتها على الفور
                </Text>
                <Input
                  styles={{
                    input: {
                      height: "40px",
                      backgroundColor: "white",
                      border: "none",
                      color: "black",
                    },
                  }}
                />
                <Button
                  style={{
                    width: "fit-content",
                    display: "block",
                    margin: "auto",
                    height: "45px",
                  }}
                >
                  تحقق من الرمز الخاص بك
                </Button>
              </Flex>

              <Title c="#FFFFFF" fz="50px">
                شهادات معتمدة
              </Title>
            </Flex>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
