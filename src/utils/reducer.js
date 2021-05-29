let localCarrito = JSON.parse(localStorage.getItem("carrito"));

if(localCarrito === null){
    localCarrito = [];
}

export const initialState = {
    localCarrito:localCarrito,
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEMS: "REMOVE_ITEMS",
}

export const getBasketTotal = (localCarrito) => {
    const result = localCarrito?.reduce((accumulator, item) => item.price + accumulator, 0);
    return result;
}


const reducer = (state,action) =>{
    switch(action.type){
        case "ADD_TO_BASKET":
            localStorage.setItem("carrito",JSON.stringify([...state.localCarrito,action.item]))
            
            return {
                ...state,
                localCarrito: [...state.localCarrito,action.item],
            };
            case "REMOVE_ITEMS":
            const index = state.localCarrito.findIndex((basketItem=> basketItem._id === action.id))
            let newBasket = [...state.localCarrito];
            newBasket.splice(index, 1)
            localStorage.setItem("carrito",JSON.stringify([...newBasket]))
            return {
                ...state,
                localCarrito: newBasket,
            }
            default: return state;
    }
}

export default reducer