import { dropLast, filter, join, map, pipe } from "ramda";

const parseString = (v) => {
  const match = v.match(/[\*\/]/gm) ? v.match(/[\*\/]/gm)[0] : "/";
  let arr = v.split(match);
  const symbol = match === "/" ? "1" : "";
  if (arr.length === 1) return null;
  arr = [...arr[0].split("="), arr[1]];
  return `  %{param_name: "${arr[0].trim()}", param_value: ${symbol} ${match} ${arr[2].trim()}},`;
};

const parseText = (str) =>
  pipe(
    filter((el) => el),
    map((el) => parseString(el)),
    filter((el) => el)
  )(str.split("\n"));

const textWrap = (str) =>
  str.trim()
    ? `koef: [
${str}
]`
    : "";

const koefParser = (str) => textWrap(join("\n", parseText(str)));

export { koefParser };
