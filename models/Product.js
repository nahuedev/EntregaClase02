const fs = require('fs');
const data = fs.readFileSync('data/products.txt')
const {idGenerate} = require('../helpers/id-generate');

let products = JSON.parse(data)

class Product{
    constructor(id,title,price,url){
        this.id = id;
        this.title= title;
        this.price= price;
        this.url=url;
    }

save=(object)=>{
        const {title,price,url}=object
        const newProduc= new Product;
        newProduc.id=idGenerate(products);
        newProduc.title = title;
        newProduc.price= price;     
        newProduc.url=url;

        products.push(newProduc)
        const json_products=JSON.stringify(products)
         fs.writeFileSync('data/products.txt',json_products,'utf-8')
        return newProduc;
}

findById= async (id)=>{
    const product= await products.filter(product => product.id == id)
    return product;
}

deleteById = (id)=>{
   products=products.filter(product => product.id !== id)
   const json_products=JSON.stringify(products)
   fs.writeFileSync('data/products.txt',json_products,'utf-8')
  }

getAll= ()=>{
    return products;
}

deleteAll = ()=>{
    products=[]
    const json_products=JSON.stringify(products)
    fs.writeFileSync('data/products.txt',json_products,'utf-8')
  }

}

module.exports = {
    Product
};
