"use client";
import Image from "next/image";
// import React from 'react';
// https://www.themealdb.com/api/json/v1/1/search.php?f=a
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);
  console.log(meals, search);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      console.log(data.meals);
      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("no data found...");
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, []);
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
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {meals?.length > 0 &&
            !error &&
            meals?.map((meal) => (
              <div key={meal?.idMeal} className="border-2 p-4">
                <Image
                  src={meal?.strMealThumb}
                  alt={meal?.strMeal}
                  width={500}
                  height={500}
                ></Image>
                <h6> {meal.strMeal} </h6>
                <p> {meal.strInstructions} </p>
              </div>
            ))}
          {error && <h6> No data found</h6>}
        </div>
      </div>
    </div>
  );
};

export default Meals;
