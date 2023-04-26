import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { swiggy_data_url } from "../assets/assets";
import { image_url } from "../assets/assets";
import Shimmer from "./pages/Shimmer";
export default function Body() {
  const [Restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  const getRestaurants = async () => {
    setRestaurants(swiggy_data_url);
  };

  return (
    <>
      {Restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center items-center ">
          {Restaurants.map((restaurants) => {
            return (
              <Link
                to={`/restaurant/${restaurants?.data?.data?.name}-${restaurants?.data?.data?.id}`}
                key={restaurants?.data?.data?.id}
              >
                <div className="p-2 h-64">
                  <img
                    src={image_url + restaurants?.data?.data?.cloudinaryImageId}
                    alt="restaurants"
                    className="h-40"
                  />
                  <p>{restaurants?.data?.data?.name}</p>
                  <p>{restaurants?.data?.data?.cuisines?.join(",")}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
