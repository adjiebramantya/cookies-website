import { NavLink } from "react-router-dom";
import logo from "/logoBrand.png";
function Logo() {
  return (
    <NavLink to="/" className="md:me-auto inline">
      <img
        className="w-[88px] h-[33px] md:w-[243px] md:h-[90px]"
        src={logo}
      ></img>
    </NavLink>
  );
}

export default Logo;
