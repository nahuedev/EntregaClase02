const {Contenedor} = require('./class/Contenedor');

const nuevoProducto = {
    title: 'Test-2',
    price: 100,
    url: 'URL://'
}

createNewProduct= async (newProduct)=>{
    try {
        const product = new Contenedor;
        await product.save(newProduct)
        console.log('Product Created');
    } catch (error) {
            console.log(error);
    }
}

removeAll=async()=>{
    try {
       const products = new Contenedor;
                products.deleteAll();
        const data = findAll()        
        console.log('All Data Deleted');;

    } catch (error) {
        console.log(error);
    }

}

removeById= async(id)=>{
    try {
        const products = new Contenedor;
        await products.deleteById(id);     
        console.log('Product Deleted');
        
    } catch (error) {
        console.log(error);
    }
}

findProduct= async (id)=>{
    try {
        const product = new Contenedor;
        let filtro = await product.findById(id);
        console.log(filtro);
       } catch (error) {
           console.log(error)
       }
}

findAll = async()=>{
    try {
        const products = new Contenedor;
        console.log(await products.getAll());
        
    } catch (error) {
        console.log(error);
    }
}


/* 
***************** TEST ***************** 
*****Descomentar los metodos a probar****

*/


//createNewProduct(nuevoProducto)
//findAll();
//findProduct(1)
//removeById(1)
//removeAll()

