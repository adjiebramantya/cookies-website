import styled from "styled-components";
import Button from "../../ui/Button";

const MenuItemStyled = styled.div`
  position: relative;
  margin: 10px;
  border-radius: 15px;
  background-color: #fff;

  /* box-shadow: 0px 4px 135.9px -72px rgba(138, 39, 10, 0.25); */
  box-shadow: 0px 4px 135.9px -72px rgba(138, 39, 10, 0.25),
    0 6px 20px 0 rgba(138, 39, 10, 0.25);
`;
const Img = styled.img`
  border-radius: 10px;
  margin: 10px;
  height: 43px;
  width: 43px;
`;
function MenuListItem() {
  return (
    <MenuItemStyled className="flex items-center w-full">
      <Img src="/product/kastengel.jpg" />
      <div>
        <h3 className="text-primary font-bold">Kastengel Cookies</h3>
        <p className="text-secondary font-semibold text-sm">Rp. 20.000</p>
      </div>
      <div className="ms-auto me-3">
        {/* <Button size="small">Add to Cart</Button> */}
        <span className="font-bold text-primary mx-2">-</span>
        <span className="bg-secondary text-white py-1 px-2  rounded-md">2</span>
        <span className="font-bold text-primary ms-2">+</span>
      </div>
    </MenuItemStyled>
  );
}

export default MenuListItem;
