const aNum = prompt('Enter a');
const bNum = prompt('Enter b');
const cNum = prompt('Enter c');

function findingDescr(aNum, bNum, cNum) {
 return bNum * bNum - 4 * aNum * cNum;
}
let descr = findingDescr(aNum, bNum, cNum);

function solvEq(bNum, descr, aNum) {
 if (descr === 0) {
  const xSingle = ((-bNum + Math.sqrt(descr)) / (2 * aNum));
  return xSingle;
 }
 else if (descr < 0) {
  return 'Equation doesn`t have solution';
 }
 else {
  const xFirst = ((-bNum + Math.sqrt(descr)) / (2 * aNum));
  const xSecond = ((-bNum - Math.sqrt(descr)) / (2 * aNum));
  return 'x1 = ' + xFirst + ' x2 = ' + xSecond;
 }
}
let res = solvEq(bNum, descr, aNum);
alert(res);
