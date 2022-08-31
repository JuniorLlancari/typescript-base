import { Product, Size, UserID } from "../Fundamentos/Model/product.model"
import { calcTotalPrecio, products } from "../Fundamentos/services/product.service"

(() => {
  let myProductPrice: number;
  let isEnable: boolean = true;
  let productNombre: string = "Coca Inka Fanta";
  let currentDate: Date = new Date();
  let listaCaracteres: string[] = productNombre.split(" ");
  let mixeds: (string | number | boolean | object)[] = ["Hola", isEnable, 123]

  let myDynamicVar: any;
  const varCasteado01 = (myDynamicVar as string); //Casteando Forma 01 , forsando a que el any sea string
  const varCasteado02 = (<string>myDynamicVar);   //Casteando Forma 02 , forsando a que el any sea string


  function greeting(myText: string | number) {  //UnionTypes, desde la restriccion ts lo reconoce
    if (typeof myText === "string") {
      console.log("UnionTypesString", myText.toLowerCase())
    } else { console.log("UnionTypesNumber", myText.toFixed(1)) }
  }

  let userId: UserID;

  let varUndefinedOrNull: null | undefined | string = null;  //De utilizar null debemos definir el tipo.
  function fnUndefinedOrNull(param: string | null) {
    let outPut: any = param?.toLowerCase() || 'NoBody ok';    // Optional chaining => '?.'
  }                                                        // Si es null or undefined retorna otra opcion



  //Funciones :  arrow function

  const printTotal = (): void => (console.log(`Total : ${calcTotalPrecio(products)}`))

  const addProductosInicial = (): void => {
    const oProduct01: Product = {
      tittle: "Polo",
      price: 50,
      createdAd: new Date(),
      stock: 7
    }
    const oProduct02: Product = {
      tittle: "Pantalo",
      price: 80,
      createdAd: new Date(),
      stock: 5
    }
    products.push(oProduct01);
    products.push(oProduct02);
  }



  // printTotal();
  // console.log(currentDate.getHours());
  // greeting("Hola");
  // fnUndefinedOrNull("Hola")
})()
