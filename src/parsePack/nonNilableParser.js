import { pipe } from "ramda";

const textWrap = (str) => (str.trim() ? `non_nilable: [${str}]` : "");

const prep = (sFields, sDefault) =>
  sFields
    .split(" ")
    .map((el) => el.trim())
    .filter((el) => el)
    .filter((el) => !sDefault.includes(el))
    .map((el) => `"${el}"`)
    .join(", ");

const nonNilableParser = (sFields, sDefault) =>
  pipe(textWrap)(prep(sFields, sDefault));

export { nonNilableParser };
