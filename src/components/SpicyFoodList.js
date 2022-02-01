import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data/index";

function SpicyFoodList() {

  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  // function handleAddFood() {
  //   const newFood = getNewSpicyFood();
  //   // const newFoodArray = [...foods, newFood];
  //   // setFoods(newFoodArray)
  //   setFoods(previousState => [...previousState, newFood])
  // }

  // const foodList = foods.map((food) => (
  //   <li key={food.id}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  const handleAddFood = () => {
    setFoods(previousState => [...previousState, getNewSpicyFood()])
  }


  //   [1, 2, 3].filter((number) => number !== 3);
  // // => [1,2] 

  // const handleLiClick = (id) => {
  //   setFoods(previousState => [...previousState].filter(food => food.id !== id))
  // }

  // const foodList = foods.map(food => (
  //   <li key={food.id} onClick={() => handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ))

  const handleLiClick = (id) => {
    setFoods(previousState => previousState.map(food => {
      if (food.id === id) {
        return { ...food, heatLevel: food.heatLevel + 1 }
      } else {
        return food;
      }
    }))
  }

  const foodsToDisplay = foods.filter(food => {
    if (filterBy == "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })

  const foodList = foodsToDisplay.map(food => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>

    </div>
  );
}

export default SpicyFoodList;
