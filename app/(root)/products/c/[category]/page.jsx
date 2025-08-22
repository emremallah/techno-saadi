import ProductCard from "@/components/product-card";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.key }));
}

export function generateMetadata({ params }) {
  const cat = CATEGORIES.find((c) => c.key === params.category);
  const title = cat ? `${cat.label} | محصولات | تکنو سعدی` : "محصولات";
  return { title };
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const cat = CATEGORIES.find((c) => c.key === category);

  const list = PRODUCTS.filter((p) => p.category === category);

  return (
    <main className="container mx-auto px-4 py-10 rtl:text-right" dir="rtl">
      <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
        {cat ? cat.label : "محصولات"}
      </h1>
      <p className="mb-6 text-sm text-slate-600 dark:text-slate-300">
        نمایش محصولات در دسته‌ی {cat?.label ?? "نامشخص"}.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {list.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-slate-600 dark:border-slate-700 dark:text-slate-300">
            در این دسته فعلاً محصولی ثبت نشده است.
          </div>
        )}
      </div>
    </main>
  );
}
