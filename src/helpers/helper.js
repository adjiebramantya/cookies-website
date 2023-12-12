export function formatCurrency(price) {
  const idr = Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return idr.format(price);
}
