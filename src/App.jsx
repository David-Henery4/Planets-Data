import planetData from "../data.json";
import { useEffect, useState } from "react";
import {
  Navbar,
  MobileOptions,
  PlanetContainer,
  TitleAndDesc,
  Stats,
  Options,
} from "./components";

function App() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  const [currentPlanet, setCurrentPlanet] = useState(
    planetData[currentPlanetIndex]
  );
  const [isOverviewMode, setIsOverviewMode] = useState(true);
  const [isStructureMode, setIsStructureMode] = useState(false);
  const [isGeologyMode, setIsGeologyMode] = useState(false);
  //
  useEffect(() => {
    setCurrentPlanet(planetData[currentPlanetIndex]);
  }, [currentPlanetIndex]);
  //
  return (
    <div className="App bg-darkNavy text-white font-spartan">
      <main>
        {/* NAV SECTION */}
        <section className="w-full">
          <Navbar setCurrentPlanetIndex={setCurrentPlanetIndex} />
          <MobileOptions />
        </section>

        <section className="w-full px-6 pb-12 smMob:px-10 smMob:pb-10 smTab:grid smTab:grid-cols-tabGrid lap:max-w-[1110px] lap:mx-auto desk:px-0">
          <PlanetContainer
            {...currentPlanet}
            modes={{
              isGeologyMode,
              isOverviewMode,
              isStructureMode,
            }}
          />
          <TitleAndDesc
            {...currentPlanet}
            modes={{
              isGeologyMode,
              isOverviewMode,
              isStructureMode,
            }}
          />
          <Stats {...currentPlanet} />
          <Options
            setModes={{
              setIsGeologyMode,
              setIsOverviewMode,
              setIsStructureMode,
            }}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
