"use strict";
/**
 * Created by dcl on 2017/10/12 0012.
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.StringValidate = StringValidate;
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
exports.NumberValidate = NumberValidate;
//}
//# sourceMappingURL=009_namespace2.js.map