export function formatCurrency(price) {
  const idr = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return idr.format(price);
}

export const stringToDate = (dateString) => {
  console.log(dateString);
  const [day, month, year] = dateString.split("/");
  return new Date([month, day, year].join("/"));
};
