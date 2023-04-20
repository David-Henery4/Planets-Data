import planetData from "../../data.json";
import { ArrowRight } from "../assets";
import colourSelection from "../reuseableFunctions/colourSelection";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";

const Sidebar = ({
  setIsSidebarActive,
  isSidebarActive,
  setCurrentPlanetIndex,
}) => {
  //
  const isDesktop = useMediaQuery("(min-width:42.18em)");
  //
  useEffect(() => {
    if (isDesktop) setIsSidebarActive(false)
  },[isDesktop])
  //
  return (
    <aside
      className={`absolute z-50 w-full h-[calc(100%+54px)] transition-all -top-[54px] left-0 p-6 bg-darkNavy flex flex-col justify-start items-start smMob:-top-[73px] smMob:h-[calc(100%+73px)] smTab:hidden ${
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
                setCurrentPlanetIndex(i);
                setIsSidebarActive(false);
              }}
            >
              <div
                className={`w-5 h-5 rounded-full ${colourSelection(
                  plan?.name
                )}`}
              ></div>
              <p
                aria-label="link to switch to planets information page"
                className="text-base uppercase font-bold leading-6 tracking-[1.36px]"
              >
                {plan?.name}
              </p>
              <ArrowRight className="ml-auto" />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
