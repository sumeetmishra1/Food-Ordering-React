import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 12,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 14,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 19,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 23,
    },
  ];
  const AvailableMeals=()=>{
    const mealItem=DUMMY_MEALS.map(meal=>
    <MealItem key={meal.id} 
    id={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price}/>);
    return(
        <section className={classes.meals}>
          <Card>
            <ul>
                {mealItem}
            </ul>
            </Card>
        </section>
    )
  }
  export default AvailableMeals;