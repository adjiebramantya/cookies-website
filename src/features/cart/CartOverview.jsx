import Button from "../../ui/Button";
import CartSectionItem from "./CartSectionItem";

function CartOverview() {
  return (
    <>
      <div className="fixed bottom-0 py-5 px-10 bg-white flex justify-between items-center w-full md:hidden">
        <div>
          <h3 className="text-primary font-bold text-lg">Total</h3>
          <h3 className="text-secondary font-bold text-sm">Rp. 20.000</h3>
        </div>
        <Button size="small" type="primary-normal">
          Order Via Whatapps
        </Button>
      </div>
      <div className="relative hidden mx-5 p-14 md:inline bg-third h-[500px] w-[35%] rounded-3xl z-10">
        <h4 className="text-primary text-2xl font-bold">Items</h4>
        <CartSectionItem />
        <CartSectionItem />
        <CartSectionItem />
        <div className="flex justify-between mt-16 items-center">
          <h4 className="text-primary text-3xl font-bold">Total</h4>
          <div className="text-secondary font-semibold">Rp. 60.000</div>
        </div>
        <div className="absolute flex justify-center inset-x-0 bottom-5">
          <Button type="primary-normal">Order Via Whatapps</Button>
        </div>
      </div>
    </>
  );
}

export default CartOverview;
