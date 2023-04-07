import {HamburgerIcon} from "../assets";
import Planets from "./Planets";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex justify-between items-center smMob:px-10 smTab:flex-col smTab:gap-10 smTab:py-7 smTab:border-b smTab:border-white/20">
      <h2 className="font-antonio text-28 font-medium -tracking-[1.05px]">
        THE PLANETS
      </h2>
      <HamburgerIcon className="smTab:hidden"/>
      <Planets/>
    </nav>
  );
}

export default Navbar