import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useSelector((state) => state.menu.menu);

  return (
    <div className="flex flex-wrap items-center justify-center my-10">
      {menu.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
}

export default Menu;
