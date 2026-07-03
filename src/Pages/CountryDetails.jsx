import { useParams } from "react-router-dom";

const CountryDetails = () => {

  const {name} = useParams()
  console.log(name)
  return (
    <h1>Country Details</h1>
  );
};

export default CountryDetails;