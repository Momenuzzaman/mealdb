import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { addToDb } from "../dataBase";
import Meal from '../Meal/Meal';
import "./Restaurant.css";
const Restaurant = () => {
    const [meals,setMeal] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(response => response.json())
        .then(data => setMeal(data.meals))
    },[]);

    const addFood = meal => {
        const newCart = [...cart,meal]
        setCart(newCart);
        addToDb(meal.idMeal)
    }

    return (
        <div className='restaurant-container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal 
                    meal = {meal}
                    addFood={addFood}
                    >
                    </Meal>)
                }
            </div>
            <div className='order-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Restaurant;