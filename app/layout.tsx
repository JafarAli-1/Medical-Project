import "@mantine/core/styles.css";
import Head from "next/head";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "Medical-Project",
  description: "Created By Jafar Ali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Encode+Sans:wght@100;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        style={{
          backgroundColor: "#fff",
          width: "100% !important",
          overflowX: "hidden",
        }}
      >
        <MantineProvider
          defaultColorScheme="light"
          theme={{
            fontFamily: "Cairo",
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
