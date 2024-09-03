"use client";
import { useState } from "react";
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import toast, { Toaster } from "react-hot-toast";
import { redirect } from "next/navigation";

export default function ShareMealPage() {
  const [state, setState] = useState({ message: null });

  const formAction = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await shareMeal(null, formData);

      if (response && response.message) {
        setState({ message: response.message });
        toast.error(response.message);
      } else {
        redirect("/meals");
      }
    } catch (error) {
      console.log("==========================>", error);

      setState({ message: "An error occurred. Please try againa." });
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>

          <ImagePicker label="Your Image" name="image" />

          {state.message && <p className="text-red-500">{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
      <Toaster />
    </>
  );
}
