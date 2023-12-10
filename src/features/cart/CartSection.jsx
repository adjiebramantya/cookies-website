import MenuList from "../menu/MenuList";
import CartOverview from "./CartOverview";

function CartSection() {
  return (
    <>
      <div>
        <div className="flex justify-between mx-10 mt-10">
          <h3 className="text-primary font-bold text-xl">Cart</h3>
          <h3 className="text-secondary font-bold text-base">3 items</h3>
        </div>
        <MenuList />
        <CartOverview />
      </div>
    </>
  );
}

export default CartSection;
