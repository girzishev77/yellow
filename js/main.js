function func(x) {
  return x;
}
console.log(func(4));

console.log(Math.pow(4, 2));

console.log(Math.max(1, 8, 9, 15));

let a = 5;
let result = a > 1 ? "yes" : "no";
console.log(result);

function money() {
  const age = 23;
  if (age > 10) {
    console.log("Константа не меньше десяти");
  } else {
    console.log("Константа меньше десяти");
  }
}
money();

/*function apple() {
  alert("Привет , мир");
}
apple();*/

function java() {
  console.log("javascript");
}
java();

function text() {
  let text = "lorem";
  if (text === "lorem") {
    console.log("У вас ошибка в тексте");
  } else {
    console.log("lorem");
  }
}
text();
