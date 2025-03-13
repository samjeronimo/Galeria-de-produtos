function crearProducto(imgSrc, nombre, precio, descripcion) {
    // Crear el contenedor principal
    const contenedor = document.createElement("div");
    contenedor.classList.add("producto");
    
    // Crear la imagen del producto
    const imagen = document.createElement("img");
    imagen.src = imgSrc;
    imagen.alt = nombre;
    imagen.classList.add("producto-img");
    
    // Crear el nombre del producto
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;
    titulo.classList.add("producto-nombre");
    
    // Crear el precio del producto
    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;
    precioElemento.classList.add("producto-precio");
    
    // Crear la descripción del producto
    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    descripcionElemento.classList.add("producto-descripcion");
    
    // Agregar los elementos al contenedor
    contenedor.appendChild(imagen);
    contenedor.appendChild(titulo);
    contenedor.appendChild(precioElemento);
    contenedor.appendChild(descripcionElemento);
    
    return contenedor;
}

export { crearProducto }