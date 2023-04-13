import PlanetData from "../../data.json";

const Planets = ({ setCurrentPlanetIndex }) => {
  //
  return (
    <ul className="hidden w-full smTab:flex justify-evenly items-center lap:w-auto lap:justify-end lap:gap-8">
      {PlanetData.map((planet, i) => {
        return (
          <li
            key={i}
            className="text-11 font-bold leading-6 tracking-[1px] uppercase"
            onClick={() => setCurrentPlanetIndex(i)}
          >
            <a href="#">{planet.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Planets;
