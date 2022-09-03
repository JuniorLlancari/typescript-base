"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrecio = exports.addProducto = exports.products = void 0;
exports.products = [];
const addProducto = (data) => (exports.products.push(data));
exports.addProducto = addProducto;
const calcTotalPrecio = (data) => {
    let total = 0;
    data.forEach(element => total += element.price);
    return total;
};
exports.calcTotalPrecio = calcTotalPrecio;
