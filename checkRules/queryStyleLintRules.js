const request = require('request');

const queryWebRules = () => {
  return new Promise((resolve, reject) => {
    request('https://stylelint.io/user-guide/rules/', (error, res, body) => {
      if (error) {
        reject(error);
      }
      const allRules = {};
      body.replace(/<a href="(.*?)\/"><code>\1<\/code><\/a>/gu, (match, id) => {
        allRules[id] = true;
      });
      resolve(Object.keys(allRules));
    });
  });
};
module.exports = queryWebRules;
queryWebRules();
