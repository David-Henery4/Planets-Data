import colourSelection from "../reuseableFunctions/colourSelection";

const Options = ({ setModes, colourBg, modes, name }) => {
  const { setIsGeologyMode, setIsOverviewMode, setIsStructureMode } = setModes;
  const { isGeologyMode, isOverviewMode, isStructureMode } = modes;
  //
  return (
    <div className="hidden w-full text-left smTab:grid smTab:gap-4 smTab:col-start-5 smTab:col-end-7 smTab:self-center lap:self-start">
      <button
        className={`w-full text-xs px-5 py-2 inline-flex justify-start items-center gap-4 border border-white/20 lap:px-7 lap:py-3 ${
          isOverviewMode ? colourSelection(name) : "bg-none"
        }`}
        onClick={() => {
          setIsGeologyMode(false);
          setIsOverviewMode(true);
          setIsStructureMode(false);
        }}
      >
        <span className="text-white/50">01</span>
        OVERVIEW
      </button>
      <button
        className={`w-full text-xs px-5 py-2 gap-4 border border-white/20 inline-flex justify-start items-center lap:px-7 lap:py-3 ${
          isStructureMode ? colourSelection(name) : "bg-none"
        }`}
        onClick={() => {
          setIsGeologyMode(false);
          setIsOverviewMode(false);
          setIsStructureMode(true);
        }}
      >
        <span className="text-white/50">02</span>
        INTERNAL STRUCTURE
      </button>
      <button
        className={`w-full text-xs px-5 py-2 gap-4 border border-white/20 inline-flex justify-start items-center lap:px-7 lap:py-3 ${
          isGeologyMode ? colourSelection(name) : "bg-none"
        }`}
        onClick={() => {
          setIsGeologyMode(true);
          setIsOverviewMode(false);
          setIsStructureMode(false);
        }}
      >
        <span className="text-white/50">03</span>
        SURFACE GEOLOGY
      </button>
    </div>
  );
};

export default Options;
