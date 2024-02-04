import classes from './Cart.module.css';
const Cart=(props)=>{
    const cartItem= <ul className={classes['cart-items']}>
        {[{id:'m1', name:'burger',amount:2, price:20}].map(item=>{
            <li>{item.name}</li>
    })}</ul>
    return(
        <div>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>320</span>
            </div>
            <div>
                <button className={classes['button--alt']}></button>
                <button className={classes.button}></button>
            </div>
        </div>
    )
}
export default Cart;