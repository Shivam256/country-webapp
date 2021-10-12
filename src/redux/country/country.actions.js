import CountryActionTypes from "./country.types";

export const setCurrentCountries = (countries) => ({
    type:CountryActionTypes.SET_CURRENT_COUNTRIES,
    payload:countries
})

export const setCountryFilters = (filterObj) => ({
    type:CountryActionTypes.SET_COUNTRY_FILTERS,
    payload:filterObj
})

export const setSelectedCountry = (country) => ({
    type:CountryActionTypes.SET_SELECTED_COUNTRY,
    payload:country
})