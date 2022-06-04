/**
 * 创建异步函数
 * @param {Boolean} type   - 异步函数类型 true resolve | false reject
 * @param {String} content - 内容
 * @param {Number} delay   - 延时时间 默认 1000ms
 * @returns
 */
function createAsyncFn(type = true, content = "hello", delay = 1000) {
    return new Promise((resolve, reject) => {
        console.log(`new Promise()`);
        setTimeout(() => {
            console.log(`创建了异步函数 ${new Date().toLocaleString()}`);
            if (type) {
                return resolve(content);
            } else {
                return reject(content);
            }
        }, delay);
    });
}

/**
 * 位数不够，在前面补0
 * @private
 * @param {Number} x 原数值
 * @param {Number} n 位数
 * @returns {String | Number} 补好0的值
 * @example addZero(5,2) => "05" addZero(2022,4) => 2022
 */
function addZero(x, n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

/**
 * 获取当前日期时间 带毫秒数
 * @returns {String}
 * @example getNowDateTime() => "2022-06-04 22:19:51.236"
 */
function getNowDateTime() {
    const d = new Date();
    const year = d.getFullYear();
    const month = addZero(d.getMonth() + 1, 2);
    const day = addZero(d.getDate(), 2);

    const hours = addZero(d.getHours(), 2);
    const minutes = addZero(d.getMinutes(), 2);
    const seconds = addZero(d.getSeconds(), 2);
    const ms = addZero(d.getMilliseconds(), 3);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${ms}`;
}
