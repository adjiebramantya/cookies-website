import styled, { css } from "styled-components";
import Star from "../../ui/Star";
import Button from "../../ui/Button";
import { device } from "../../helpers/device";
import { formatCurrency } from "../../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getStockCurrentByID, removeItem } from "../cart/cartSlice";

const MenuItemStyled = styled.div`
  position: relative;
  background-color: #fff;
  padding: 0px 0px 15px 0px;
  box-shadow: 0px 4px 135.9px -72px rgba(138, 39, 10, 0.25),
    0 6px 20px 0 rgba(138, 39, 10, 0.25);
`;

const Img = styled.img`
  object-fit: cover;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 60%);

  @media ${device.md} {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0 75%);
  }
`;

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const checkStock = useSelector(getStockCurrentByID(item.id));

  function handleAddtoCart() {
    const newItems = {
      cookiesId: item.id,
      name: item.name,
      image: item.image,
      quantity: 1,
      unitPrice: item.price,
    };

    dispatch(addItem(newItems));
  }

  function handleRemove() {
    dispatch(removeItem(item.id));
  }

  return (
    <MenuItemStyled className="m-5 md:m-14 rounded-tr-3xl rounded-bl-3xl md:rounded-tr-lg md:rounded-bl-lg">
      <Img
        className="w-[144px] md:w-[315px] md:h-[328px] rounded-tr-3xl rounded-bl-3xl md:rounded-tr-lg md:rounded-bl-lg"
        src={item.image}
      />

      <div className="relative flex items-center top-[-20px] md:top-[-40px] ms-2 md:ms-5">
        <Star />
        <span className="text-primary font-bold text-xs ms-1 md:text-2xl">
          {item.star}
        </span>
      </div>
      <h2 className="text-primary text-xs font-extrabold mt-[-15px] md:text-2xl ms-4 md:mt-0">
        {item.name}
      </h2>
      <div className="flex items-center mt-4 mx-2 md:mx-0 md:ms-4 md:mb-10">
        {checkStock === 0 ? (
          <Button type="primary" onclick={handleAddtoCart}>
            Add to Cart
          </Button>
        ) : (
          <Button type="primary" onclick={handleRemove}>
            Remove
          </Button>
        )}

        <span className="text-primary text-xs font-bold md:text-xl md:ms-auto md:me-3">
          {formatCurrency(item.price)}
        </span>
      </div>
    </MenuItemStyled>
  );
}

export default MenuItem;
