

const Stats = ({stats}) => {
  return (
    <div className="w-full mt-7 flex flex-col justify-center items-center gap-2 smTab:row-start-3 smTab:row-end-4 smTab:col-start-1 smTab:col-end-7 smTab:flex-row smTab:justify-between tab:gap-3 lap:m-0">
      {stats.map(stat => {
        return (
          <div key={stat?.id} className="w-full px-6 py-3 flex justify-between items-center border border-white/25 smTab:flex-col smTab:p-4 smTab:items-start lap:gap-1 lap:pt-5 lap:px-6 lap:pb-7">
            <h3 className="text-8 font-bold uppercase text-white/50 leading-4 tracking-[0.73px] smMob:text-11">
              {stat?.name}
            </h3>
            <p className="text-xl font-normal font-antonio -tracking-[0.75px] smMob:text-2xl lap:text-[40px]">
              {stat?.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Stats