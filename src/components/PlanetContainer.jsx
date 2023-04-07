import {PlanetMercury} from "../assets"

const PlanetContainer = () => {
  return (
    <div className="w-full h-[304px] grid place-items-center smTab:h-[460px] smTab:col-start-1 smTab:col-end-7">
      <div className="w-28 h-28 smTab:w-[184px] smTab:h-[184px]">
        <PlanetMercury className="h-full w-full" />
      </div>
    </div>
  );
}

export default PlanetContainer