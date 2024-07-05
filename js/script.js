const uppperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const password = document.getElementById("password");
const passwordLength = document.getElementById("length");
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alp = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbs = ["@", "!", "^", "%", "_", ".", "|", "#", "&", "$", "*", "?"];

// check | pick | return input (sum)

function checkPickedItems(length) {
  let sum = "";
  for (let i = 0; sum.length < length; i++) {
    // randon picks

    const randomPickLetters = Math.floor(Math.random() * 26);
    const randomPickNumbers = Math.floor(Math.random() * 10);
    const randomPickSymbols = Math.floor(Math.random() * 12);
    const randonPick = Math.random();

    // random checks and input sum

    if (randonPick < 1 / 4) {
      sum += uppperCase.checked ? alp[randomPickLetters].toUpperCase() : "";
    } else if (randonPick > 1 / 4 && randonPick < 2 / 4) {
      sum += lowerCase.checked ? alp[randomPickLetters] : "";
    } else if (randonPick > 2 / 4 && randonPick < 3 / 4) {
      sum += numbers.checked ? nums[randomPickNumbers] : "";
    } else if (randonPick > 3 / 4 && randonPick < 1) {
      sum += symbols.checked ? symbs[randomPickSymbols] : "";
    }
  }
  return sum;
}

function generatePassword() {
  const length = passwordLength.value;

  // password value

  if (
    uppperCase.checked ||
    lowerCase.checked ||
    numbers.checked ||
    symbols.checked
  ) {
    password.value = checkPickedItems(length);
  } else {
    password.value = "Select at least one!";
  }
}
// function generatePassword() {
//   const length = passwordLength.value;
//   const selectedCharacterSets = [];

//   if (upperCase.checked) {
//     selectedCharacterSets.push(...alp.map((letter) => letter.toUpperCase()));
//   }
//   if (lowerCase.checked) {
//     selectedCharacterSets.push(...alp);
//   }
//   if (numbers.checked) {
//     selectedCharacterSets.push(...nums.map(String));
//   }
//   if (symbols.checked) {
//     selectedCharacterSets.push(...symbs);
//   }

//   if (selectedCharacterSets.length === 0) {
//     password.value = "Select at least one!";
//     return;
//   }

//   let sum = "";
//   for (let i = 0; sum.length < length; i++) {
//     const randomIndex = Math.floor(Math.random() * selectedCharacterSets.length);
//     sum += selectedCharacterSets[randomIndex];
//   }

//   password.value = sum;
// }
