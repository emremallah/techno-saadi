import Link from "next/link";
import { findProductById, formatPrice } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export function generateStaticParams() {
  // اگر SSG می‌خوای، می‌تونی از دیتای واقعی استفاده کنی
  return [];
}

export function generateMetadata({ params }) {
  const p = findProductById(params.id);
  return { title: p ? `${p.title} | تکنو سعدی` : "محصول | تکنو سعدی" };
}

export default function ProductDetailPage({ params }) {
  const product = findProductById(params.id);

  if (!product) {
    return (
      <main className="container mx-auto px-4 py-16 rtl:text-right" dir="rtl">
        <h1 className="mb-4 text-2xl font-bold">محصول پیدا نشد</h1>
        <Link
          href="/products"
          className="text-orange-600 hover:underline dark:text-orange-400"
        >
          بازگشت به محصولات
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 rtl:text-right" dir="rtl">
      <nav className="mb-6 text-sm text-slate-600 dark:text-slate-300">
        <Link href="/products" className="hover:underline">
          محصولات
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900 dark:text-slate-100">
          {product.title}
        </span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
          <img
            src={product.image}
            alt={product.title}
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>

        <div>
          <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">
            {product.title}
          </h1>
          {product.price && (
            <div className="mb-4 text-lg font-semibold">
              {formatPrice(product.price)}
            </div>
          )}
          <p className="mb-6 text-slate-700 dark:text-slate-200">
            {product.description}
          </p>

          {product.specs && (
            <div className="mb-6">
              <h3 className="mb-2 font-semibold">مشخصات:</h3>
              <ul className="list-inside list-disc text-sm text-slate-700 dark:text-slate-300">
                {Object.entries(product.specs).map(([k, v]) => (
                  <li key={k}>
                    <span className="font-medium">{k}:</span> {v}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#quote"
              className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              درخواست پیش‌فاکتور
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
            >
              <ArrowRight size={16} />
              بازگشت به لیست
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
