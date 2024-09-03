import Image from "next/image";
import { Icon } from "@iconify/react";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDetailPage({ params }) {
  const meal = getMeal(params?.slug);

  const { image, title, summary, creator, creator_email } = meal;

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, <br />);
  return (
    <main>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
        <div
          className="container px-5 py-24 mx-auto"
          style={{ cursor: "auto" }}
        >
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="relative lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
              <Image
                alt={title}
                src={image}
                fill
                className="object-cover object-center rounded"
              />
            </div>
            <div
              className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
              style={{ cursor: "auto" }}
            >
              <h2
                className="text-sm title-font text-gray-500 tracking-widest"
                style={{ cursor: "auto" }}
              >
                ON SALE
              </h2>
              <h1
                className="text-gray-900 text-3xl title-font font-medium mb-1"
                style={{ cursor: "auto" }}
              >
                {title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Icon
                    icon="iconoir:star"
                    className="w-4 h-4 text-amber-500"
                  />
                  <Icon
                    icon="iconoir:star"
                    className="w-4 h-4 text-amber-500"
                  />
                  <Icon
                    icon="iconoir:star"
                    className="w-4 h-4 text-amber-500"
                  />
                  <Icon
                    icon="iconoir:star"
                    className="w-4 h-4 text-amber-500"
                  />
                  <Icon
                    icon="iconoir:star"
                    className="w-4 h-4 text-amber-500"
                    style={{ fill: "none" }}
                  />
                  <span className="text-gray-600 ml-3">20 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  <a className="text-gray-500">
                    <Icon icon="ic:baseline-facebook" className="w-5 h-5" />
                  </a>
                  <a className="text-gray-500">
                    <Icon icon="ri:twitter-fill" className="w-5 h-5" />
                  </a>
                  <a className="text-gray-500">
                    <Icon icon="ri:instagram-line" className="w-5 h-5" />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{summary}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-3">
                <div className="flex ml-0 items-center">
                  <span className="mr-3">Creator : </span>
                  <span className="mr-3 font-bold text-amber-600">
                    {creator}
                  </span>
                </div>
              </div>
              <div className="flex mt-0 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ml-0 items-center">
                  <span className="mr-3">Creator email : </span>
                  <span className="mr-3 font-bold text-amber-600">
                    {creator_email}
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Instructions
                </span>
                <p
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: meal?.instructions }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
