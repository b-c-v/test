const fs = require('fs');

const anyNameVar = process.env.INPUT_ANY_NAME_VAR || 'World';
const anyTimeVar = new Date().toISOString();

console.log(`Hello, ${anyNameVar}!`);
console.log(`Current UTC time: ${anyTimeVar}`);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `any_time_var=${anyTimeVar}\n`);
}
