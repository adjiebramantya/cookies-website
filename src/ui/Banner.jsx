import styled from "styled-components";
import Button from "./Button";
import NavBarHome from "./NavBarHome";

const ImageHome = styled.div`
  border-radius: 55px 0px 0px 0px;
  background: url("/homeProduct.jpg"),
    lightgray -28.891px -58.161px / 216.4% 132.042% no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: 0px;
  top: 0px;
`;

function Banner() {
  return (
    <div className="relative md:h-screen">
      <img
        className="absolute hidden md:inline top-[25%] right-[35%]"
        src="/cookies/cookies1.png"
        alt=""
      />
      <img
        className="absolute w-10 left-[15%] bottom-[-25%] md:w-auto md:inline md:left-[15%] md:bottom-[0%]"
        src="/cookies/cookies2.png"
        alt=""
      />
      <div className="grid grid-cols-3">
        <NavBarHome />
        <ImageHome className="h-[286px] w-[100px] md:w-[605px] md:h-screen" />
      </div>
      <div className="w-52 md:w-[45%] mx-5 md:mx-32">
        <h3 className="text-primary mt-8 font-medium md:text-4xl md:mt-28">
          Indulge in Every Crumb Where Sweetness Meets Perfection!
        </h3>
        <p className="text-secondary text-xs mt-4 md:text-2xl md:mt-24">
          At Bening Cookies, we craft irresistible moments with every batch of
          our delectable cookies.
          <span className="hidden md:inline">
            Handcrafted using the finest ingredients, our cookies are a symphony
            of flavors and textures, designed to satisfy every craving.
          </span>
        </p>
        <div className="mt-4">
          <Button type="primary">Buy Now</Button>
          <Button type="secondary">View Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
