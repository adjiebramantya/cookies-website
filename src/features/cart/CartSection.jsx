import MenuList from "../menu/MenuList";
import CartOverview from "./CartOverview";

function CartSection() {
  return (
    <>
      <div>
        <div className="flex justify-between mx-10 mt-10 md:hidden">
          <h3 className="text-primary font-bold text-xl">Cart</h3>
          <h3 className="text-secondary font-bold text-base">3 items</h3>
        </div>
        <div className="hidden md:flex md:justify-center">
          <h3 className="text-primary font-bold text-3xl">Cart</h3>
        </div>
        <div className="md:flex">
          <MenuList />
          <CartOverview />
        </div>
      </div>
    </>
  );
}

export default CartSection;
