// alt + enter + enter 快速实现
var Student = (function () {
    function Student() {
    }
    //必须实现接口中的所有的属性和方法
    Student.prototype.shopping = function (n) {
        return "yifu";
    };
    Student.prototype.eating = function (n) {
        return "ok";
    };
    return Student;
})();
var func1;
func1 = function (n, a) {
    return false;
};
var func3;
func3 = function (n, a) {
    return false;
};
//对于单个函数的声明
var func2 = function (n, a) {
    return true;
};
var arr1;
arr1 = ["1"];
function JM(n) {
    console.log(n);
}
var jd = {
    name: "dcl",
    age: 10,
    addr: "beijing"
};
JM(jd);
//# sourceMappingURL=005_interface.js.map