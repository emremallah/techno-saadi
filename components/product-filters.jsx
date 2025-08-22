"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/products";
import { X } from "lucide-react";

export default function ProductFilters() {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const q = params.get("q") || "";
  const cat = params.get("cat") || "";

  function setParam(name, value) {
    const sp = new URLSearchParams(params.toString());
    if (value) sp.set(name, value);
    else sp.delete(name);
    replace(`${pathname}?${sp.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <div className="flex-1">
        <input
          placeholder="جستجو در محصولات…"
          defaultValue={q}
          onChange={(e) => setParam("q", e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-orange-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>

      <div className="flex items-center gap-2">
        <select
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-orange-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-800"
          value={cat}
          onChange={(e) => setParam("cat", e.target.value)}
        >
          <option value="">همه دسته‌ها</option>
          {CATEGORIES.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>

        {(q || cat) && (
          <button
            onClick={() => replace(pathname, { scroll: false })}
            className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-xs transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            title="حذف فیلترها"
          >
            <X size={14} />
            پاک‌کردن
          </button>
        )}
      </div>
    </div>
  );
}
