import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function NavBarHome() {
  return (
    <header className="col-span-2 gap-1 py-4 px-2  md:px-7 items-center">
      <Logo />
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/cart" className="relative">
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
