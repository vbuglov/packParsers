import { parseDefault } from "./parseDefault";
import { parsePackFields, parseRawPack } from "./parsePackFields";
import { intParser } from "./intParser";
import { floatParser } from "./floatParser";
import { koefParser } from "./koefParser";
import { nonNilableParser } from "./nonNilableParser";
import { sPack, sDefault } from "./data";

const parsePack = () => `
${parsePackFields(sPack)},
${parseDefault(sDefault)},
${intParser(sDefault)},
${floatParser(sDefault)},
${nonNilableParser(parseRawPack(sPack), sDefault)},
${koefParser(sPack)}
`;

export { parsePack };
