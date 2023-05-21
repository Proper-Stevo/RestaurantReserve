import React from "react";
import { Parallax } from "react-parallax";


function Story() {
  return (
    <Parallax className="tacos4" bgImage="/images/tacos.png">
      <div className="overflow-hidden py-20 sm:py-30">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Food Made with Love.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">Our signature tacos are well known before the Resturant opened up. We just now have been able to make our product much more marketable.</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    Fresh Meats
                    <br />
                  </dt>
                  <dd className="inline">Prepare your taste buds for a tantalizing taco adventure at this esteemed restaurant, where they take pride in their selection of fresh, flavorful, and ethically sourced meats, offering a diverse menu of expertly seasoned taco fillings that will leave you craving for more.</dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    In House Made Tortillas.
                    <br />
                  </dt>
                  <dd className="inline">Indulge in the authentic experience of handmade tortillas as this restaurant impresses with its dedication to crafting flavorful dishes, including tortillas made from scratch using traditional techniques, ensuring a warm and soft foundation for your culinary delight.</dd>
                </div>
              </dl>
            </div>
          </div>
          <img src="/images/tacos.jpg" alt="Product screenshot" className="w-[100%] my-auto rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-3 lg:-ml-0" />
        </div>
      </div>
      </div>
    </Parallax>
  )
}

export default Story;