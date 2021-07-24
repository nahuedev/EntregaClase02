# Entrega-002

##  RUN : 🚗 

Descomentar en el archivo index la funcion a probar.Existe un objeto **hardcodeado** llamado nuevoProducto y las siguientes funciones.

- createNewProduct(nuevoProducto)
- findAll();
- findProduct(1) 
- removeById(1)
- removeAll()

### Comando: 🎛️

```sh
    npm start
```
### Diseño del desafio : 

- Se crea la clase **Contenedor** , la cual extiende del **Modelo Product**.
- **Modelo Product** : Establece el constructor del producto y sus metodos:  

      - save
      - getAll
      - findById
      - deleteById
      - deleteAll
- Se guarda y lee data en el file en 'data/products.txt'
- Se crea un helpers para la generacion automatica del ID, a partir del largo de un array .

Autor: Nahuel Ascona


