import { productosApi } from "../services/api.js";
import { crearProducto } from "../moduls/productos.js";

async function mostrarProductos() {
    
    try{
        let datos = await productosApi();
        console.log(datos);
        todosLosProductos(datos);

    }catch(error){ console.error("Error", error) }

}

//------------------------------------------
function todosLosProductos(datos) {

    let DOM = document.querySelector('#root');

    datos.forEach(element => {
        console.log(element);
        DOM.appendChild(crearProducto(element.image, element.title, element.price, element.description));
    });

}



export { mostrarProductos }