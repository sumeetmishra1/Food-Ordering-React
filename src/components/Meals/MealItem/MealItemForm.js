import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import {  useRef } from 'react';

const MealItemForm=(props)=>{
    const amountInputref = useRef();
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount=amountInputref.current.value;
        props.onAddtoCart(enteredAmount);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputref}
            label="Amount" 
            input={{
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