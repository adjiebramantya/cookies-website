export function formatCurrency(price) {
  const idr = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return idr.format(price);
}
