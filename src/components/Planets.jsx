import PlanetData from "../../data.json";
import colourSelection from "../reuseableFunctions/colourSelection";

const Planets = ({ setCurrentPlanetIndex }) => {
  //
  return (
    <ul className="hidden w-full smTab:flex justify-evenly items-center lap:w-auto lap:justify-end lap:gap-8">
      {PlanetData.map((planet, i) => {
        return (
          <li
            key={i}
            className="relative text-11 text-white/75 font-bold leading-6 tracking-[1px] uppercase group hover:text-white"
            onClick={() => setCurrentPlanetIndex(i)}
          >
            <div className={`absolute hidden -bottom-[120%] left-0 w-full h-1 group-hover:block lap:-bottom-0 lap:-top-[150%] ${colourSelection(planet?.name)} `}></div>
            <p aria-label={`link to switch to ${planet?.name}s information page`}>{planet?.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Planets;
