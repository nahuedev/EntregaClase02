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

findById=  (id)=>{
    const product=  products.filter(product => product.id == id)
    if (product !='') {
        return product;
    }else{
        throw 'No existe el ID'
    }
}

deleteById = (id)=>{
    const findId = this.findById(id)
   if(findId != ''){
    products=products.filter(product => product.id !== id)
    const json_products=JSON.stringify(products)
    fs.writeFileSync('data/products.txt',json_products,'utf-8')     
   }else{
       throw 'No existe el ID'
   }
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
