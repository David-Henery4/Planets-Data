import { PlanetMercury } from "../assets";

const getImgURL = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

const PlanetContainer = ({ images, modes, name }) => {
  const { planet, internal, geology } = images;
  const { isGeologyMode, isOverviewMode, isStructureMode } = modes;
  //
  return (
    <div className="w-full h-[304px] grid place-items-center smTab:h-[460px] smTab:col-start-1 smTab:col-end-7 lap:col-end-5 lap:row-start-1 lap:row-end-3 lap:h-[666px]">
      <div className="w-28 h-28 smTab:w-[184px] smTab:h-[184px] lap:h-[290px] lap:w-[290px]">
        {(isOverviewMode && (
          <img
            className="h-full w-full"
            src={getImgURL(planet)}
            alt={`Illustration of the planet ${name}`}
          />
        )) ||
          (isGeologyMode &&  (
            <div className="h-full w-full relative">
              <img
                className="h-full w-full"
                src={getImgURL(planet)}
                alt={`Illustration of the planet ${name}`}
              />
              <img className="w-3/5 absolute top-[80%] left-1/2 -translate-x-1/2" src={getImgURL(geology)} alt="" />
            </div>
          ))}
        {isStructureMode && (
          <img
            className="h-full w-full"
            src={getImgURL(internal)}
            alt={`Illustration of inside the planet structure of ${name}`}
          />
        )}
      </div>
    </div>
  );
};

export default PlanetContainer;
