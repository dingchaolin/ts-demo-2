/**
 * Created by dcl on 2017/10/11 0011.
 */
//模板函数
function test(n) {
    return n;
}
//模板类
var Person = (function () {
    function Person() {
    }
    return Person;
})();
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
})();
var a = new Person();
var Student = (function () {
    function Student() {
    }
    Student.prototype.add = function (n) {
        return true;
    };
    return Student;
})();
//# sourceMappingURL=007_generic.js.map