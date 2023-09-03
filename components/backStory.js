import React from "react";
import { Parallax } from "react-parallax";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Story() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }



  return (
    <Parallax className="tacos4" bgImage="/images/tacos.png">
      <div className="p-8">
        <Slider {...settings}>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:px-4 md:grid-cols-1 md:px-10 lg:grid-cols-2">
              <div className="space-y-6">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Food Made with Love.</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Our signature tacos are well known before the Resturant opened up. We just now have been able to make our product much more marketable.</p>
                <p className="font-bold text-gray-600">
                  Fresh Meats
                </p>
                <p className="text-gray-600">Prepare your taste buds for a tantalizing taco adventure at this esteemed restaurant, where they take pride in their selection of fresh, flavorful, and ethically sourced meats, offering a diverse menu of expertly seasoned taco fillings that will leave you craving for more.</p>
                <p className=" font-bold text-gray-600">
                  In House Made Tortillas.
                </p>
                <p className="text-gray-600">Indulge in the authentic experience of handmade tortillas as this restaurant impresses with its dedication to crafting flavorful dishes, including tortillas made from scratch using traditional techniques, ensuring a warm and soft foundation for your culinary delight.</p>
              </div>
              <div className="">
                <img src="/images/tacos.jpg" alt="beef tacos" className="w-[100%] my-auto rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-3 lg:-ml-0" />
              </div>
            </div>
          </div>
          <div> 
            <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:px-4 md:grid-cols-1 md:px-10 lg:grid-cols-2">
              <div className="mt-2 text-3xl font-bold text-gray-600 space-y-5">
                Drinks With Attention to Detail
                <p className="text-lg pt-2">At our restaurant, we recognize that drinks are a vital part of your dining experience. Our carefully curated beverage selection, including refreshing cocktails, fine wines, and non-alcoholic options, enhances your meal and overall enjoyment. We take pride in offering a diverse range of beverages to ensure your visit is memorable and satisfying.</p>
                <p className="text-lg pt-2">Kickstart your evening with a burst of flavor! Try our signature Spicy Margarita, a tantalizing blend of zesty lime, premium tequila, and a fiery kick of spice. It's the perfect way to ignite your taste buds and set the tone for a night of culinary adventures at our restaurant. Sip, savor, and let the good times flow with every refreshing sip of this unforgettable cocktail.</p>
              </div>
              <div>
              <img src="/images/spicyMarg.jpg" alt="signature drink of the restaurant Spicy Margarita" className="w-[100%] my-auto rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-3 lg:-ml-0" />
              </div>
              </div>
              </div>
          </div>
          <div>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-1 sm:px-4 md:grid-cols-1 md:px-10 lg:grid-cols-2">
              <div className="mt-2 text-3xl font-bold text-gray-600 space-y-5">
                Roots of Los Angeles
                <p className="text-lg pt-4">Los Angeles, a city of endless possibilities, is a global hub of creativity, innovation, and diversity. It's home to the entertainment and tech industries, shaping culture and driving progress. With its unique blend of cultures and stunning natural beauty, LA inspires and reminds us to preserve our environment. </p>
                <p className="text-lg pt-2">At our restaurant, giving back to the community is at the heart of our mission. We believe in the importance of supporting those who support us. That's why we're dedicated to various philanthropic efforts, from sourcing locally to participating in charitable initiatives. By dining with us, you're not only savoring great food but also contributing to the betterment of our community. Together, we can make a meaningful difference, one meal at a time.</p>
              </div>
              <div>
              <img src="/images/charity.jpg" alt="charity event in Los Angeles" className="w-[100%] my-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 pt-10 md:-ml-3 lg:-ml-0" />
              </div>
              </div>
              </div>
          </div>
        </Slider>
      </div>

    </Parallax>
  )
}

export default Story;

