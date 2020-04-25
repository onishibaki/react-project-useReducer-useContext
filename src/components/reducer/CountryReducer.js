const CountryReducer = (state, action) => {
  switch (action.type) {
    case "jpCountry":
      return {
        country: "Japan",
        activeClass: true,
      };
    case "phCountry":
      return {
        country: "Philippines",
        activeClass: false,
      };
    default:
      throw new Error();
  }
};

export default CountryReducer;
