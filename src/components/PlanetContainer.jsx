import {PlanetMercury} from "../assets"

const PlanetContainer = () => {
  return (
    <div className="w-full h-[304px] grid place-items-center smTab:h-[460px] smTab:col-start-1 smTab:col-end-7 lap:col-end-5 lap:row-start-1 lap:row-end-3 lap:h-[666px]">
      <div className="w-28 h-28 smTab:w-[184px] smTab:h-[184px] lap:h-[290px] lap:w-[290px]">
        <PlanetMercury className="h-full w-full" />
      </div>
    </div>
  );
}

export default PlanetContainer