export const metadata = { title: "بازگشت کالا | تکنو سعدی" };

export default function ReturnsPage() {
  return (
    <main className="container mx-auto px-4 py-12 rtl:text-right" dir="rtl">
      <h1 className="mb-4 text-3xl font-bold">سیاست بازگشت کالا</h1>
      <p className="mb-3 text-slate-700 dark:text-slate-300">
        بازگرداندن کالا تا ۷ روز در صورت مغایرت با پیش‌فاکتور یا ایراد فنی
        امکان‌پذیر است (در صورت استفاده نشدن و سالم بودن جعبه).
      </p>
      <ul className="list-inside list-disc text-sm text-slate-700 dark:text-slate-300">
        <li>ارائه فاکتور الزامی است.</li>
        <li>هزینه ارسال برگشتی طبق شرایط بررسی می‌شود.</li>
        <li>برای کالاهای سفارشی شرایط متفاوت است.</li>
      </ul>
    </main>
  );
}
