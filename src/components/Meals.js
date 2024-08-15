"use client";
// import React from 'react';
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState("");
  const loadData = async () => {
    const res = await fetch(
      `www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
    const data = await res.json();
    setMeals(data.meals);
  };
  const handler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //   useEffect(() => {
  //     loadData();
  //   }, [search]);
  // if(meals?.length === 0 ){
  //     return <h6>No data found...</h6>
  // }

  return (
    <div>
      <div>
        <input
          onChange={handler}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mt-6 rounded-none border-white"
        />
        <button
          onClick={() => loadData()}
          className="btn bg-red-400 text-white rounded-none "
        >
          search
        </button>
        <div className="mt- 12 grid grid-cols-3 gap-12">
          {meals?.map((meal) => (
            <div key={meal?.idMeal} className="border-2 p-4">
              <h6> {meal.strMeal} </h6>
              <p> {meal.strInstructions} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meals;
