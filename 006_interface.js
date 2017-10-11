/**
 * Created by dcl on 2017/10/11 0011.
 */
var StringValidate = /** @class */ (function () {
    function StringValidate() {
    }
    StringValidate.prototype.checkData = function (n) {
        if (n && typeof n === "string") {
            return true;
        }
        else {
            return false;
        }
    };
    return StringValidate;
}());
var NumberValidate = /** @class */ (function () {
    function NumberValidate() {
    }
    NumberValidate.prototype.checkData = function (n) {
        if (n && typeof n === "number") {
            return true;
        }
        else {
            return false;
        }
    };
    return NumberValidate;
}());
var data = "xx";
var sv = new StringValidate();
var nv = new NumberValidate();
console.log(sv.checkData(data));
console.log(nv.checkData(data));
//# sourceMappingURL=006_interface.js.map