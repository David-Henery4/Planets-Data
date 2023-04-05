import {PlanetMercury} from "../assets"

const PlanetContainer = () => {
  return (
    <div className="w-full h-[304px] grid place-items-center">
      <div className="w-28 h-28">
        <PlanetMercury className="h-full w-full"/>
      </div>
    </div>
  );
}

export default PlanetContainer