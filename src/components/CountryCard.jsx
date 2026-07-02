const CountryCard = ({ country }) => {
  const {
    name,
    population,
    region,
    capital,
    flags,
  } = country;

  return (
    <article className="overflow-hidden rounded-md shadow-md">
      <img
        src={flags.svg}
        alt={name}
        className="h-44 w-full object-cover"
      />

      <div className="space-y-4 p-6">
        <h2 className="text-lg font-extrabold">
          {name}
        </h2>

        <div className="space-y-1 text-sm">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {population.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">Region:</span>{" "}
            {region}
          </p>

          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {capital}
          </p>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;