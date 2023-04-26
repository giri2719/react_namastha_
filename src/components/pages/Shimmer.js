import React from "react";

export default function Shimmer() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-wrap justify-center items-center ">
      {count.map(() => {
        return (
          <div className=" bg-slate-100 h-60 w-80 p-2 m-2">
            <div className="h-40 m-2 p-2 bg-slate-200"></div>
            <div className=" w-2/3 m-2 p-2 bg-slate-200"></div>
            <div className=" w-1/2 m-2 p-2 bg-slate-200"></div>
          </div>
        );
      })}
    </div>
  );
}
