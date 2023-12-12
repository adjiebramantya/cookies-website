import { useSelector } from "react-redux";
import MenuListItem from "./MenuListItem";

function MenuList() {
  const menu = useSelector((state) => state.menu.menu);

  return (
    <div className="flex flex-wrap items-center justify-center my-5">
      {menu.map((item, index) => (
        <MenuListItem item={item} key={index} />
      ))}
    </div>
  );
}

export default MenuList;
