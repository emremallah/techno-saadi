"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send as Telegram,
  MessageSquare,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [sent, setSent] = useState(false);

  async function handleSubscribe(e) {
    e.preventDefault();
    // TODO: اتصال به سرویس ایمیل مارکتینگ (Mailchimp/Resend/…)
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
    e.currentTarget.reset();
  }

  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
      {/* Top */}
      <div className="container mx-auto px-4 py-12" dir="rtl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="لوگو تکنو سعدی"
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <span className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                تکنو سعدی
              </span>
            </Link>
            <p className="text-sm leading-7">
              تامین، مشاوره و تعمیر تخصصی انواع الکتروموتور، گیربکس صنعتی، NMRV،
              جک اسکرو و ویبراتور با گارانتی اصالت و تحویل سریع سراسر کشور.
            </p>
            <div className="flex gap-3">
              <SocialIcon href="https://instagram.com" label="اینستاگرام">
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon href="https://t.me" label="تلگرام">
                <Telegram size={18} />
              </SocialIcon>
              <SocialIcon href="https://wa.me/98912XXXXXXX" label="واتس‌اپ">
                <MessageSquare size={18} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" label="لینکدین">
                <Linkedin size={18} />
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              دسترسی سریع
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "خانه" },
                { href: "/products", label: "محصولات" },
                { href: "/about", label: "درباره ما" },
                { href: "/contact", label: "تماس با ما" },
                { href: "/catalog.pdf", label: "دانلود کاتالوگ" },
              ].map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              اطلاعات تماس
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5 text-orange-500" />
                <div className="ltr:text-left">
                  <a href="tel:021XXXXXXX" className="hover:text-orange-600">
                    ۰۲۱-XXXXXXX
                  </a>
                  <div className="text-slate-500 dark:text-slate-400">
                    شنبه تا چهارشنبه ۹ تا ۱۷
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5 text-orange-500" />
                <div className="ltr:text-left">
                  <a
                    href="mailto:info@techno-saadi.ir"
                    className="hover:text-orange-600"
                  >
                    info@techno-saadi.ir
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 text-orange-500" />
                <div>
                  <span>تهران، خیابان سعدی، پلاک ۱۲۳</span>
                  <div>
                    <a
                      className="text-sm text-orange-600 hover:underline"
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      مشاهده روی نقشه
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              دریافت پیشنهادهای ویژه
            </h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
              ایمیلت رو وارد کن تا جدیدترین پیشنهادها و تخفیف‌ها رو بفرستیم.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md items-stretch gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-orange-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800"
              />
              <button
                type="submit"
                disabled={sent}
                className="whitespace-nowrap rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-60"
              >
                {sent ? "ثبت شد ✅" : "عضویت"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 dark:border-slate-800" />

      {/* Bottom */}
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm md:flex-row">
        <p className="order-2 text-center md:order-1">
          © {year} تکنو سعدی — تمامی حقوق محفوظ است.
        </p>

        <ul className="order-1 flex flex-wrap items-center justify-center gap-4 md:order-2" dir="rtl">
          <li>
            <FooterLink href="/privacy">حریم خصوصی</FooterLink>
          </li>
          <li>
            <FooterLink href="/terms">قوانین و مقررات</FooterLink>
          </li>
          <li>
            <FooterLink href="/returns">بازگشت کالا</FooterLink>
          </li>
        </ul>

        {/* Back to top */}
        <button
          aria-label="بازگشت به بالا"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 inline-flex items-center justify-center rounded-full bg-orange-500 p-2 text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 md:static md:bg-transparent md:p-0 md:text-orange-600 md:shadow-none dark:md:text-orange-400"
          title="بازگشت به بالا"
        >
          <ArrowUp size={18} />
          <span className="sr-only">بازگشت به بالا</span>
        </button>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-700 transition hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-orange-300 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-orange-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
