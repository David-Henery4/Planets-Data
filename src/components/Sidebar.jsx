import planetData from "../../data.json";
import { ArrowRight } from "../assets";
import colourSelection from "../reuseableFunctions/colourSelection";

const Sidebar = ({
  setIsSidebarActive,
  isSidebarActive,
  setCurrentPlanetIndex,
}) => {
  //
  return (
    <aside
      className={`absolute w-full h-[calc(100%+54px)] transition-all -top-[54px] left-0 p-6 bg-darkNavy flex flex-col justify-start items-start smMob:-top-[73px] smMob:h-[calc(100%+73px)] ${
        isSidebarActive ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="w-full">
        {planetData.map((plan, i) => {
          return (
            <li
              key={i}
              className="flex gap-6 justify-start items-center py-5 border-b border-b-white/10 hover:cursor-pointer last:border-none last:pb-0"
              onClick={() => {
                setCurrentPlanetIndex(i)
                setIsSidebarActive(false);
              }}
            >
              <div
                className={`w-5 h-5 rounded-full ${colourSelection(
                  plan?.name
                )}`}
              ></div>
              <a
                href="#"
                className="text-base uppercase font-bold leading-6 tracking-[1.36px]"
              >
                {plan?.name}
              </a>
              <ArrowRight className="ml-auto" />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
