import { dropLast, join, pipe } from "ramda";

const parseString = (str, value) => {
  return `  %{param_name: "${str}", param_value: ${value}},\n`;
};

const parseStrings = (v) => {
  const arr = v.split("=");
  return arr.map((el, idx) => {
    return parseString(el.trim(), arr[arr.length - 1]);
  });
};

const parseText = (str) =>
  str
    .replace(/[\.0-9]+\n/gm, (match) => {
      return `${match.trim()}#$#`;
    })
    .split("#$#")
    .map((el) => {
      return pipe(dropLast(1), join(""))(parseStrings(el));
    });

const textWrap = (str) => `default: [
${str}]`;

const parseDefault = (str) => pipe(parseText, join(""), textWrap)(str);

export { parseDefault };
