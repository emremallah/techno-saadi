export const CATEGORIES = [
  { key: "electromotor", label: "الکتروموتور" },
  { key: "gearbox-nmrv", label: "گیربکس NMRV (حلزونی)" },
  { key: "industrial-gearbox", label: "گیربکس صنعتی" },
  { key: "screw-jack", label: "جک اسکرو" },
  { key: "vibrator", label: "ویبراتور" },
];

export const PRODUCTS = [
  {
    id: "em-75",
    title: "الکتروموتور سه‌فاز 7.5kW",
    image: "/products/em-75.jpg",
    category: "electromotor",
    price: 24500000,
    specs: { rpm: 1450, ip: "IP55", class: "F" },
    description:
      "الکتروموتور سه‌فاز با راندمان بالا، مناسب برای خطوط تولید و پمپ‌ها.",
  },
  {
    id: "nmrv-110",
    title: "گیربکس حلزونی NMRV110",
    image: "/products/nmrv-110.jpg",
    category: "gearbox-nmrv",
    price: 18900000,
    specs: { torque: "480Nm", material: "Alu" },
    description:
      "گیربکس حلزونی بدنه آلومینیوم با گشتاور بالا و سرویس آسان.",
  },
  {
    id: "igb-75",
    title: "گیربکس صنعتی 75kW",
    image: "/products/industrial-75.jpg",
    category: "industrial-gearbox",
    price: 92000000,
    specs: { ratio: "1:20", torque: "1200Nm" },
    description:
      "مناسب برای بارهای سنگین، راندمان و دوام عالی در محیط‌های سخت.",
  },
  {
    id: "sj-2t",
    title: "جک اسکرو 2 تنی",
    image: "/products/screw-jack-2t.jpg",
    category: "screw-jack",
    price: 16500000,
    specs: { lift: "300mm", screw: "square" },
    description:
      "جک اسکرو دقیق برای کاربردهای لیفتینگ و تنظیم ارتفاع.",
  },
  {
    id: "vb-0-75",
    title: "ویبراتور بدنه 0.75kW",
    image: "/products/vibrator-075.jpg",
    category: "vibrator",
    price: 5600000,
    specs: { rpm: 3000, phase: "3φ" },
    description:
      "ویبراتور صنعتی مناسب سیلوها و فیدرها با لرزش یکنواخت.",
  },
];

export function formatPrice(v) {
  return new Intl.NumberFormat("fa-IR").format(v) + " تومان";
}

export function findProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
