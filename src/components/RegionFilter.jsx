const RegionFilter = () => {
  return (
    <select className="h-14 w-52 cursor-pointer rounded-md px-6 shadow-md outline-none">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default RegionFilter;