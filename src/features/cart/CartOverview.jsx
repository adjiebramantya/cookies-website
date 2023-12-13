import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartSectionItem from "./CartSectionItem";
import { formatCurrency } from "../../helpers/helper";
import { emptyCart } from "./cartSlice";

function CartOverview() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce((acc, cookies) => acc + cookies.totalPrice, 0);

  function handleEmptyCart() {
    dispatch(emptyCart());
  }

  const url = `https://wa.me/+6282228607806?text=Hai kak, saya mau pesen :%0A${cart
    .map((item) => "*" + item.quantity + "* x " + item.name + "%0A")
    .join("")}%0ATotal :%0A*${formatCurrency(total)}*`;

  return (
    <>
      <div className="fixed bottom-0 py-5 px-10 bg-white flex justify-between items-center w-full md:hidden">
        <div>
          <h3 className="text-primary font-bold text-lg">Total</h3>
          <h3 className="text-secondary font-bold text-sm">
            {formatCurrency(total)}
          </h3>
        </div>
        <Button
          size="small"
          type="primary-normal"
          link={url}
          onclick={handleEmptyCart}
        >
          Order Via Whatapps
        </Button>
      </div>
      <div className="relative hidden mx-5 p-14 md:inline bg-third h-[500px] w-[35%] rounded-3xl z-10">
        <h4 className="text-primary text-2xl font-bold">Items</h4>
        {cart.map((item, index) => (
          <CartSectionItem item={item} key={index} />
        ))}
        <div className="flex justify-between mt-16 items-center">
          <h4 className="text-primary text-3xl font-bold">Total</h4>
          <div className="text-secondary font-semibold">
            {formatCurrency(total)}
          </div>
        </div>
        <div className="absolute flex justify-center inset-x-0 bottom-5">
          <Button type="primary-normal" link={url} onclick={handleEmptyCart}>
            Order Via Whatapps
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartOverview;
