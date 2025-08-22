import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-20 text-center rtl:text-right" dir="rtl">
      <h1 className="mb-2 text-4xl font-extrabold text-slate-900 dark:text-slate-100">
        صفحه پیدا نشد :(
      </h1>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        ممکنه آدرس رو اشتباه زده باشی یا صفحه حذف شده باشه.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        بازگشت به خانه
      </Link>
    </main>
  );
}
