import { formatCurrency } from "../../helpers/helper";

function CartSectionItem({ item }) {
  console.log(item);
  return (
    <div className="flex justify-between my-3">
      <div className="text-secondary font-semibold">
        {item.quantity}x {item.name}
      </div>
      <div className="text-secondary font-semibold">
        {formatCurrency(item.unitPrice)}
      </div>
    </div>
  );
}

export default CartSectionItem;
