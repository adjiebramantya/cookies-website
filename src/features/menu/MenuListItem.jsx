import styled from "styled-components";
import Button from "../../ui/Button";
import { device } from "../../helpers/device";

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

  @media ${device.md} {
    height: 60px;
    width: 60px;
  }
`;
function MenuListItem() {
  return (
    <MenuItemStyled className="flex items-center w-full md:h-20">
      <Img src="/product/kastengel.jpg" />
      <div>
        <h3 className="text-primary font-bold">Kastengel Cookies</h3>
        <p className="text-secondary font-semibold text-sm">Rp. 20.000</p>
      </div>
      <div className="ms-auto me-3">
        {/* <Button size="small">Add to Cart</Button> */}
        <span className="font-bold text-primary mx-2 md:text-lg md:mx-4 cursor-pointer">
          -
        </span>
        <span className="bg-secondary text-white py-1 px-2 md:py-3 md:px-4 rounded-md">
          2
        </span>
        <span className="font-bold text-primary ms-2 md:text-lg md:ms-4 cursor-pointer">
          +
        </span>
      </div>
    </MenuItemStyled>
  );
}

export default MenuListItem;
