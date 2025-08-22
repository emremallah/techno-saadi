import Link from "next/link";
import { formatPrice } from "@/lib/products";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="relative h-44 w-full">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4 rtl:text-right">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-slate-900 group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-orange-400">
          {product.title}
        </h3>
        {product.price && (
          <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {formatPrice(product.price)}
          </div>
        )}
        <div className="mt-2 line-clamp-2 text-xs text-slate-600 dark:text-slate-300">
          {product.description}
        </div>
      </div>
    </Link>
  );
}
