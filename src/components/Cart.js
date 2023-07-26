import React, { Fragment, useContext } from 'react'
import { styled } from 'styled-components';
import { CartContext } from '../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { DownIcon, TrashIcon, UpIcon } from './Icons';

const Cart = () => {
  const navigate = useNavigate();
  const { getItems, clearCart, increaseProduct, decreaseProduct, removeProduct } = useContext(CartContext);

  const renderTotal = () => {
    const cartItems = getItems();
    const total = cartItems.reduce((total, item) => (total + item.price * item.quantity), 0);
    return total;
  }

  const renderCart = () => {
    const cartItems = getItems();
    console.log(cartItems.length)
    if (cartItems.length > 0) {
      return cartItems.map((p) => (
        <Fragment key={p.id}>
          <Link style={{ cursor: "pointer" }}
              to={`/products/${p.id}`}>
            {p.title}
          </Link>
          <CartQty>
            {p.quantity}
            <UpIcon  width={20} onClick={() => increaseProduct({ id: p.id })} />
            <DownIcon width={20} onClick={() => decreaseProduct({ id: p.id })} />
            <TrashIcon width={20} onClick={() => removeProduct({ id: p.id })} />
          </CartQty>
          <CartPrice>
            &#8377;{p.price}
          </CartPrice>
        </Fragment>
      ));
    } else {
      return <div style={{paddingBottom: "0.5rem"}}>The cart is currently empty.</div>
    }
  }

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartButton onClick={() => navigate('/checkout')}>Checkout</CartButton>

      <CartTable>
        <CartHeader>
          <h4>Item</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </CartHeader>

        <CartHeaderLine />

        <CartHeader>
          {renderCart()}
        </CartHeader>

        <CartHeaderLine />
      </CartTable>

      <CartButton onClick={() => clearCart()}>Clear</CartButton>
      <CartTotal>Total: &#8377;{renderTotal()}</CartTotal>
    </CartContainer>
  )
}

export default Cart;

const CartContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const CartTable = styled.div`
    grid-column: 1 / span 3;

    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const CartHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const CartHeaderLine = styled.hr`
    margin-bottom: 20px;
    border: 1px solid gray;
`;

const CartTitle = styled.h2`
  grid-column: 1 / span 2;
  padding: 0rem;
  margin: 0rem
`;

const CartQty = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 0rem;
    display: grid;
    grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const CartPrice = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin: 0rem;
`;

const CartTotal = styled.h2`
    justify-self: end;
`;

const CartButton = styled.button`
    cursor: pointer;
    background-color: lightseagreen;
    color: azure;
    border: 1px solid #103263;
    border-radius: 20px;
    width: 130px;
    height: 40px;
    font-size: 1rem;
    &:hover {
        background-color: #a8dadc;
        color: #103263;
        transition: 350ms ease;
      }
`;