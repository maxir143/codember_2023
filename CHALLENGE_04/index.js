import { readFile } from "fs";

readFile("files_quarantine.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
});
