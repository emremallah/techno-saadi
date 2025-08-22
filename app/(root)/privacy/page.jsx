export const metadata = { title: "حریم خصوصی | تکنو سعدی" };

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-12 rtl:text-right" dir="rtl">
      <h1 className="mb-4 text-3xl font-bold">سیاست حریم خصوصی</h1>
      <p className="mb-3 text-slate-700 dark:text-slate-300">
        ما اطلاعات شخصی شما را فقط برای ارائه خدمات بهتر جمع‌آوری و استفاده
        می‌کنیم. اطلاعات تماس برای ارتباط و ارائه پیش‌فاکتور استفاده می‌شود.
      </p>
      <ul className="list-inside list-disc text-sm text-slate-700 dark:text-slate-300">
        <li>عدم اشتراک‌گذاری با اشخاص ثالث بدون رضایت صریح شما</li>
        <li>حفظ امنیت داده با استانداردهای صنعتی</li>
        <li>امکان درخواست حذف/ویرایش داده</li>
      </ul>
    </main>
  );
}
