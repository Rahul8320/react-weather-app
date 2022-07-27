import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoDbApi, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputData) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputData}`,
      GeoDbApi
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name},${city.region},${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Please enter your city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
