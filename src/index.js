module.exports = function check(str, bracketsConfig) {

  let stack = [];

  if (str.length % 2 !== 0) return false;

  for (let i = 0; i < str.length; i++) {

     bracketsConfig.forEach(brackets => {
        if (str[i] === brackets[0]) {
           stack.push(str[i]);
        } else if (str[i] === brackets[1]) {
           if (stack[stack.length - 1] === brackets[0]) {
              stack.pop();
           }
        }
        if (brackets[0] === brackets[1] && str[i] === brackets[0]) {
           if (stack[stack.length - 2] === str[i] && stack[stack.length - 2] !== undefined) {
              stack.pop();
              stack.pop();
           }
        }
     })

  }

  return !stack.length;

}
