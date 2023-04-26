import React from "react";
import { useRouteError } from "react-router";
import Header from "../Header";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <> 
      <Header />
      <div className="flex flex-col justify-center items-center  h-screen ">
        <p className="text-5xl">{error.status}</p>
        <div>{error.data}</div>
      </div>
    </>
  );
}
