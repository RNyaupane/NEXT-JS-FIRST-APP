import fs from "node:fs/promises"; // Use the promises API for fs

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");

  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // Correct slug assignment and sanitization
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions); // Sanitize the instructions

  // Extract file extension and create filename
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const imagePath = `public/images/${filename}`;

  try {
    // Convert the image to a Buffer correctly
    const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

    // Write the image to disk using promises API
    await fs.writeFile(imagePath, bufferedImage);

    // Update the image path in the meal object
    meal.image = `/images/${filename}`;

    // Insert the meal into the database
    db.prepare(
      `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
      `
    ).run(meal);
  } catch (error) {
    throw new Error("Saving image failed or database operation failed!");
  }
}
