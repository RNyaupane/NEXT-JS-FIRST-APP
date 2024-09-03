import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function MealItem({ meals }) {
  const { title, slug, image, summary, creator } = meals;
  return (
    <div className="group relative block overflow-hidden">
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <Icon icon="clarity:heart-line" />
      </button>

      <Image
        src={image}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        height={400}
        width={300}
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium rounded-2xl">
          {" "}
          New{" "}
        </span>

        <Link href={`meals/${slug}`}>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        </Link>

        <p className="mt-1.5 text-sm text-gray-700">$14.99</p>

        <form className="mt-4 flex gap-3">
          <button className="block w-full rounded bg-yellow-400 px-4 py-3 text-sm font-medium transition hover:scale-105">
            Add to Cart
          </button>

          {/* <Link
            className="inline-flex items-center gap-2 rounded border border-yellow-600 px-2 py-3 text-yellow-600  transition hover:scale-105"
            href="/meals/share"
          >
            <span className="text-sm font-medium"> Share </span>

            <Icon icon="mdi:share" />
          </Link> */}
        </form>
      </div>
    </div>
  );
}
