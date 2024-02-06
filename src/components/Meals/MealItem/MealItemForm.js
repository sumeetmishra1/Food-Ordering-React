import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
const MealItemForm=(props)=>{
    const cartCtx=useContext(CartContext)
    return(
        <form className={classes.form} onSubmit={cartCtx.addItem}>
            <Input label="Amount" input={{
                id:'amount'+props.id,
                type:'number',
                min:'1',
                max:'5',
                defaultValue:'1',
                step:'1'
            }}/>
            <button >+ Add</button>
        </form>
    )
}
export default MealItemForm;