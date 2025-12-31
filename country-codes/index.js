const updatedData = require("./countriesdata");

let country = {
  getAllCountriesInfo() {
    try {
      return updatedData;
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },
  getCountryInfo(value) {
    try {
      let getdata = updatedData.filter(
        (user) =>
          user.name === value ||
          user.name.toLowerCase() === value ||
          user.short_name === value ||
          user.short_name.toLowerCase() === value ||
          user.dial_code === value ||
          String(user.id) === value ||
          user.id === value
      );
      return getdata[0];
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },
  getCountryNames() {
    try {
      let getdata = updatedData.map(
        ({
          short_name,
          status,
          max_nsn_length,
          flags_icon,
          id,
          dial_code,
          ...finaldata
        }) => finaldata.name
      );

      return getdata;
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },

  getCountryName(value) {
    try {
      let finaldata = updatedData.filter(
        (names) =>
          names.name === value ||
          names.name.toUpperCase() === String(value) ||
          names.name.toLowerCase() === value ||
          names.short_name === value ||
          names.short_name.toUpperCase() === String(value) ||
          names.short_name.toLowerCase() === value ||
          names.dial_code === value ||
          names.id === value
      );
      if (finaldata.length === 0) {
        return "No Country Found";
      } else {
        return finaldata[0].name;
      }
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },
  getCountryShortNames() {
    try {
      let getdata = updatedData.map(
        ({
          name,
          status,
          max_nsn_length,
          flags_icon,
          id,
          dial_code,
          ...finaldata
        }) => finaldata.short_name
      );
      return getdata;
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },
  getCountryShortName(value) {
    try {
      let finaldata = updatedData.filter(
        (names) =>
          names.name === value ||
          names.name.toUpperCase() === String(value) ||
          names.name.toLowerCase() === value ||
          names.short_name === value ||
          names.short_name.toUpperCase() === String(value) ||
          names.short_name.toLowerCase() === value ||
          names.dial_code === value ||
          names.id === value
      );
      if (finaldata.length === 0) {
        return "No Country Found";
      } else {
        return finaldata[0].short_name;
      }
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },
  getCountryDialCodes() {
    try {
      let getdata = updatedData.map(
        ({
          short_name,
          name,
          status,
          max_nsn_length,
          flags_icon,
          id,
          ...finaldata
        }) => finaldata.dial_code
      );
      return getdata;
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },
  getCountryDialCode(value) {
    try {
      let getdata = updatedData.map(
        ({ status, max_nsn_length, flags_icon, ...finaldata }) => finaldata
      );
      let finaldata = getdata.filter(
        (names) =>
          names.name === String(value) ||
          names.name.toLowerCase() === String(value) ||
          names.name.toUpperCase() === String(value) ||
          names.short_name === String(value) ||
          names.short_name.toLowerCase() === String(value) ||
          names.dial_code === String(value) ||
          names.id === value
      );
      if (finaldata.length === 0) {
        return "No Dial Code Found";
      } else {
        return finaldata[0].dial_code;
      }
    } catch (error) {
      return {
        Status: 0,
        Message: "Something went wrong",
      };
    }
  },
};

console.log(country.getCountryDialCode('+91'));
module.exports = country;
