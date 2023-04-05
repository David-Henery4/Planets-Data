import {HamburgerIcon} from "../assets";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex justify-between items-center">
      <h2 className="font-antonio text-28 font-medium -tracking-[1.05px]">
        THE PLANETS
      </h2>
      <HamburgerIcon/>
    </nav>
  );
}

export default Navbar