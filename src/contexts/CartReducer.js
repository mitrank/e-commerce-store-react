export const CartReducer = (state, action) => {
    console.log("lets start")
    let index = -1;
    if (action.payload)
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    switch (action.type) {
        case "ADD":
        case "INCQTY":
            console.log("before", index, state.cartItems[index]?.quantity);
            if (index === -1) {
                state.cartItems.push({...action.payload, quantity: 1});
                console.log("mid", index, state.cartItems[index]?.quantity);
            } else {
                state.cartItems[index].quantity++;
            }
            console.log("after", index, state.cartItems[index]?.quantity);
            break;
    
        case "REMOVE":
            if (index > -1) {
                state.cartItems.splice(index, 1);
            }
            break;

        case "DECQTY":
            if (index > -1) {
                state.cartItems[index].quantity--;
            }
            break;
        
        case "CLEAR":
            state.cartItems = [];
            break;
    
        default:
            break;
    }
    console.log("state", state)
    return state;
}