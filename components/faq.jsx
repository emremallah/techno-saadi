"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "زمان تحویل سفارش‌ها چقدر است؟",
    a: "بسته به موجودی، سفارش‌های آماده بین ۱ تا ۳ روز کاری و سفارش‌های سفارشی ۵ تا ۱۰ روز کاری ارسال می‌شوند.",
  },
  {
    q: "آیا کالاها گارانتی دارند؟",
    a: "بله؛ اصالت و سلامت فنی همه اقلام تضمین می‌شود. برخی برندها دارای گارانتی رسمی هستند.",
  },
  {
    q: "آیا امکان مشاوره فنی قبل از خرید وجود دارد؟",
    a: "بله؛ تیم مهندسی ما به‌صورت تلفنی و آنلاین پاسخگوی سوالات شماست.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="container mx-auto px-4 py-16 rtl:text-right" dir="rtl">
      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100 text-center">
        سوالات متداول
      </h2>
      <div className="mx-auto max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q}>
              <button
                className="flex w-full items-center justify-between px-4 py-4 text-right text-slate-800 dark:text-slate-100"
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="font-medium">{it.q}</span>
                <ChevronDown
                  className={`transition ${isOpen ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              <div
                className={`px-4 pb-4 text-sm text-slate-600 transition-[grid-template-rows] dark:text-slate-300 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {it.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
