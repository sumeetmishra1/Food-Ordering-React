import classes from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart=(props)=>{
    const cartItem= <ul className={classes['cart-items']}>
        {[{id:'m1', name:'burger',amount:2, price:20}].map(item=>{
           return  <li>{item.name}</li>
    })}</ul>
    return(
        <Modal closeCart={props.closeCart} >
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>320</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closeCart} >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;