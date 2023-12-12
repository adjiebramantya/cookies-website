import { useSelector } from "react-redux";
import Menu from "./Menu";
import MenuList from "./MenuList";

function MenuSection() {
  const menu = useSelector((state) => state.menu.menu);
  const menuTotal = menu.length;
  return (
    <>
      <div className="flex justify-between mx-10 mt-10 md:hidden">
        <h3 className="text-primary font-bold text-xl">Menu</h3>
        <h3 className="text-secondary font-bold text-base">
          {menuTotal} items
        </h3>
      </div>
      <div className="hidden md:flex md:justify-center">
        <h3 className="text-primary font-bold text-3xl">Menu</h3>
      </div>
      <div className="md:hidden">
        <MenuList />
      </div>
      <div className="hidden md:inline">
        <Menu />
      </div>
    </>
  );
}

export default MenuSection;
