import { useParams } from "react-router-dom";
import { getCountryByName } from "../services/countries";

import Header from "../components/Header";
import { useEffect, useState } from "react";

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

};

export default CountryDetails;