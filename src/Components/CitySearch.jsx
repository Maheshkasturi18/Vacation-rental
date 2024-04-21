import React, { useState } from "react";

const citiesData = [
  "Mumbai",
  "Ahemdabad",
  "Hyderabad",
  "Banglore/Bengaluru",
  "Bhopal",
  "Patna",
  "Varanasi",
  "Kolkata",
  "Delhi",
];

export default function CitySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterCities(e.target.value);
  };

  const filterCities = (query) => {
    const lowerCaseQuery = query.toLowerCase(); // Convert query to lowercase

    const filteredCities = citiesData.filter((city) => {
      const lowerCaseCity = city.toLowerCase(); // Convert city name to lowercase
      return lowerCaseCity.indexOf(lowerCaseQuery) !== -1; // Check if city contains query
    });

    setSearchResults(filteredCities);
  };

  return (
    <section className="">
      <div className="container py-5">
        <div>
          <input
            type="text"
            placeholder="Search for a city"
            value={searchTerm}
            onChange={handleChange}
          />
          <ul>
            {searchResults.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
