const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const answer = document.querySelector("#answer");
const button = document.querySelector('button');

const multiplynums = () => {
  //answers the equation
  answer.value = (+num1.value * +num2.value).toString();
};

button.addEventListener('click', multiplynums);