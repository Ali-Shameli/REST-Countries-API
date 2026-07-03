import { useParams } from "react-router-dom";
import { getCountryByName } from "../services/countries";

import Header from "../components/Header";
import { useEffect, useState } from "react";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CountryDetails = () => {

  const {countryName} = useParams()

  const [country, setCountry] = useState(null);

  useEffect(() => {
  async function fetchCountry() {
    const data = await getCountryByName(countryName);
    
    setCountry(data);
  }

  fetchCountry();
}, [countryName]);

  if (!country) return <p>Loading...</p>;

  console.log(country)
  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-12">

        <Link
          to="/"
          className="mb-16 inline-flex items-center gap-2 rounded-md px-8 py-2 shadow-md"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <section className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">

          <img
            src={flags.svg}
            alt={name}
            className="w-full max-w-xl"
          />

          <div className="flex-1">

            <h1 className="mb-8 text-3xl font-extrabold">
              {name}
            </h1>

            <div className="mb-16 grid gap-10 md:grid-cols-2">

              <div className="space-y-3">

                <p>
                  <span className="font-semibold">Native Name:</span>{" "}
                  {nativeName}
                </p>

                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {population.toLocaleString()}
                </p>

                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {region}
                </p>

                <p>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {subregion}
                </p>

                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {capital}
                </p>

              </div>

              <div className="space-y-3">

                <p>
                  <span className="font-semibold">
                    Top Level Domain:
                  </span>{" "}
                  {topLevelDomain.join(", ")}
                </p>

                <p>
                  <span className="font-semibold">
                    Currencies:
                  </span>{" "}
                  {currencies ? currencies.map((currency) => currency.name).join(", ") : "N/A"}
                </p>

                <p>
                  <span className="font-semibold">
                    Languages:
                  </span>{" "}
                  {languages ? languages.map((language) => language.name).join(", ") : "N/A"}
                </p>

              </div>

            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

              <h2 className="font-semibold">
                Border Countries:
              </h2>

              <div className="flex flex-wrap gap-3">

                {borders ? borders.map((border) => (
                  <span
                    key={border}
                    className="rounded-md px-6 py-1 shadow-md"
                  >
                    {border}
                  </span>
                ))
              :"N/A"}

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default CountryDetails;