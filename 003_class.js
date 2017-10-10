/**
 * Created by dcl on 2017/10/10 0010.
 */
var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "Money", {
        get: function () {
            return this._money;
        },
        //私有成员赋值
        set: function (money) {
            this._money = money;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.say = function () {
        console.log("\u6211\u53EB" + this.name + ", \u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86~");
    };
    return Person;
})();
//# sourceMappingURL=003_class.js.map