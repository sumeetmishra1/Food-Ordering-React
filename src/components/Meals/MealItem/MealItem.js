import classes from './MealItem.module.css';
import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context'
const MealItem=(props)=>{
    const cartCtx = useContext(CartContext);
    const price=`${props.price.toFixed(2)}`
    const onAddtoCart=(amount)=>{
        cartCtx.addItem({
            id:props.id,
            quantity:+amount,
            price:props.price,
            name:props.name
        })
    }
    return(
       <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div> 
        </div>
        <div>
            <MealItemForm id={props.id} onAddtoCart={onAddtoCart}/>
            </div>
       </li>
        
    )
}
export default MealItem;