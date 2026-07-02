import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryGrid from "../components/CountryGrid";
import { useEffect, useState } from "react";
import { getCountries } from "../services/countries";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const filteredCountries =
  selectedRegion === ""
    ? countries
    : countries.filter(
        (country) => country.region === selectedRegion
      );

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <SearchBar />
          <RegionFilter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>

        <CountryGrid countries={filteredCountries} />
      </main>
    </>
  );
};

export default Home;
