module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false
  }

  let brackets = '';
  let tempStr = str;
  for (let i = 0; i < str.length / 2; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      brackets = bracketsConfig[j][0] + bracketsConfig[j][1];
      tempStr = tempStr.replace(brackets, '');
    }
  }

  return tempStr.length === 0;
};
