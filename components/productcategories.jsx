import Link from "next/link";

const categories = [
  {
    title: "الکتروموتور",
    href: "/products/electromotor",
    image: "/categories/electromotor.jpeg",
  },
  {
    title: "گیربکس NMRV (حلزونی)",
    href: "/products/gearbox-nmrv",
    image: "/categories/gearbox-nmrv.jpeg",
  },
  {
    title: "گیربکس صنعتی",
    href: "/products/industrial-gearbox",
    image: "/categories/industrial-gearbox.jpeg",
  },
  {
    title: "جک اسکرو",
    href: "/products/screw-jack",
    image: "/categories/screw-jack.jpeg",
  },
  {
    title: "ویبراتور",
    href: "/products/vibrator",
    image: "/categories/vibrator.jpeg",
  },
];

export default function ProductCategories() {
  return (
    <section className="container mx-auto px-4 py-16 rtl:text-right">
      <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-slate-100 text-center">
        دسته‌بندی محصولات
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" dir="rtl">
        {categories.map(({ title, href, image }) => (
          <Link
            key={title}
            href={href}
            className="group block overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg hover:scale-[1.03] dark:bg-slate-800"
          >
            <div className="relative h-48 w-full">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="p-4 text-xl font-semibold text-slate-900 group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-orange-500">
              {title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
