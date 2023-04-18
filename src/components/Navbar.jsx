import {HamburgerIcon} from "../assets";
import Planets from "./Planets";
import Sidebar from "./Sidebar";

const Navbar = ({
  setCurrentPlanetIndex,
  setIsSidebarActive,
  isSidebarActive,
}) => {
  //
  return (
    <nav className="relative px-6 py-4 smMob:px-10  smTab:py-7 smTab:border-b smTab:border-white/20">
      <div className="flex justify-between items-center smTab:flex-col smTab:gap-10 lap:flex-row lap:max-w-[1440px] lap:mx-auto">
        <h2 className="font-antonio text-28 font-medium -tracking-[1.05px]">
          THE PLANETS
        </h2>
        <HamburgerIcon
          className="smTab:hidden hover:cursor-pointer"
          onClick={() => {
            setIsSidebarActive(!isSidebarActive)
          }}
        />
        <Planets setCurrentPlanetIndex={setCurrentPlanetIndex} />
      </div>
    </nav>
  );
};

export default Navbar