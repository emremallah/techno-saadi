"use client";
import Image from "next/image";

const brands = [
  { name: "Siemens", logo: "/brands/siemens.svg" },
  { name: "ABB", logo: "/brands/abb.svg" },
  { name: "SEW", logo: "/brands/sew.svg" },
  { name: "Bonfiglioli", logo: "/brands/bonfiglioli.svg" },
  { name: "Weg", logo: "/brands/weg.svg" },
  { name: "Yilmaz", logo: "/brands/yilmaz.svg" },
];

export default function BrandsMarquee() {
  return (
    <section className="bg-slate-50 py-10 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-800 dark:text-slate-100">
          برندهای مورد اعتماد
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_25s_linear_infinite] gap-10 opacity-80 hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((b, i) => (
              <div key={`${b.name}-${i}`} className="shrink-0">
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={120}
                  height={48}
                  className="h-10 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
