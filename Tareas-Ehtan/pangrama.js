const pangram = (text) => new Set(text.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
console.log(pangram("abcdefghijklmnñopqrstuvwxyz"));

function cosa(text) {
  const abdc = "abcdefghijklmnñopqrstuvwxyz"
  let a = true
  const texta = text.split("")

  abdc.split("").map(letra => {
    if (!texta.some(letraCad => letra === letraCad)) {
      return a = false
    }
  })
  return a
}

console.log(cosa("abcdefghijklmtuvwxyzm"));