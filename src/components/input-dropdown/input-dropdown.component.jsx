import React, { useEffect, useState } from "react";
import "./input-dropdown.styles.css";

//utils
import { getCountryData } from "../../utils/country.utils";

//redux
import { connect } from "react-redux";
import { setSelectedCountry } from "../../redux/country/country.actions";

const InputDropdown = ({ filterVal, setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let filteredData = getCountryData().filter((country) =>
      country.name.toLowerCase().includes(filterVal)
    );
    setCountries(filteredData);
  }, [filterVal]);



  return (
    <div className="input-dropdown">
      {countries.map((country) => (
        <div
          className="dropdown-item"
          onClick={()=>{
            setSelectedCountry(country);
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c7c7c7";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#fff";
          }}
        >
          {" "}
          {country.flag ? <img src={country.flag} alt="" /> : null}
          {country.name}
        </div>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedCountry: (country) => dispatch(setSelectedCountry(country)),
});

export default connect(null, mapDispatchToProps)(InputDropdown);
