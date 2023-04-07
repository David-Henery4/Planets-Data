import PlanetData from "../../data.json";

const Planets = () => {
  return (
    <ul className="hidden w-full smTab:flex justify-evenly items-center">
      {PlanetData.map((planet,i) => {
        return (
          <li key={i} className="text-11 font-bold leading-6 tracking-[1px] uppercase">
            <a href="#">
              {planet.name}
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default Planets