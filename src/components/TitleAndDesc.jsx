import {LinkSourceIcon} from "../assets"

const TitleAndDesc = () => {
  return (
    <div className="w-full text-center grid gap-4 smMob:gap-6 smTab:col-start-1 smTab:col-end-4 smTab:row-start-2 smTab:row-end-3 smTab:text-left">
      <h1 className="text-40 font-antonio font-normal smMob:text-5xl">MERCURY</h1>
      <div className="grid gap-8">
        <p className="text-white/75 text-xs leading-[22px] font-normal mx-auto max-w-[420px] smMob:text-sm">
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="w-full text-sm leading-6">
          <p className="">
            Source: <span className="inline-flex justify-center items-center">
              Wikipedia<LinkSourceIcon/>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TitleAndDesc