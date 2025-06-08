"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur dark:bg-slate-900/80">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 rtl:flex-row">
          <Image
            src="/logo.png"
            alt="لوگو تکنو سعدی"
            width={100}
            height={100}
            className="dark:hidden"
          />
          <Image
            src="/logo.png"
            alt="لوگو تکنو سعدی"
            width={100}
            height={100}
            className="hidden dark:block"
          />
          {/* <span className="hidden text-xl font-bold tracking-tight text-slate-900 rtl:mr-1 dark:text-slate-100 sm:inline">
            تکنو&nbsp;سعدی
          </span> */}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-row-reverse items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative text-xl font-medium text-slate-700 transition hover:text-orange-600 dark:text-slate-200 dark:hover:text-orange-500"
            >
              {label}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 origin-right scale-x-0 bg-orange-500 transition-transform duration-200 group-hover:origin-left group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="#quote"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-orange-600 dark:hover:bg-orange-700"
          >
            درخواست قیمت
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 lg:hidden"
          aria-label="منو"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white px-4 pb-4 dark:border-slate-700 dark:bg-slate-900 lg:hidden"
          >
            <ul className="flex flex-col gap-3 pt-4 rtl:text-right text-center">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-orange-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center">
              <Link
                href="#quote"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                درخواست قیمت
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
