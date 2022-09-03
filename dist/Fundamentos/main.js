"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("../Fundamentos/services/product.service");
(() => {
    let myProductPrice;
    let isEnable = true;
    let productNombre = "Coca Inka Fanta";
    let currentDate = new Date();
    let listaCaracteres = productNombre.split(" ");
    let mixeds = ["Hola", isEnable, 123];
    let myDynamicVar;
    const varCasteado01 = myDynamicVar; //Casteando Forma 01 , forsando a que el any sea string
    const varCasteado02 = myDynamicVar; //Casteando Forma 02 , forsando a que el any sea string
    function greeting(myText) {
        if (typeof myText === "string") {
            console.log("UnionTypesString", myText.toLowerCase());
        }
        else {
            console.log("UnionTypesNumber", myText.toFixed(1));
        }
    }
    let userId;
    let varUndefinedOrNull = null; //De utilizar null debemos definir el tipo.
    function fnUndefinedOrNull(param) {
        let outPut = (param === null || param === void 0 ? void 0 : param.toLowerCase()) || 'NoBody ok'; // Optional chaining => '?.'
    } // Si es null or undefined retorna otra opcion
    //Funciones :  arrow function
    const printTotal = () => (console.log(`Total : ${(0, product_service_1.calcTotalPrecio)(product_service_1.products)}`));
    const addProductosInicial = () => {
        const oProduct01 = {
            tittle: "Polo",
            price: 50,
            createdAd: new Date(),
            stock: 7
        };
        const oProduct02 = {
            tittle: "Pantalo",
            price: 80,
            createdAd: new Date(),
            stock: 5
        };
        product_service_1.products.push(oProduct01);
        product_service_1.products.push(oProduct02);
    };
    // printTotal();
    // console.log(currentDate.getHours());
    // greeting("Hola");
    // fnUndefinedOrNull("Hola")
})();
