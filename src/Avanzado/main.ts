import { Product } from "./Model/product.model"
// ================== ENUMERABLES ==================//
enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string;
  role: ROLES
}

const nicoUser: User = {
  username: 'junior123',
  role: ROLES.ADMIN
}
let userTupla: [string, number, boolean]; // Tuplas (numeros y tipo de parametro coincida)
userTupla = ['Luis', 12, true];
const [username, , istrue] = userTupla;   // Parecido sesestruccturacion

let unknowVar: unknown;     //Fuerza a comprobar antes de usar los metodos de ese tipo
let anyVar: any;            //Ejecuta los metodos sin antes verificar.
                            //unknowVar.toLowerCase();
anyVar.toLowerCase();
let vNever: never;          //Los que tienen este tipo nunca finalizan o se presentan en un excepcion

//  Nullish Coalescing Operator (??)
//  (||) toma como valores falsos a 0, NaN, strings vacíos ("", '', ``), false, a demás de null y undefined,
//  (??) mientras que nullsh coalescing operator tomo como valores falso solamente a null y undefined.


export const createProduct = (data: Product) => {
  return {
    title: data.title,
    price:data.price,
    stock:data.stock??10  // stock: tock || 10(no recomentdado)
  }
}
