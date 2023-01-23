import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Modal.module.css';
import {
    cartModal,
    incrOrderedInCart,
    minusFromCart,
    removeFromCart
} from "../../redux/counterCart";

export const Modal = () => {
    //redux
    const cartItems = useSelector((state) => state.addToCart.items);
    const dispatch = useDispatch();
    //react
    const [itemsInCart, setItemsInCart] = useState(null)
    const [totPrice, setTotPrice] = useState(0)

    // const sum = cartItems.reduce((acc, curr) => acc + (curr.price * curr.ordered), 0);
    const plusToCart = (el) => {
        dispatch(incrOrderedInCart(el))
    }
    const minusCart = (el) => {
        dispatch(minusFromCart(el))
    }

    const removeItem = (e) => {
        dispatch(removeFromCart(e))
    }


    useEffect(() => {
        setTotPrice(cartItems.reduce((acc, curr) => acc + (curr.price * curr.ordered), 0))
        setItemsInCart(cartItems.reduce((acc, curr) => acc + curr.ordered, 0))
    }, [cartItems])

console.log(('rerender all'));

const itemsToBuy = cartItems.map((e) => {

    return <div className={styles.cartItems}>
        <div className={styles.imageBox}>
            <img src={e.image} />
        </div>
        <div className={styles.about}>
            <h2 className={styles.title}>
                {e.title}
            </h2>
            <span className={styles.subtitle}>{e.category}</span>
        </div>
        <div className={styles.counter}>
            <div className={styles.btn}
                onClick={() => { plusToCart(e.id) }}
            >+</div>
            <div className={styles.count}>{e.ordered}</div>
            <div className={styles.btn}
                onClick={() => { minusCart(e.id) }}
            >-</div>
        </div>
        <div className={styles.price}>
            <div className={styles.amount}>${e.price}</div>
            <div className={styles.remove}
                onClick={() => { removeItem(e.id) }}
            ><u>Remove</u></div>
        </div>

    </div>
})

return (
    <>
        <div className={styles.darkBG}
            onClick={() => dispatch(cartModal())} />
        <div className={styles.centered}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h5 className={styles.heading}>Cart</h5>
                </div>
                <button className={styles.closeBtn}
                    onClick={() => dispatch(cartModal())}>
                    Close Btn
                </button>
                <div className={styles.modalContent}>
                    {
                        cartItems.length > 0
                            ? itemsToBuy
                            : 'There is nothing in the cart'
                    }
                    {
                        cartItems.length > 0
                            ? <div className={styles.checkout}>
                                <div className={styles.total}>
                                    <div>
                                        <div className={styles.subtotal}>Sub-Total</div>
                                        <div className={styles.items}>{itemsInCart} items</div>
                                    </div>
                                    <div className={styles.totalAmount}>${totPrice.toFixed(2)}</div>
                                </div>
                                <button className={styles.button}>Checkout</button>
                            </div> : null
                    }

                </div>
            </div>
        </div>
    </>
)
};
