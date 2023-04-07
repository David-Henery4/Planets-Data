
const Options = () => {
  return (
    <div className="hidden w-full text-left smTab:grid smTab:gap-4 smTab:col-start-5 smTab:col-end-7 smTab:self-center">
      <button className="w-full text-xs px-5 py-2 inline-flex justify-start items-center gap-4 border border-white/20">
        <span className="text-white/50">01</span>
        OVERVIEW
      </button>
      <button className="w-full text-xs px-5 py-2 gap-4 border border-white/20 inline-flex justify-start items-center">
        <span className="text-white/50">02</span>
        INTERNAL STRUCTURE
      </button>
      <button className="w-full text-xs px-5 py-2 gap-4 border border-white/20 inline-flex justify-start items-center">
        <span className="text-white/50">03</span>
        SURFACE GEOLOGY
      </button>
    </div>
  );
}

export default Options