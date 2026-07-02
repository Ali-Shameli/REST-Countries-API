import CountryCard from "./CountryCard";

const CountryGrid = ({ countries }) => {
  return (
    <section className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={country.alpha3Code}
          country={country}
        />
      ))}
    </section>
  );
};

export default CountryGrid;