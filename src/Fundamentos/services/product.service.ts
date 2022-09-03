import {Product} from "../Model/product.model"

export const products: Product[]=[];

export const addProducto=(data:Product)=>(products.push(data));

export const calcTotalPrecio=(data:Product[]):number=>{
  let total:number=0;
  data.forEach(element =>  total+= element.price );
  return total;
}
