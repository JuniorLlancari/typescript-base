
import { faker } from '@faker-js/faker';
import { CreateProductDto, FindProductDto, UpdateProductDto } from './product.dto';
import {Product} from './product.model';

export const products:Product[]=[];

export const addProduct=(data:CreateProductDto)=>{
  const newProduct={
    ...data,
    id:faker.datatype.uuid(),
    createdAt:faker.date.recent(),
    updatedAt:faker.date.recent(),
    category:{
      id:faker.datatype.uuid(),
      name:faker.commerce.department(),
      createdAt:faker.date.recent(),
      updatedAt:faker.date.recent(),
    }


  }
   products.push(newProduct);
}

export const updateProduct=(id: Product['id'] , changes: UpdateProductDto ):Product =>{
  const index=products.findIndex(item=>item.id===id);
  const prevData=products[index];
  products[index]={
    ...prevData,
    ...changes
  }
  return products[index];
}



export const findProducts = (dt:FindProductDto):Product[] => {

  return products;
}
