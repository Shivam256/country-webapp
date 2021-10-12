import React from "react";
import "./country-preview.styles.css";

import { Grid } from "@mui/material";

const CountryPreview = ({ country ,isSelected}) => {
  return (
    <div className={`country-preview ${isSelected?'country-preview-selected':''}`}>
      <Grid container spacing={0}>
        <Grid item xs={2} className="country-preview-item country-name">
          {country.flag !== null ? <img src={country.flag} alt="" /> : null}
          {country.name}
        </Grid>
        <Grid item xs={1} className="country-preview-item">
          {country.code}
        </Grid>
        <Grid item xs={2} className="country-preview-item">
          {country.capital}
        </Grid>
        <Grid item xs={3} className="country-preview-item">
          {country.population}
        </Grid>
        <Grid item xs={2} className="country-preview-item">
          {country.religion}
        </Grid>
        <Grid item xs={2} className="country-preview-item">
          {country.continent}
        </Grid>
      </Grid>
    </div>
  );
};
export default CountryPreview;
