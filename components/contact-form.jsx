"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 700)); // شبیه‌سازی ارسال
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form
        onSubmit={onSubmit}
        className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            required
            placeholder="نام و نام‌خانوادگی"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-orange-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900"
          />
          <input
            name="phone"
            required
            inputMode="tel"
            placeholder="شماره تماس"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-orange-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900"
          />
        </div>
        <input
          name="subject"
          placeholder="موضوع"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-orange-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="متن پیام…"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-orange-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900"
        />
        <button
          className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-60"
          disabled={sent}
        >
          {sent ? "ارسال شد ✅" : "ارسال پیام"}
        </button>
      </form>

      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex h-full min-h-[320px] items-center justify-center bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
          نقشه محل شرکت (Google Maps iframe)
        </div>
      </div>
    </div>
  );
}
