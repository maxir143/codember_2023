import { readFile } from "fs";

readFile("files_quarantine.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  const parseData = parseDocument(data);

  const real = parseData.filter(([string, checksum]) =>
    validate(string, checksum)
  );

  console.log(real[32]);
});

function validate(string, checksum) {
  const stringArray = string.split("");
  const realChecksum = stringArray
    .filter(
      (character) =>
        stringArray.filter((current) => current === character).length <= 1
    )
    .join("");
  return realChecksum == checksum;
}

function parseDocument(text = "") {
  const lines = text.split("\n");
  return lines
    .map((row) => row.replace("\r", ""))
    .map((line) => line.split("-"));
}
