const moment = require('moment');
const helpers = {};

helpers.timeago = timestamp => {
  return moment(timestamp).startOf('minuto').fromNow();
};

module.exports = helpers;
