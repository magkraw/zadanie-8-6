var a = prompt('podaj liczbę');
var b = prompt('podaj liczbę');
var value = (a * a) + (2 * a * b) - (b * b);
console.log('wynik działania to: ' + value);

if (value > 0) {
  console.log('wynik dodatni');
} else if (value < 0) {
  console.log('wynik ujemny');
} else {
  console.log('wynik zerowy');
}
