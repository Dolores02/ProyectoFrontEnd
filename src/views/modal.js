
import { productoActivo, setProductoActivo } from "../../main";
import {handleSaveOrModifyElements, handleDeleteProduct} from "../services/products"; 
//abrir el POP UP
export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");



    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categories.value = productoActivo.categories;
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

}
//cerrar el POP UP
export const closeModal = () => {
    const model = document.getElementById("modalPopUP");
    model.style.display = "none";
    setProductoActivo(null);
    resetModal();
}

//reset el POP UP
const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");

    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categories.value = "Seleccione una categoria";
}


//BOTON ACEPTAR
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

//BOTON CANCELAR
const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener('click', () => {
    closeModal();
});

//BOTON ELIMINAR
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', () => {
    buttonDelete();
});


const buttonDelete = () => {
    handleDeleteProduct();
}

