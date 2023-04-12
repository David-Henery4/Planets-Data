import {
  Navbar,
  MobileOptions,
  PlanetContainer,
  TitleAndDesc,
  Stats,
  Options,
} from "./components";

function App() {
  //
  return (
    <div className="App bg-darkNavy text-white font-spartan">
      <main>
        {/* NAV SECTION */}
        <section className="w-full">
          <Navbar />
          <MobileOptions />
        </section>

        <section className="w-full px-6 pb-12 smMob:px-10 smMob:pb-10 smTab:grid smTab:grid-cols-tabGrid lap:max-w-[1110px] lap:mx-auto desk:px-0">
          <PlanetContainer />
          <TitleAndDesc/>
          <Stats/>
          <Options/>
        </section>
      </main>
    </div>
  );
}

export default App;
