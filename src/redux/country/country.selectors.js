import {createSelector} from 'reselect';

const selectCountry = state => state.country;

export const selectCurrentCountries = createSelector(
    [selectCountry],
    country => country.currentCountries
)

export const selectSelectedCountry = createSelector(
    [selectCountry],
    country => country.selectedCountry
)