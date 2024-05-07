const pangram = (text) => new Set(text.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
console.log(pangram("abcdefghijklmnñopqrstuvwxyz"));
