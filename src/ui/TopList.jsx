import Menu from "../features/menu/Menu";

function TopList() {
  return (
    <section className="relative">
      <img
        className="absolute w-10 right-[5%] top-[25%] md:w-auto md:inline md:right-[15%] md:top-[15%]"
        src="/cookies/cookies3.png"
        alt=""
      />
      <img
        className="absolute bottom-[5%] left-[5%] md:w-auto md:inline md:left-[15%] md:top-[%] w-20"
        src="/cookies/cookies3.png"
        alt=""
      />
      <div className="text-center mt-24">
        <h3 className="text-primary font-bold text-3xl">Top List Of Cookies</h3>
        <p className="text-secondary text-xs">
          cookies almost sold out after open pre order
        </p>
      </div>
      <Menu />
    </section>
  );
}

export default TopList;
