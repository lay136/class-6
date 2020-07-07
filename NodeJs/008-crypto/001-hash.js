//哈希算法加密,也称散列函数
const crypto = require('crypto');

//md5 加密算法->不可逆
// const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha256');
const hash = crypto.createHash('sha512');

//打印需要加密的铭明文
console.log('123456');
// hash.update('123456');

//输出密文
console.log(hash.digest('hex'));











