import { createContext, useReducer } from "react";
import React from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

const initialState = { cartItems: [] }

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = (payload) => {
        dispatch({ type: "ADD", payload })
    }

    const removeProduct = (payload) => {
        dispatch({ type: "REMOVE", payload })
    }

    const increaseProduct = (payload) => {
        dispatch({ type: "INCQTY", payload })
    }

    const decreaseProduct = (payload) => {
        dispatch({ type: "DECQTY", payload })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR", payload: undefined })
    }

    const getItems = () => {
        return state.cartItems;
    }

    const contextValues = {
        addProduct,
        removeProduct, 
        increaseProduct,
        decreaseProduct,
        clearCart, 
        getItems,
        ...state
    }

    return (
        <CartContext.Provider value={ contextValues }>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;