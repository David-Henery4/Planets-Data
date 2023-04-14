import { LinkSourceIcon } from "../assets";

const TitleAndDesc = ({ name, overview, modes, structure, geology }) => {
  const { isGeologyMode, isOverviewMode, isStructureMode } = modes;
  //
  return (
    <div className="w-full text-center grid gap-4 smMob:gap-6 smTab:col-start-1 smTab:col-end-4 smTab:row-start-2 smTab:row-end-3 smTab:text-left lap:col-start-5 lap:col-end-7 lap:row-start-1 lap:row-end-2 lap:self-end lap:mb-10">
      <h1 className="text-40 font-antonio font-normal smMob:text-5xl lap:text-[80px]">
        {name}
      </h1>
      <div className="grid gap-8">
        <p className="text-white/75 text-xs leading-[22px] font-normal mx-auto max-w-[420px] smMob:text-sm smTab:m-0 lap:text-base">
          {isOverviewMode && overview?.content}
          {isStructureMode && structure?.content}
          {isGeologyMode && geology?.content}
        </p>
        <a
          href={overview?.source}
          target="_blank"
          className="w-full text-sm leading-6 cursor-pointer lap:text-base"
        >
          Source:{" "}
          <span className="inline-flex justify-center items-center">
            Wikipedia
            <LinkSourceIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default TitleAndDesc;
