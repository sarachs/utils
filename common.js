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
