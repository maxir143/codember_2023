import { readFile } from "fs";

readFile("encryption_policies.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  const parsedData = parseDocument(data);
  const results = parsedData.map(([minmax, letter, string]) =>
    validateKey(minmax, letter, string)
  );
  const answers = results.filter(({ valid }) => !valid);
  console.log(answers[41]);
  console.log(answers[12]);
});

function parseDocument(text = "") {
  const lines = text.split("\n");
  return lines
    .map((line) => line.split(" "))
    .map((row) =>
      row.map((text, index) =>
        index == 0
          ? text.split("-")
          : index == 1
          ? text.slice(0, -1)
          : index == 2
          ? text.slice(0, -1)
          : text
      )
    );
}

function validateKey(minmax = [0, 0], letter = " ", string = "") {
  const regex = new RegExp(`${letter}{${minmax[0]},${minmax[1]}}`);
  const valid = string.match(regex)?.length > 0;
  return {
    valid,
    string,
    regex,
  };
}
