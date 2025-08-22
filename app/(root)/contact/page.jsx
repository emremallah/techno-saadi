import ContactForm from "@/components/contact-form";

export const metadata = { title: "تماس با ما | تکنو سعدی" };

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 rtl:text-right" dir="rtl">
      <h1 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100">
        تماس با ما
      </h1>

      <ContactForm />
    </main>
  );
}
