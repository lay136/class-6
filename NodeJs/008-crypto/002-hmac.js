//hmac哈希消息认证码加密
const crypto = require('crypto');

////第一个时加密的算法，第二个是自定义加密部分
const hmac = crypto.createHmac('sha512','zxcvbnmm')

//添加需要加密的明文
console.log('明文:','123456');
//123456
// hmac.update('123456')

//输出密文
console.log('密文:',hmac.digest('hex'));





