import Button from "../../ui/Button";

function CartOverview() {
  return (
    <>
      <div className="fixed bottom-0 py-5 px-10 bg-white flex justify-between w-full">
        <div>
          <h3 className="text-primary font-bold text-lg">Total</h3>
          <h3 className="text-secondary font-bold text-sm">Rp. 20.000</h3>
        </div>
        <Button size="small" type="primary-normal">
          Order Via Whatapps
        </Button>
      </div>
    </>
  );
}

export default CartOverview;
