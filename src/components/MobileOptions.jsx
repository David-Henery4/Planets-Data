

const MobileOptions = ({setModes}) => {
  const { setIsGeologyMode, setIsOverviewMode, setIsStructureMode } = setModes;
  // () => {}
  return (
    <div className="w-full h-full px-6 py-5 border-y border-white/20 text-9 font-bold flex justify-between items-center smMob:px-10 smMob:py-7 smMob:text-11 smTab:hidden">
      <button className="h-full tracking-[1.93px]" onClick={() => {
        setIsGeologyMode(false)
        setIsOverviewMode(true)
        setIsStructureMode(false)
      }}>
        OVERVIEW
      </button>
      <button className="tracking-[1.93px]" onClick={() => {
        setIsGeologyMode(false)
        setIsOverviewMode(false)
        setIsStructureMode(true)
      }} >STRUCTURE</button>
      <button className="tracking-[1.93px]" onClick={() => {
        setIsGeologyMode(true)
        setIsOverviewMode(false)
        setIsStructureMode(false)
      }} >SURFACE</button>
    </div>
  );
}

export default MobileOptions