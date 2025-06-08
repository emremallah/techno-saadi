// src/components/Hero.tsx
// Hero section with centered content for "تکنو سعدی"

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate flex items-center justify-center py-24 lg:py-32">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback.webp"
      >
        <source src="/techno-saadi-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-slate-900/60" />

      {/* Content */}
      <div className="container mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center rtl:text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          راهکارهای انتقال قدرت 
          <span className="block text-2xl font-semibold sm:inline sm:text-4xl lg:text-5xl">
             از ۲۵ وات تا ۲۵۰ کیلووات
          </span>
        </h1>

        <p className="max-w-prose text-lg text-slate-200 md:text-xl">
          ۲۵ سال تجربه در تأمین و تعمیر انواع گیربکس، جک و ویبراتور صنعتی با
          گارانتی اصالت و تحویل سریع سراسری.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#quote"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            درخواست پیش‌ فاکتور
          </Link>

          <Link
            href="/catalog.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-medium text-slate-100 ring-1 ring-inset ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <Download size={18} />
            دانلود کاتالوگ
          </Link>
        </div>

        {/* Key figures */}
        <ul className="mt-10 grid grid-cols-1 gap-6 text-slate-200 sm:grid-cols-3">
          {[
            { value: "+۳۵۰۰", label: "محصول فعال" },
            { value: "۹۵٪", label: "رضایت مشتری" },
            { value: "۲۴ ساعته", label: "ارسال" },
          ].map((item) => (
            <li key={item.label} className="flex flex-col items-center">
              <span className="text-2xl font-bold lg:text-3xl">{item.value}</span>
              <span className="text-sm lg:text-base">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <div className="animate-bounce text-slate-200">↓</div>
      </div>
    </section>
  );
}
