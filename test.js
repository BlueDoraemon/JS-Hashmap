import HashMap from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("After 12 inserts:");
console.log("length =", test.length());
console.log("capacity =", test.capacity);
console.log("entries =", test.entries());

test.set('apple', 'green');
test.set('banana', 'gold');
test.set('hat', 'red');

console.log("\nAfter overwriting existing keys:");
console.log("length =", test.length());
console.log("capacity =", test.capacity);
console.log("apple =", test.get('apple'));
console.log("banana =", test.get('banana'));
console.log("hat =", test.get('hat'));

test.set('moon', 'silver');

console.log("\nAfter adding moon:");
console.log("length =", test.length());
console.log("capacity =", test.capacity);
console.log("entries =", test.entries());

console.log("\nOther methods:");
console.log("has('frog') =", test.has('frog'));
console.log("has('sun') =", test.has('sun'));
console.log("get('lion') =", test.get('lion'));
console.log("remove('dog') =", test.remove('dog'));
console.log("remove('sun') =", test.remove('sun'));
console.log("length =", test.length());
console.log("keys =", test.keys());
console.log("values =", test.values());
console.log("entries =", test.entries());

test.clear();
console.log("\nAfter clear:");
console.log("length =", test.length());
console.log("keys =", test.keys());
console.log("values =", test.values());
console.log("entries =", test.entries());
