"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrecio = exports.addProducto = exports.products = void 0;
exports.products = [];
var addProducto = function (data) { return (exports.products.push(data)); };
exports.addProducto = addProducto;
var calcTotalPrecio = function (data) {
    var total = 0;
    data.forEach(function (element) { return total += element.price; });
    return total;
};
exports.calcTotalPrecio = calcTotalPrecio;
