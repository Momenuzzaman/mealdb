import { useEffect, useState } from "react";
import "./Restaurant.css";
const Restaurant = () => {
    const [meals,setMeal] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(response => response.json())
        .then(data => setMeal(data.meals))
    },[]);

    return (
        <div className='restaurant-container'>
            <div className='meal-container'>
                <h1>this is meals</h1>
            </div>
            <div className='order-container'>
                <h1>this is order</h1>
            </div>
        </div>
    );
};

export default Restaurant;