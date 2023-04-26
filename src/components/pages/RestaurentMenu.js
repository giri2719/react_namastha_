import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { restaurants_menu, image_url } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
export default function RestaurentMenu() {
  const restaurantId = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    restaurant();
  }, []);
  const restaurant = async () => {
    setRestaurantMenu(restaurants_menu);
  };
  const addItemToStore = (event) => {
    console.log(event);
    dispatch(addItem("hello"));
  };
  return (
    <div>
      <div>RestaurentMenu:{restaurantId.id.split("-")[1]}</div>
      <h1 className="text-center font-semibold text-xl">
        {restaurantMenu[0]?.category}
      </h1>
      {restaurantMenu.map((res) => {
        return (
          <div
            className="flex justify-between p-2 m-2 h-40 shadow-lg bg-slate-100"
            key={res.name}
          >
            <div className="flex flex-col justify-around">
              <p className="font-bold">{res?.name}</p>
              {res?.description ? (
                <div>
                  <p className="font-medium">Description</p>
                  <p>{res?.description}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col">
              <img
                className="h-32 rounded-t-lg"
                src={image_url + res.imageId}
                alt="image"
              />
              <button
                className=" text-green-500 bg-white rounded-b-lg"
                onClick={() => addItemToStore(res)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
