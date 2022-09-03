import { ROLES, User } from "./app/users/user.model"
import { addProduct, findProducts, products, updateProduct } from './app/products/product.service';
import { Product } from './app/products/product.model';
import {faker} from '@faker-js/faker';
// ================== ENUMERABLES ==================//
const demoUser: User = {
  id:1,
  username: 'junior123',
  role: ROLES.ADMIN,
  createdAt: new Date,
  updatedAt:new Date,
}
let userTupla: [string, number, boolean]; // Tuplas (numeros y tipo de parametro coincida)
userTupla = ['Luis', 12, true];
const [username, , istrue] = userTupla;   // Parecido sesestruccturacion

let unknowVar: unknown;     //Fuerza a comprobar antes de usar los metodos de ese tipo
let anyVar: any;            //Ejecuta los metodos sin antes verificar.
//unknowVar.toLowerCase();
// anyVar.toLowerCase();
let vNever: never;          //Los que tienen este tipo nunca finalizan o se presentan en un excepcion


//  ========================== Nullish Coalescing Operator (??)  ==========================
//  (||) toma como valores falsos a 0, NaN, ("", '', ``), false,  null y undefined,
//  (??) toma como valores falso solamente a null y undefined.

export const createProduct = (data: Product) => {
  return {
    title: data.title,
    price: data.price,
    stock: data.stock ?? 10  // stock: stock || 10(no recomentdado)
  }
}

//REST PARAMS
// Recibe el parametro como un array pero se envia uno a uno

const checkRoles = (...roles: string[]) => {
  return roles.includes(demoUser.role) ? true : false;
}
console.log(checkRoles(ROLES.ADMIN))

//Sobrecarga de funciones: el problema
// Array.isarra(obj), recomendado cuando el out y input es distinto.
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) return input.join("");
  else if (typeof input == "string") return input.split("");
}

console.log(parseStr(['j', 'u', 'n', 'i', 'o', 'r']))
console.log(parseStr("Junior"))



// TYPE yo puedo definir(=) tipos primitivos o directos mientras que una interface necesita todo un cuerpo ({}).
// INTERFACES se puede extender, mientras que los type no

for (let index = 0; index <5; index++) {
    addProduct({
      title: faker.commerce.productName(),
      stock: faker.datatype.number(3),
      price: parseInt(faker.commerce.price(),10) ,
      color:faker.commerce.color(),
      image:faker.image.imageUrl(),
      isNew:faker.datatype.boolean(),
      tags:["rando01","rando02"],
      categoryId:faker.datatype.uuid()
    })
}



updateProduct(products[0].id ,{
  title:"Nuevo title"
})


findProducts({
  stock:10,color:'red',createdAt :new Date(),tags:[]
})


// Omit<Product,'id'> | Pick<Product,'id'> Realiza un copia en la cual omite o agregamos DTOS
// Acceder al Type de una variable Product['id']
// Partial<>  => todos los atributos del modelo opcionales
// Required<> => todos los atributos del modelo requeridos
