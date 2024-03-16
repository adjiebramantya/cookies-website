import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <img
        className="absolute w-10 left-[15%] top-[10%] md:w-auto md:inline md:left-[15%] md:top-[20%]"
        src="/cookies/cookies2.png"
        alt=""
      />
      <img
        className="absolute w-10 right-[2%] top-[35%] md:w-auto md:inline md:right-2%] md:top-[35%]"
        src="/cookies/cookies2.png"
        alt=""
      />
      <img
        className="absolute bottom-[5%] left-[5%] md:w-auto md:inline md:bottom-[15%] md:left-[15%] w-24"
        src="/cookies/cookies3.png"
        alt=""
      />
      <img
        className="absolute w-10 right-[5%] bottom-[5%] md:w-auto md:inline md:right-5%] md:bottom-[5%]"
        src="/cookies/cookies2.png"
        alt=""
      />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
