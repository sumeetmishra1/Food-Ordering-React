import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useContext} from 'react';
import CartContext from '../../store/cart-context';
const Cart=(props)=>{
    const cartCtx=useContext(CartContext)
    let totalAmount=0
    const onRemove=(id)=>{
        
        cartCtx.removeItem(id)
    }
    const cartItem= <ul className={classes['cart-items']}>
        {cartCtx.items.map(item=>{
            totalAmount+=item.price*item.quantity
           return  <CartItem 
           key={item.id} 
           id={item.id} 
           name={item.name}
           quantity={item.quantity}
           onRemove={onRemove.bind(null,item.id)}
           price={item.price}/>
           
    })}</ul>
    
    return(
        <Modal closeCart={props.closeCart} >
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.closeCart} >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;