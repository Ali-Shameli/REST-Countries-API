import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryGrid from "../components/CountryGrid";

const Home = () => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <SearchBar />
          <RegionFilter />
        </div>

        <CountryGrid />
      </main>
    </>
  );
};

export default Home;