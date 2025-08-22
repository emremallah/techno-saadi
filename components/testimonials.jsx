"use client";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "شرکت پارس توان",
    role: "مدیر نگهداری",
    text:
      "کیفیت گیربکس‌ها عالی بود؛ تحویل هم دقیقاً طبق زمان اعلامی انجام شد.",
  },
  {
    name: "گروه صنعتی کوشا",
    role: "تأمین‌کننده",
    text:
      "تیم فنی خیلی خوب راهنمایی کرد و بهترین انتخاب رو برای پروژه ما پیشنهاد داد.",
  },
  {
    name: "کارخانه سیمان شرق",
    role: "واحد تدارکات",
    text:
      "قیمت‌ها رقابتی و خدمات پس از فروش پاسخگو. تجربه خرید خیلی خوبی بود.",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16 rtl:text-right" dir="rtl">
      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-slate-100 text-center">
        نظرات مشتریان
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <Quote className="absolute -left-2 -top-2 opacity-10" size={80} />
            <blockquote className="text-slate-700 dark:text-slate-200">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-100">
                {t.name}
              </span>{" "}
              • {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
