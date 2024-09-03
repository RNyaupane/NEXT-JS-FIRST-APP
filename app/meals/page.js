import MealItem from "@/components/meals/meal-item";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import LoadingMeals from "./loading-out";
import classes from "./page.module.css";
import Link from "next/link";

async function Meals() {
  const meals = await getMeals();

  return (
    <>
      {meals?.map((item, index) => (
        <MealItem key={index} meals={item} />
      ))}
    </>
  );
}

export default function MealsPage() {
  return (
    <main>
      <h1 className="text-6xl text-yellow-500 font-semibold text-center">
        Best Food For Your Taste
      </h1>

      <p className="text-2xl text-stone-600 font-semibold text-center mt-5">
        Choose your favourite recipe and cook it yourself !!!
      </p>

      <div className="flex w-full justify-center mt-5">
        <Link href="/meals/share" className={classes.actions}>
          <button type="submit">Share Your Favourite Recipe</button>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 my-10">
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </div>
    </main>
  );
}
