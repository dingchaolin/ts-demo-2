/**
 * Created by dcl on 2017/10/9 0009.
 */
function test(name, age) {
    if (age === void 0) { age = 19; }
    return age;
}
//完整的函数声明
var test4 = function (name, age) {
    return "good";
};
//可变参数
var test6 = function (name) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    return params.join("-");
};
function test7(n) {
    if (n && typeof n === "string") {
        console.log("string");
    }
    else {
        console.log("number");
    }
}
test7("ccc");
test7(123);
//# sourceMappingURL=002_function.js.map