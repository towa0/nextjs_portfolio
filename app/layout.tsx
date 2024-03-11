import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/facicon.ico",
  },
  metadataBase: new URL("https://kyran.info/"),

  title: "Kyran Janssen",
  authors: {
    name: "Kyran Janssen",
  },

  description:
    "Based in Abu Dhabi, I'm a Front-end developer passionate for building modern web applications that users love.",
  openGraph: {
    title: "Kyran Janssen",
    description:
      "Based in Abu Dhabi, I'm a Front-end developer passionate for building modern web applications that users love.",
    url: "https://kyran.info/",
    siteName: "Kyran Janssen",
    images: "/portfolio.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
