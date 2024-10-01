const {cpfs2} = require('./base');

// ^ começa com
// $ termina com
// [^] negação
// m Multiline

const cpf = `254.224.877-45`;
const regExpCpf = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2.match(regExpCpf))
