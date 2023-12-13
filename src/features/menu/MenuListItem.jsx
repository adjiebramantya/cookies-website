import styled from "styled-components";
import Button from "../../ui/Button";
import { device } from "../../helpers/device";
import { formatCurrency } from "../../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addQuantity,
  getStockCurrentByID,
  removeQuantity,
} from "../cart/cartSlice";

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
function MenuListItem({ item }) {
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

  function handleRemoveQty() {
    dispatch(removeQuantity(item.id));
  }
  function handleAddQty() {
    dispatch(addQuantity(item.id));
  }

  return (
    <MenuItemStyled className="flex items-center w-full md:h-20">
      <Img src={item.image} />
      <div>
        <h3 className="text-primary font-bold">{item.name}</h3>
        <p className="text-secondary font-semibold text-sm">
          {formatCurrency(item.price)}
        </p>
      </div>
      <div className="ms-auto me-3">
        {checkStock === 0 ? (
          <Button type="primary" onclick={handleAddtoCart}>
            Add to Cart
          </Button>
        ) : (
          <>
            <span
              className="font-bold text-primary mx-2 md:text-lg md:mx-4 cursor-pointer"
              onClick={handleRemoveQty}
            >
              -
            </span>
            <span className="bg-secondary text-white py-1 px-2 md:py-3 md:px-4 rounded-md">
              {checkStock}
            </span>
            <span
              className="font-bold text-primary ms-2 md:text-lg md:ms-4 cursor-pointer"
              onClick={handleAddQty}
            >
              +
            </span>
          </>
        )}
      </div>
    </MenuItemStyled>
  );
}

export default MenuListItem;
