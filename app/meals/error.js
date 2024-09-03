"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1 className="text-5xl p-4 text-center font-bold from-orange-600 via-yellow-600 to-orange-700 bg-gradient-to-r bg-clip-text text-transparent">
        An Error Occurred
      </h1>
      <p>Failed to fetch meals data please try again later.</p>
    </main>
  );
}
