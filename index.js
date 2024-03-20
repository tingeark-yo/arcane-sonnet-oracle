const arcane_sonnet_oracle = require('arcane-sonnet-oracle');
const profund_singing_kit = require('profund-singing-kit');
const react_dom = require('react-dom');
const jest = require('jest');
const webpack_cli = require('webpack-cli');
const supertest = require('supertest');
const validator = require('validator');
const debug = require('debug');
const moment = require('moment');
const dotenv = require('dotenv');
const cors = require('cors');
const ethereumjs_tx = require('ethereumjs-tx');
const mongoose = require('mongoose');
const request = require('request');
const webpack = require('webpack');
const underscore = require('underscore');
const pg = require('pg');

console.log('Logging a message to the console.');

const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('Hello Crypto').digest('hex');
console.log(`SHA-256 Hash: ${hash}`);

const calculateFibonacci = (n) => {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};
console.log('Fibonacci number at position 7:', calculateFibonacci(7));

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});

// Get the gas price from the Ethereum network
web3.eth.getGasPrice().then(gasPrice => {
  console.log('Gas price:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei');
}).catch(err => {
  console.error('Error getting gas price:', err);
});

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

const path = require('path');
const filePath = '/tmp/demo.js';
const parsed = path.parse(filePath);
console.log(parsed);

// Get information about an Ethereum transaction by hash
web3.eth.getTransaction(txHash).then(tx => {
  console.log('Transaction details by hash:', tx);
}).catch(err => {
  console.error('Error getting transaction details by hash:', err);
});

const myURL = new URL('https://example.org/foo?bar=baz');
console.log(`Pathname: ${myURL.pathname}`);

const fs = require('fs');
fs.appendFile('file.txt', 'New content\n', err => {
  if (err) throw err;
  console.log('Content appended to file');
});

for (let i = 0; i < 5; i++) {
    console.log(`Loop iteration: ${i}`);
}