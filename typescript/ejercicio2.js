var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var figura = /** @class */ (function () {
    function figura() {
    }
    figura.prototype.perimetro = function () {
        return 0;
    };
    figura.prototype.area = function () {
        return 0;
    };
    return figura;
}());
var cuadrado = /** @class */ (function (_super) {
    __extends(cuadrado, _super);
    function cuadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    cuadrado.prototype.perimetro = function () {
        return this.lado * 4;
    };
    cuadrado.prototype.area = function () {
        return this.lado * this.lado;
    };
    return cuadrado;
}(figura));
var circulo = /** @class */ (function (_super) {
    __extends(circulo, _super);
    function circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        return _this;
    }
    circulo.prototype.perimetro = function () {
        return this.radio * 2 * Math.PI;
    };
    circulo.prototype.area = function () {
        return this.radio * this.radio * Math.PI;
    };
    return circulo;
}(figura));
var miCuadrado = new cuadrado(2);
console.log("Perimetro del cuadrado: ", miCuadrado.perimetro());
console.log("Area del cuadrado: ", miCuadrado.area());
var miCirculo = new circulo(2);
console.log("Perimetro del circulo: ", miCirculo.perimetro());
console.log("Area del circulo: ", miCirculo.area());
