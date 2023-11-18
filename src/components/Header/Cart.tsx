import React from 'react';
import Store from "../../store/store.ts";
import {observer} from "mobx-react-lite";

const Cart:React.FC = observer(() => {
    const cart: number = Store.cart.length || 0
    return (
        <div className="header__cart">
            <p>Корзина</p>
            <span>{cart}</span>
        </div>
    );
})

export default Cart;