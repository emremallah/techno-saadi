import { ShieldCheck, Truck, Clock, Users } from "lucide-react";

const benefits = [
  {
    Icon: ShieldCheck,
    title: "گارانتی اصالت",
    description: "تمام محصولات با تضمین اصالت و کیفیت ارائه می‌شوند.",
  },
  {
    Icon: Truck,
    title: "تحویل سریع سراسری",
    description: "ارسال محصولات به تمام نقاط کشور با بالاترین سرعت.",
  },
  {
    Icon: Clock,
    title: "۲۵ سال تجربه",
    description: "سابقه طولانی در تامین و تعمیر گیربکس و تجهیزات صنعتی.",
  },
  {
    Icon: Users,
    title: "پشتیبانی تخصصی",
    description: "تیم مهندسی پاسخگوی سوالات و مشاوره فنی شما.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-16 rtl:text-right">
      <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-slate-100 text-center">
        چرا تکنو سعدی؟
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" dir="rtl">
        {benefits.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:shadow-lg hover:border-orange-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          >
            <Icon
              size={48}
              className="mb-4 text-orange-500 transition group-hover:text-orange-600"
            />
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
