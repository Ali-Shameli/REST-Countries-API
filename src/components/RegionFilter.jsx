const RegionFilter = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <select
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value)}
      className="rounded-md p-4 shadow-md outline-none bg-(--elements)"
    >
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