import { PhoneCall, ClipboardList, Package, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "مشاوره رایگان",
    desc: "تماس بگیرید؛ نیازتان را می‌سنجیم و بهترین راهکار را پیشنهاد می‌دهیم.",
  },
  {
    icon: ClipboardList,
    title: "ارائه پیش‌فاکتور",
    desc: "لیست دقیق اقلام، قیمت، زمان تحویل و شرایط گارانتی را ارسال می‌کنیم.",
  },
  {
    icon: Package,
    title: "تأمین و ارسال",
    desc: "از موجودی انبار یا سفارش سریع؛ ارسال به‌موقع به سراسر کشور.",
  },
  {
    icon: CheckCircle2,
    title: "نصب و پشتیبانی",
    desc: "راهنمای نصب و پاسخگویی تخصصی پس از فروش.",
  },
];

export default function Process() {
  return (
    <section className="container mx-auto px-4 py-16 rtl:text-right" dir="rtl">
      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-slate-100 text-center">
        فرآیند همکاری با ما
      </h2>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-orange-400 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="mb-4 flex items-center gap-3">
              <s.icon className="text-orange-500" size={28} />
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                {i + 1}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
