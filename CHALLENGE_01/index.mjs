import { readFile } from "fs";

function getWordCount(input) {
  const object = input.split(" ").reduce((accumulator, word) => {
    return { ...accumulator, [word]: (accumulator?.[word] || 0) + 1 };
  }, {});

  const keys = Object.keys(object);

  return keys.map((key) => `${key}${object[key]}`).join("");
}

readFile("CHALLENGE_01/message_01.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(getWordCount(data));
  }
});
