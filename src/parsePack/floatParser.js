import { dropLast, filter, join, pipe, trim } from "ramda";

const parseString = (v) => {
  const arr = v.split("=").map((el) => el.trim());
  return arr
    .map((el) => {
      if (arr[arr.length - 1].trim() === "0.0") return `"${el.trim()}"`;
      return null;
    })
    .filter((el) => el);
};

const parseText = (str) =>
  str
    .replace(/[\.0-9]+\n/gm, (match) => {
      return `${match.trim()}#$#`;
    })
    .split("#$#")
    .map((el) => {
      return pipe(dropLast(1), join(", "))(parseString(el));
    });

const textWrap = (str) => `float: [${str}]`;

const floatParser = (str) =>
  pipe(
    parseText,
    filter((el) => el),
    join(", "),
    trim,
    textWrap
  )(str);

export { floatParser };
