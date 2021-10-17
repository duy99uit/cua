var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("running");
var Cua = /** @class */ (function () {
    function Cua(price) {
        this.price = price;
    }
    Cua.prototype.getCuaInfo = function () {
        console.log("\n        price: " + this.price + ";\n        ");
    };
    Cua.prototype.total = function (count) {
        return 0;
    };
    Cua.prototype.getPrice = function () {
        return this.price;
    };
    return Cua;
}());
var _CuaGach = /** @class */ (function (_super) {
    __extends(_CuaGach, _super);
    function _CuaGach(price) {
        return _super.call(this, price) || this;
    }
    _CuaGach.prototype.total = function (count) {
        var a = Math.floor(count / 3);
        var b = count - a * 3;
        return this.getPrice() * (a + b);
    };
    return _CuaGach;
}(Cua));
var _CuaThit = /** @class */ (function (_super) {
    __extends(_CuaThit, _super);
    function _CuaThit(price) {
        return _super.call(this, price) || this;
    }
    _CuaThit.prototype.total = function (count) {
        var a = Math.floor(count / 2);
        var b = count - a * 2;
        return this.getPrice() * (a + b);
    };
    return _CuaThit;
}(Cua));
var cuaGach = new _CuaGach(500);
var cuaThit = new _CuaThit(300);
console.log("Gia tien cua gach:", cuaGach.total(500));
console.log("Gia tien cua thit: ", cuaThit.total(201));
