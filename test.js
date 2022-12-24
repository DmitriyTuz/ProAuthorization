// function sum(x, y, z) {
//     return x + y + z;
// }
//
// const numbers = [1, 2, 3];
//
// console.log(sum(...numbers));

// function myFunction(v, w, x, y, z) { }
// let args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);

// function sum(v, w, x, y, z) {
//     return v + w + x + y + z;
// }
// let args = [0, 1];
// console.log(sum(-1, ...args, 2, ...[3]));

// let dateFields = [1970, 0, 1];  // 1 Jan 1970
// let d = new Date(...dateFields);
// console.log(d)

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// arr1 = [...arr1, ...arr2];
// console.log(arr1)

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let cloneObj = {...obj1}
console.log(cloneObj)