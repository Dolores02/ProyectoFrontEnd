//LOCALSTORAGE

//Traer productos
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
}


//Guardar productos
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        let productInLocal = handleGetProductLocalStorage();

        const existingIndex = productInLocal.findIndex((productInLocal) =>
            productInLocal.id === productIn.id
        );

        if (existingIndex !== -1) {
            productInLocal[existingIndex] = productIn;
        } else {
            productInLocal.push(productIn);
        }

        localStorage.setItem("products", JSON.stringify(productInLocal));
    }
}