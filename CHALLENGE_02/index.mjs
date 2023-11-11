import { readFile } from "fs";

function compiler(stringInput) {
  let value = 0;
  return stringInput
    .split("")
    .map((input) => {
      input == "#"
        ? (value = value + 1)
        : input == "@"
        ? (value = value - 1)
        : input == "*"
        ? (value = value * value)
        : value;
      return input == "&" ? value : null;
    })
    .filter((value) => value != null)
    .join("");
}

readFile("CHALLENGE_02/message_02.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(compiler(data));
  }
});
