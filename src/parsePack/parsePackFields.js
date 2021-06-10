import { join, pipe, trim } from "ramda";

const textWrap = (str) => `pack_fields: "pack ${str}"`;

const textRawWrap = (str) => `pack ${str}`;

const sTrim = (aStr) => aStr.map((el) => trim(el)).filter((el) => el);

const parsePackFields = (str) =>
  pipe(sTrim, join(" "), textWrap)(str.match(/.+(?=\=)/gm));

const parseRawPack = (str) =>
  pipe(sTrim, join(" "), textRawWrap)(str.match(/.+(?=\=)/gm));

export { parsePackFields, parseRawPack };
