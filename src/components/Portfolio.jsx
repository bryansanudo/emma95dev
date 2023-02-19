import React from "react";
import PageSection from "@/components/PageSection";

import portfolio1 from "@/assets/portfolio/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio/portfolio2.jpg";
import portfolio3 from "@/assets/portfolio/portfolio3.jpg";
import portfolio4 from "@/assets/portfolio/portfolio4.jpg";
import portfolio5 from "@/assets/portfolio/portfolio5.jpg";
import portfolio6 from "@/assets/portfolio/portfolio6.jpg";
import portfolio7 from "@/assets/portfolio/portfolio7.jpg";
import portfolio8 from "@/assets/portfolio/portfolio8.jpg";
import portfolio9 from "@/assets/portfolio/portfolio9.jpg";
import portfolio10 from "@/assets/portfolio/portfolio10.jpg";
import portfolio11 from "@/assets/portfolio/portfolio11.jpg";

import video1 from "@/assets/portfolio/video1.mp4";
import video2 from "@/assets/portfolio/video2.mp4";
import video3 from "@/assets/portfolio/video3.mp4";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio1,
      category: "Título",
      code: "https://www.instagram.com/p/CMw8aGbhE8t/",
      brand: "@elianacaro12",
    },
    {
      id: 2,
      src: portfolio2,
      category: "Título",
      code: "https://www.instagram.com/p/CMw8aGbhE8t/",
      brand: "@elianacaro12",
    },
    {
      id: 3,
      src: portfolio3,
      category: "Título",
      code: "https://www.instagram.com/p/CMw8aGbhE8t/",
      brand: "@elianacaro12",
    },
    {
      id: 4,
      src: portfolio4,
      category: "Título",
      code: "https://www.instagram.com/p/B-7w99hhOkE/",
      brand: "@elianacaro12",
    },
    {
      id: 5,
      src: portfolio5,
      category: "Título",
      code: "https://www.instagram.com/p/CKlyZrJBkm4/",
      brand: "@elianacaro12",
    },
    {
      id: 6,
      src: portfolio6,
      category: "Título",
      code: "https://www.instagram.com/p/CcYbF4IOfI7/",
      brand: "@elianacaro12",
    },
    {
      id: 7,
      src: portfolio7,
      category: "Título",
      code: "https://www.instagram.com/p/CLrrVYNB42d/",
      brand: "@elianacaro12",
    },
    {
      id: 8,
      src: portfolio8,
      category: "Título",
      code: "https://www.instagram.com/p/CfbxAY6unRd/",
      brand: "@elianacaro12",
    },
    {
      id: 9,
      src: portfolio9,
      category: "Título",
      code: "https://www.instagram.com/p/CoEISn3sc55/",
      brand: "@elianacaro12",
    },
    {
      id: 10,
      src: portfolio10,
      category: "Título",
      code: "https://www.instagram.com/p/CcDaM4duObw/",
      brand: "@elianacaro12",
    },
    {
      id: 11,
      src: portfolio11,
      category: "Título",
      code: "https://www.instagram.com/p/CcDaM4duObw/",
      brand: "@elianacaro12",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="portafolio"
      subtitle={`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Dignissimos sunt enim eum possimus, culpa veritatis hic aspernatur
    numquam ducimus exercitationem fuga nemo consequatur odit
    laudantium voluptate facilis veniam perferendis pariatur?`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            <div className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105">
              <a
                href="https://www.instagram.com/p/Ci7wURvPIGo/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center justify-center">
                  <video
                    src={video1}
                    loop
                    autoPlay
                    muted
                    type="video/mp4"
                    playsInline
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <p className="m-4 text-sm md:text-lg">@elianacaro12</p>
                </div>
              </a>
            </div>
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
            <div className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105">
              <a
                href="https://www.instagram.com/p/ClJe5NuohD5/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center justify-center">
                  <video
                    src={video2}
                    loop
                    autoPlay
                    muted
                    type="video/mp4"
                    playsInline
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <p className="m-4 text-sm md:text-lg">@elianacaro12</p>
                </div>
              </a>
            </div>
            <div className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105">
              <a
                href="https://www.instagram.com/p/ClJe5NuohD5/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center justify-center">
                  <video
                    src={video3}
                    loop
                    autoPlay
                    muted
                    type="video/mp4"
                    playsInline
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                  <p className="m-4 text-sm md:text-lg">@elianacaro12</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Portfolio;
