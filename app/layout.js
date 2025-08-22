import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "تکنو سعدی | راهکارهای انتقال قدرت",
  description:
    "۲۵ سال تجربه در تأمین، مشاوره و تعمیر گیربکس، الکتروموتور، جک اسکرو و ویبراتور صنعتی با گارانتی اصالت و تحویل سریع سراسری.",
  keywords: [
    "تکنو سعدی",
    "الکتروموتور",
    "گیربکس صنعتی",
    "گیربکس NMRV",
    "جک اسکرو",
    "ویبراتور صنعتی",
  ],
  authors: [{ name: "Techno Saadi" }],
  openGraph: {
    title: "تکنو سعدی | راهکارهای انتقال قدرت",
    description:
      "تامین، مشاوره و تعمیر تخصصی انواع تجهیزات انتقال قدرت از ۲۵ وات تا ۲۵۰ کیلووات.",
    url: "https://techno-saadi.ir",
    siteName: "تکنو سعدی",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تکنو سعدی | راهکارهای انتقال قدرت",
    description:
      "۲۵ سال تجربه در تأمین و تعمیر تجهیزات انتقال قدرت با تحویل سریع سراسری.",
  },
  metadataBase: new URL("https://techno-saadi.ir"),
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
