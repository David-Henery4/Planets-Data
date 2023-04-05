import {LinkSourceIcon} from "../assets"

const TitleAndDesc = () => {
  return (
    <div className="w-full text-center grid gap-4">
      <h1 className="text-40 font-antonio font-normal">MERCURY</h1>
      <div className="grid gap-8">
        <p className="text-white/75 text-xs leading-[22px] font-normal">
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="w-full text-sm leading-6">
          <p className="flex justify-center items-center">
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