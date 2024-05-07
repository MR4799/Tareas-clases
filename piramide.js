const a = 5;
let b = " ";
let d = "*";
let c = a;
for (let x = 0; x < a - 1; x++) {
    if (x === 0) {
console.log(b.repeat(c), d.repeat(1));
    }
let y = b.repeat(c) + d.repeat(x + 2) + d.repeat(x + 1);
console.log(y);
c = c - 1;
}