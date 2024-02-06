import React, { useState } from "react";
import "./index.css";

const recipeData = [
  {
    name: "Sinigang",
    ingredients: "Okra, White rice, Spinach, Taro, Ribs",
    photoName: "recipes/sinigang.jpg",
  },
  {
    name: "Butter Chicken",
    ingredients: "Sauce, chicken, rice, onion",
    photoName: "recipes/butter-chicken.jpg",
  },
  {
    name: "Mexican rice",
    ingredients: "Garlic, Tomatoes, olive oil, salt, chicken broth",
    photoName: "recipes/mexican-rice.jpg",
  },
  {
    name: "Ceviche",
    ingredients: "Tomatoes, onion, crab meat, lemon, jalapeño, pulpo",
    photoName: "recipes/ceviche.jpg",
  },
  {
    name: "Oatmeal",
    ingredients: "Oatmeal, milk, honey",
    photoName: "recipes/oatmeal.jpg",
  },
];

export default function App() {
  const [ingredients, setIngredients] = useState([]);

  function handleToggleItem(e, id) {
    console.log("clicked: " + e.target.checked + " " + id);
    if (e.target.checked) {
      setIngredients((ingredients) => [...ingredients, id]);
    } else {
      setIngredients(ingredients.filter((ingredient) => ingredient !== id));
    }
  }

  return (
    <div className="container">
      <Header />
      <Recipes onToggleItem={handleToggleItem} />
      <ShoppingList ingredients={ingredients} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Meal prep</h1>
    </header>
  );
}

function Recipes({ onToggleItem }) {
  const recipes = recipeData;
  const recipesNum = recipeData.length;
  return (
    <main className="menu">
      <h2>Recipes</h2>
      <ul className="pizzas">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.name}
            recipeObj={recipe}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </main>
  );
}

function Recipe({ recipeObj, onToggleItem }) {
  var strSplitArray = String(recipeObj.ingredients).split(", ");

  return (
    <li className="pizza">
      <img src={recipeObj.photoName} alt={recipeObj.name} />
      <div>
        <h3>{recipeObj.name}</h3>
        {strSplitArray.map((item) => (
          <ul>
            <Item key={item} item={item} onToggleItem={onToggleItem} />
          </ul>
        ))}
      </div>
    </li>
  );
}

function Item({ item, onToggleItem }) {
  return (
    <li>
      <p>{item}</p>
      <input type="checkbox" onChange={(e) => onToggleItem(e, item)} />
    </li>
  );
}

function ShoppingList({ ingredients }) {
  return (
    <div>
      <main className="menu">
        <h2>Shopping List</h2>
      </main>
      {ingredients.map((ingredient) => (
        <h2>{ingredient}</h2>
      ))}
    </div>
  );
}
