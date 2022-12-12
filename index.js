let addDays = require("date-fns/addDays");

let result = (days) => {
  let result = addDays(new Date(2020, 7, 22), days);
  return `
    ${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

module.exports = result;
