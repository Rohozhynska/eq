// const aNum = prompt('Enter a');
// const bNum = prompt('Enter b');
// const cNum = prompt('Enter c');
 const aNum =-1;
 const bNum = 2;
 const cNum = 3;
 let descr = bNum * bNum - 4 * aNum * cNum;
 const xSingle = ((-bNum + Math.sqrt(descr)) / (2 * aNum));
 const xFirst = ((-bNum + Math.sqrt(descr)) / (2 * aNum));
 const xSecond = ((-bNum - Math.sqrt(descr)) / (2 * aNum));
 function solvEq(bNum, descr, aNum, xFirst, xSecond, xSingle) {
  if (descr === 0)
  {
   alert(xSingle);
  }
  else if (descr < 0) {
   alert('Equation doesn`t have solution');
  }
  else if (descr >0) {
   return 'x1 = ' + xFirst + 'x2 = ' + xSecond;
  }
 }
solvEq(bNum, descr, aNum, xFirst, xSecond);


