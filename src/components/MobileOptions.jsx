import colourSelection from "../reuseableFunctions/colourSelection";

const MobileOptions = ({ setModes, modes, name }) => {
  const { setIsGeologyMode, setIsOverviewMode, setIsStructureMode } = setModes;
  const { isGeologyMode, isOverviewMode, isStructureMode } = modes;
  //
  return (
    <div className="w-full h-full px-6 py-5 border-y border-white/20 text-9 font-bold flex justify-between items-center smMob:px-10 smMob:py-7 smMob:text-11 smTab:hidden">
      <div className="relative">
        <button
          className="h-full tracking-[1.93px]"
          onClick={() => {
            setIsGeologyMode(false);
            setIsOverviewMode(true);
            setIsStructureMode(false);
          }}
        >
          OVERVIEW
        </button>
        {isOverviewMode && (
          <div
            className={`absolute -bottom-2 left-0 w-full h-1 ${colourSelection(
              name
            )}`}
          ></div>
        )}
      </div>
      <div className="relative">
        <button
          className="tracking-[1.93px]"
          onClick={() => {
            setIsGeologyMode(false);
            setIsOverviewMode(false);
            setIsStructureMode(true);
          }}
        >
          STRUCTURE
        </button>
        {isStructureMode && (
          <div
            className={`absolute -bottom-2 left-0 w-full h-1 ${colourSelection(
              name
            )}`}
          ></div>
        )}
      </div>
      <div className="relative">
        <button
          className="tracking-[1.93px]"
          onClick={() => {
            setIsGeologyMode(true);
            setIsOverviewMode(false);
            setIsStructureMode(false);
          }}
        >
          SURFACE
        </button>
        {isGeologyMode && (
          <div
            className={`absolute -bottom-2 left-0 w-full h-1 ${colourSelection(
              name
            )}`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default MobileOptions;
