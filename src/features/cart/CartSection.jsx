import { useSelector } from "react-redux";
import CartOverview from "./CartOverview";
import CartItem from "./CartItem";
import CreateUser from "../user/createUser";
import { useState } from "react";
import Button from "../../ui/Button";

function CartSection() {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user);
  const [activeUpdate, setActiceUpdate] = useState(false);
  const cartTotal = cart.length;

  return (
    <>
      <div>
        {user.name !== "" && user.date !== "" && (
          <div className="flex justify-end me-5">
            <Button
              type="primary-normal"
              size="small"
              onclick={() => setActiceUpdate(!activeUpdate)}
            >
              Update Name and Pick-up date
            </Button>
          </div>
        )}
        <div></div>
        <div className="flex justify-between mx-10 mt-10 md:hidden">
          <h3 className="text-primary font-bold text-xl">Cart</h3>
          <h3 className="text-secondary font-bold text-base">
            {cartTotal} items
          </h3>
        </div>
        <div className="hidden md:flex md:justify-center">
          <h3 className="text-primary font-bold text-3xl">Cart</h3>
        </div>
        {(user.name === "" && user.date === "") || activeUpdate ? (
          <CreateUser isOpenHandle={setActiceUpdate} />
        ) : cartTotal !== 0 ? (
          <div className="md:flex md:my-5">
            <div className=" w-full my-5">
              {cart.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </div>
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
