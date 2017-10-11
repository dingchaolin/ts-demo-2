/**
 * Created by dcl on 2017/10/11 0011.
 */
//数据库 CURD
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 一个类实现一个泛型接口 这个类也必须是泛型的
var MySqlData = /** @class */ (function () {
    function MySqlData() {
    }
    MySqlData.prototype.Add = function (info) {
        return undefined;
    };
    MySqlData.prototype.Delete = function (info) {
        return undefined;
    };
    MySqlData.prototype.Update = function (info) {
        return undefined;
    };
    MySqlData.prototype.Find = function (info, id) {
        return info;
    };
    return MySqlData;
}());
var MongoData = /** @class */ (function () {
    function MongoData() {
    }
    MongoData.prototype.Add = function (info) {
        return undefined;
    };
    MongoData.prototype.Delete = function (info) {
        return undefined;
    };
    MongoData.prototype.Update = function (info) {
        return undefined;
    };
    MongoData.prototype.Find = function (info, id) {
        return info;
    };
    return MongoData;
}());
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());
//调用的时候 需要传入具体的类型
var UserData = /** @class */ (function (_super) {
    __extends(UserData, _super);
    function UserData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserData.prototype.GetUserInfo = function (id) {
        var info = new UserInfo();
        info.name = "zhangsan";
        info.password = "123";
        return this.Find(info, id);
    };
    return UserData;
}(MySqlData));
var ud = new UserData();
var user = ud.GetUserInfo(1);
console.log(user);
//# sourceMappingURL=008_generic.js.map