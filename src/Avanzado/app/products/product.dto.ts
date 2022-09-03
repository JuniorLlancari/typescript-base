import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product,'id'|'createdAt'|'updatedAt'| 'category'>{
  categoryId:string
}

 export interface CreateProductDtoV2 extends Pick<Product,'id'|'title'>{};


 export interface UpdateProductDto extends Partial<CreateProductDto>{}; //Partial todos  att del modelo opcionales
 export interface UpdateProductDtoV2 extends Required<Product>{};       //Required todos att del modelo requeridos


 //Readonly no permite reasignar pero permite acceder a metodos de mutacion.
 export interface FindProductDtoV0 extends   Readonly<Partial<Product>>{}
 export interface FindProductDto  extends   Readonly<Partial<Omit<Product,'tags'>>>{
   readonly tags: ReadonlyArray<string>
 }

