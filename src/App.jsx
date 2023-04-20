import planetData from "../data.json";
import { useEffect, useState } from "react";
import {
  Navbar,
  MobileOptions,
  PlanetContainer,
  TitleAndDesc,
  Stats,
  Options,
  Sidebar
} from "./components";
import {StarsBackground} from "./assets"

function App() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  const [currentPlanet, setCurrentPlanet] = useState(
    planetData[currentPlanetIndex]
  );
  const [isOverviewMode, setIsOverviewMode] = useState(true);
  const [isStructureMode, setIsStructureMode] = useState(false);
  const [isGeologyMode, setIsGeologyMode] = useState(false);
  const [isSidebarActive,setIsSidebarActive] = useState(false)
  //
  useEffect(() => {
    setCurrentPlanet(planetData[currentPlanetIndex]);
  }, [currentPlanetIndex]);
  //
  return (
    <div className="App bg-darkNavy text-white font-spartan">
      <main className="relative overflow-hidden">
        <StarsBackground className="absolute -top-[125px] -left-10 pointer-events-none" />
        {/* NAV SECTION */}
        <div className="w-full">
          <Navbar
            setCurrentPlanetIndex={setCurrentPlanetIndex}
            setIsSidebarActive={setIsSidebarActive}
            isSidebarActive={isSidebarActive}
          />
          <MobileOptions
            {...currentPlanet}
            modes={{
              isGeologyMode,
              isOverviewMode,
              isStructureMode,
            }}
            setModes={{
              setIsGeologyMode,
              setIsOverviewMode,
              setIsStructureMode,
            }}
          />
        </div>
        <div className="relative w-full px-6 pb-12 smMob:px-10 smMob:pb-10 smTab:grid smTab:grid-cols-tabGrid lap:max-w-[1110px] lap:mx-auto lgDesk:px-0">
          <Sidebar
            setIsSidebarActive={setIsSidebarActive}
            isSidebarActive={isSidebarActive}
            setCurrentPlanetIndex={setCurrentPlanetIndex}
          />
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
            {...currentPlanet}
            modes={{
              isGeologyMode,
              isOverviewMode,
              isStructureMode,
            }}
            setModes={{
              setIsGeologyMode,
              setIsOverviewMode,
              setIsStructureMode,
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
