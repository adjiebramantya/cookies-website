import { useSelector } from "react-redux";
import MenuList from "../menu/MenuList";
import CartOverview from "./CartOverview";

function CartSection() {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = cart.length;

  return (
    <>
      <div>
        <div className="flex justify-between mx-10 mt-10 md:hidden">
          <h3 className="text-primary font-bold text-xl">Cart</h3>
          <h3 className="text-secondary font-bold text-base">
            {cartTotal} items
          </h3>
        </div>
        <div className="hidden md:flex md:justify-center">
          <h3 className="text-primary font-bold text-3xl">Cart</h3>
        </div>
        {cartTotal !== 0 ? (
          <div className="md:flex">
            <MenuList />
            <CartOverview />
          </div>
        ) : (
          <div className="text-center mt-10 md:mt-16">
            <h3 className="text-2xl text-primary font-bold">Cart is Empty</h3>
            <p className="text-secondary font-medium">
              Discover more, save more: Fill your cart, fuel your happiness!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSection;
