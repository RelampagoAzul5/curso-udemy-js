const {lookahead} = require('./base');

console.log(lookahead);

// console.log(lookahead.match(/.+[^in]active$/gim));

// Positive lookahead (frases que tem ative)
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookahead (frases que tem inative)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim));
// negative lookahead (frases que NAO tem ative)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));
// negative lookahead (frases que NAO tem inative)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// Positive look behind (Frases que começam com ONLINE)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim));

// Negative look behind (Frases que NAO começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
111.111.111-11
147.285.983-10
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2})\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));