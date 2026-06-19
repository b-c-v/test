const fs = require('fs');

const name = process.env.INPUT_NAME || 'World';
const time = new Date().toISOString();

console.log(`Hello, ${name}!`);
console.log(`Current UTC time: ${time}`);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `time=${time}\n`);
}
