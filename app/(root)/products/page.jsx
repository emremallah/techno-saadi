import ProductCard from "@/components/product-card";
import ProductFilters from "@/components/product-filters";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "محصولات | تکنو سعدی",
};

export default function ProductsPage({ searchParams }) {
  const q = (searchParams?.q || "").toLowerCase();
  const cat = searchParams?.cat || "";

  const filtered = PRODUCTS.filter((p) => {
    const byCat = cat ? p.category === cat : true;
    const byQ =
      q
        ? [p.title, p.description, p.id, p.category]
            .join(" ")
            .toLowerCase()
            .includes(q)
        : true;
    return byCat && byQ;
  });

  return (
    <main className="container mx-auto px-4 py-10 rtl:text-right" dir="rtl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
          محصولات
        </h1>
      </div>

      <ProductFilters />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-slate-600 dark:border-slate-700 dark:text-slate-300">
            موردی مطابق جستجو پیدا نشد.
          </div>
        )}
      </div>
    </main>
  );
}
