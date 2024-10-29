import { renderCategories } from './src/services/categorias'
import './style.css'
import { openModal } from './src/views/modal';
import{handleSearchProductByName} from './src/services/search';
import { handleGetProductsToStore } from './src/views/store';

handleGetProductsToStore();
renderCategories();

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}
//boton anadir
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', () => {
    openModal();
});


//boton buscar
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});