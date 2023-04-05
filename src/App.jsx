import {
  Navbar,
  MobileOptions,
  PlanetContainer,
  TitleAndDesc,
  Stats,
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

        <section className="w-full px-6 pb-12">
          <PlanetContainer />
          <TitleAndDesc/>
          <Stats/>
        </section>
      </main>
    </div>
  );
}

export default App;
