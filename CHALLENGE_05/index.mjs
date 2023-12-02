import { readFile } from "fs";

readFile("database_attacked.txt", "utf8", (err, data) => {
  if (err) return console.error(err);

  const parseData = parseDocument(data)
    .filter(
      ([id, username, email, age, location]) =>
        !validateData(id, username, email, age, location)
    )
    .map(([_, username]) => username.slice(0, 1))
    .join("");
  //youh4v3beenpwnd
  console.log(parseData);
});

function validateData(id, username, email, age, location) {
  console.log(username);
  //id: exists and is alphanumeric
  if (id == "" || id.match(/[A-Za-z0-9]+/g)?.length != 1) return;
  //username: exists and is alphanumeric
  if (username == "" || username.match(/[A-Za-z0-9]+/) == null) return;
  //email: exists and is valid (pattern user@domain.com)
  if (email == "" || email.match(/[A-Za-z0-9]+@+[A-Za-z0-9]+.com/) == null)
    return;
  //age: is optional but if it appears it is a number
  if (age != "" && age.match(/[0-9]+/) == null) return;
  //location: is optional but if it appears it is a text string
  if (location != "" && location.match(/[A-Za-z0-9]+/) == null) return;

  return true;
}

function parseDocument(text = "") {
  const lines = text.split("\n");
  return lines.map((row) => row.replace("\r", "")).map((row) => row.split(","));
}
