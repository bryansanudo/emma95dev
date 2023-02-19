import React from "react";
import PageSection from "@/components/PageSection";

import logoMoon from "@/assets/friends/logoMoon.jpg";
import logoSara from "@/assets/friends/logoSara.jpg";
import logoEliana from "@/assets/friends/logoEliana1.jpg";

const Friends = () => {
  const portfolios = [
    {
      id: 1,
      src: logoMoon,

      code: "https://moon-portafolio.vercel.app/",
      brand: "@elisabethmoondj",
    },
    {
      id: 2,
      src: logoSara,

      code: "https://sarazapata.vercel.app/",
      brand: "@sarazapata144",
    },
    {
      id: 3,
      src: logoEliana,

      code: "https://sarazapata.vercel.app/",
      brand: "@elicaro12",
    },
  ];

  return (
    <PageSection name="colaboraciones" title="Colaboraciones">
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[100px] w-[100px]    object-cover rounded-full "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Friends;
