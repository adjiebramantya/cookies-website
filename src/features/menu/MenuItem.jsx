import styled from "styled-components";
import Star from "../../ui/Star";
import Button from "../../ui/Button";

const MenuItemStyled = styled.div`
  position: relative;
  border-radius: 0px 15px;
  background-color: #fff;
  padding: 0px 0px 15px 0px;

  /* box-shadow: 0px 4px 135.9px -72px rgba(138, 39, 10, 0.25); */
  box-shadow: 0px 4px 135.9px -72px rgba(138, 39, 10, 0.25),
    0 6px 20px 0 rgba(138, 39, 10, 0.25);
`;

const Img = styled.img`
  border-radius: 0px 15px 0px 15px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 60%);
`;

function MenuItem() {
  return (
    <MenuItemStyled className="m-5 md:m-14">
      <Img className="w-[144px]" src="/product/kastengel.jpg" />

      <div className="relative flex items-center top-[-20px] ms-2">
        <Star />
        <span className="text-primary font-bold text-xs ms-1">4.7</span>
      </div>
      <h2 className="text-primary text-xs font-extrabold mt-[-15px] ms-2">
        Kastengel Cookies
      </h2>
      <div className="flex items-center mt-4 mx-2">
        <Button size="small">Add to Cart</Button>
        <span className="text-primary text-xs font-bold">Rp. 20.000</span>
      </div>
    </MenuItemStyled>
  );
}

export default MenuItem;
