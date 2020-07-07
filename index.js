// 1.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log('1. concat = ', arr1.concat(arr2));

// 2.

console.log('2. reverse = ', arr1.reverse());

// 3.

const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);

console.log('3. push = ', arr3);

// 4.

const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);

console.log('4. unshift = ', arr4);

// 5.

const arr5 = ['js', 'css', 'jq'];

console.log('5. shift = ', arr5.shift());

// 6.

console.log('6. pop = ', arr5.pop());

// 7.

const arr7 = [1, 2, 3, 4, 5];

console.log('7. slice = ', arr7.slice(0, 3));

// 8.

console.log('8. slice = ', arr7.slice(-2));

// 9.

const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);

console.log('9. splice = ', arr9);

// 10.

const arr10 = [1, 2, 3, 4, 5];

console.log('10. splice = ', arr10.splice(1, 3));

// 11.

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');

console.log('11. splice = ', arr11);

// 12.

const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(-1, 0, 'c');
arr12.splice(arr12.length, 0, 'e');

console.log('12. splice = ', arr12);

// 13.

const arr13 = [3, 4, 1, 2, 7];

console.log('13. sort = ', arr13.sort());

// 14.

const obj14 = {
  js: 'test',
  jq: 'hello',
  css: 'world',
};

console.log('14. Object.keys = ', Object.keys(obj14));