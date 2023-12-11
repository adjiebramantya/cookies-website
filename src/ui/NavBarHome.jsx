import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBarHome() {
  return (
    <header className="flex col-span-2 gap-1 py-4 ps-2 md:px-7 items-center">
      <Logo />
      <div className="ms-auto">
        <NavLink className="ms-2 md:ms-8" to="/">
          Home
        </NavLink>
        <NavLink className="ms-2 md:ms-8" to="/menu">
          Menu
        </NavLink>
        <NavLink to="/cart" className="relative ms-2 md:ms-8">
          Cart
          <div className="text-center h-[100%] w-[60%] bg-primary rounded-full absolute text-white right-[-40%] top-[-50%] text-sm md:text-2xl md:p-1">
            4
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default NavBarHome;
