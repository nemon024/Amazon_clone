import { formatCurrency } from '../scripts/utils/money.js';

//basic test cost
if (formatCurrency(2095) === "20.95") {
  console.log('currency is correct');
}
else {
  console.log('currency is not correct');

}

//edge test cases

if (formatCurrency(0) === '0.00') {
  console.log('passed');

}
else {
  console.log('failed');

}

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');

}
else {
  console.log('failed');

}

