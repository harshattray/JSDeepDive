/**
 * @Author: harsha
 * @Date:   2017-09-28T17:09:02+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2017-09-28T17:14:03+05:30
 */

var expense = {
  type: 'Trivial',
  amount: '8000'
}
/*accessing in es5*/

var type = expense.type;
var amt = expense.amount;

/*ES6*/
const { type, amount } = expense
