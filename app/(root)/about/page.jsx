export const metadata = { title: "درباره ما | تکنو سعدی" };

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 rtl:text-right" dir="rtl">
      <h1 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100">
        درباره تکنو سعدی
      </h1>
      <p className="mb-4 text-slate-700 dark:text-slate-300">
        تکنو سعدی با بیش از ۲۵ سال تجربه در تأمین، مشاوره و تعمیر تجهیزات انتقال
        قدرت صنعتی فعالیت می‌کند. تمرکز ما ارائه راهکارهای اقتصادی با کیفیت
        بالا، تحویل سریع و پشتیبانی تخصصی است.
      </p>
      <p className="mb-4 text-slate-700 dark:text-slate-300">
        تیم مهندسی ما در انتخاب گیربکس، الکتروموتور، جک اسکرو و ویبراتور مناسب با
        توجه به بار، راندمان و شرایط محیطی همراه شماست.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-2 text-xl font-semibold">چشم‌انداز</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            تبدیل‌شدن به معتبرترین مرجع تأمین قطعات انتقال قدرت در کشور.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
          <h2 className="mb-2 text-xl font-semibold">ارزش‌ها</h2>
          <ul className="list-inside list-disc text-sm text-slate-600 dark:text-slate-300">
            <li>صداقت و شفافیت</li>
            <li>کیفیت پایدار</li>
            <li>پشتیبانی سریع</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
