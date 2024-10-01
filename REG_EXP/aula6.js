const {cpfs, ips} = require('./base');

// regExpCpf = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g
const regExpCpf = /(\d{3}\.){2}\d{3}\-\d{2}/g

// console.log(cpfs.match(regExpCpf))
const regExpIp = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g
console.log(ips.match(regExpIp))

// for (let i = 0; i<=300; i++){
//     const ip = `${i}.${i}.${i}.${i}`;
//     console.log(ip, ip.match(regExpIp))
// }