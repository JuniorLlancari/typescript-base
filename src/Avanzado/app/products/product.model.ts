import { Category } from "../categories/category.models"
import { BaseModel } from "../base.model"

export interface Product extends BaseModel {
  title: string,
  stock?: number,
  image:string,
  color:string,
  isNew:boolean,
  tags:string[],
  price: number
  category:Category
}


