let buzzfeedModule = require('./../modules/buzzfeed');
let nytimesModule = require('./../modules/nytimes');

let modules = {
  'buzzfeed': buzzfeedModule,
  'nytimes': nytimesModule
}

let getModule = function(resourse) {
  if (!resourse) console.error('No such module: ', resourse);
  return modules[resourse];
};

module.exports = {
  getModule
};
