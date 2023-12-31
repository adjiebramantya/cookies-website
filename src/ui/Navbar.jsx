import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = cart.length;

  return (
    <header className="flex justify-between py-4 px-2 md:px-7 items-center">
      <Logo />
      <div className="me-4">
        <NavLink className="ms-2 md:ms-8" to="/">
          Home
        </NavLink>
        <NavLink className="ms-2 md:ms-8" to="/menu">
          Menu
        </NavLink>
        <NavLink to="/cart" className="relative ms-2 md:ms-8">
          Cart
          {cartTotal !== 0 && (
            <div className="text-center h-[100%] w-[60%] bg-primary rounded-full absolute text-white right-[-40%] top-[-50%] text-sm md:text-2xl md:p-1">
              {cartTotal}
            </div>
          )}
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
