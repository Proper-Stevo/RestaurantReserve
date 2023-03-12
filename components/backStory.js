import React from "react";

function Story() {
    return (
        <div class="overflow-hidden bg-[#e6d7d6] py-24 sm:py-32">
  <div class="mx-auto max-w-4xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Food Made with Love.</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Our signature tacos are well known before the Resturant opened up. We just now have been able to make our product much more marketable.</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
               Fresh Meats
               <br />
              </dt>
              <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>

            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                In House Made Tortillas.
                <br />
              </dt>
              <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
            </div>

            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                Fresh Garden Toppings.
                <br />
              </dt>
              <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src="/images/tacos.jpg" alt="Product screenshot" class="w-[100%] rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-3 lg:-ml-0"/>
    </div>
  </div>
</div>
    )
}

export default Story;