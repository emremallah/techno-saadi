export const metadata = { title: "قوانین و مقررات | تکنو سعدی" };

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-12 rtl:text-right" dir="rtl">
      <h1 className="mb-4 text-3xl font-bold">قوانین و مقررات</h1>
      <ul className="list-inside list-decimal space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li>تمامی قیمت‌ها ممکن است بدون اطلاع قبلی تغییر کنند.</li>
        <li>ارسال سفارش‌ها طبق شرایط اعلام‌شده در پیش‌فاکتور انجام می‌شود.</li>
        <li>مسئولیت نصب و بهره‌برداری صحیح بر عهده مشتری است مگر خلاف آن ذکر شود.</li>
      </ul>
    </main>
  );
}
