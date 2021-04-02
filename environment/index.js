const prod =  require("./environment.prod");
const dev = require("./environment.dev");

const isDev = process.env.NODE_ENV !== 'production' ? true : false;

module.exports = isDev ? dev : prod;