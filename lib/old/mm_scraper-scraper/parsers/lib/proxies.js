let fs = require('fs');
let config = require('./../config');
let proxyEnabled = config.proxyEnabled;

let proxy_list = fs.readFileSync(config.proxies).toString().split('\n').map(item => {
  let pair = item.split(':');
  return {
    port: pair[1],
    host: pair[0],
  }
});

console.log(`Loaded ${proxy_list.length} proxies...`);

let proxyObj = {
  list: proxy_list,
  random: function() {
    if (proxyEnabled) {
      let len = proxy_list.length;
      let index = Math.floor(Math.random() * len);

      return proxy_list[index];
    }
  },
  getProxy: function() {
    if (proxyEnabled) {
      let proxy = proxyObj.random();
      return `http://${proxy.host}:${proxy.port}`;
    }
  },
}

module.exports = proxyObj;
