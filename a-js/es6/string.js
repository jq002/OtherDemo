//模板标签

function passthru(literals, ...substitutions) {
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    result += literals[literals.length - 1] + ' from passthru';
    return result;
}

let count = 10,
    price = 0.25,
    msg1 = passthru `${count} items \n cost $${(count*price).toFixed(2)}.`,
    //你想要输出的是实际代码，而不是产生的效果，可以使用内置的String.raw();
    msg2 = String.raw `${count} items \n cost $${(count*price).toFixed(2)}.`;

console.log(msg1);
// 10 items
//  cost $2.50. from passthru

console.log(msg2);
//10 items \n cost $2.50.

function raw(literals, ...substitutions) {
    let result = "";
    // 只根据 substitution 的数目来运行循环
    for (let i = 0; i < substitutions.length; i++) {
        result += literals.raw[i]; // use raw values instead
        result += substitutions[i];
    } // 添加最后一个 literal
    result += literals.raw[literals.length - 1];
    return result;
}
let message = raw `Multiline\nstring`;
console.log(message); // "Multiline\\nstring"
console.log(message.length); // 17