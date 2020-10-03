const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    var newTeam = [];
        for (i=0; i<members.length; i++) {
            if (typeof members[i] === 'string') {
            var str = members[i];
            newTeam[i] = str.split('').filter(el => el !== ' ').shift().toUpperCase();
            }
        else {
            newTeam[i] = "";
        }
    }
    return newTeam = newTeam.filter(el => el !=="").sort().join('');    
    }
  else return false;
};
