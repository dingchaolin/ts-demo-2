/**
 * Created by dcl on 2017/10/12 0012.
 */
var Validate;
(function (Validate) {
    var StringValidate = (function () {
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
    })();
    Validate.StringValidate = StringValidate;
    var NumberValidate = (function () {
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
    })();
    Validate.NumberValidate = NumberValidate;
})(Validate || (Validate = {}));
//# sourceMappingURL=009_namespace.js.map