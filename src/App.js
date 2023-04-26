import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/pages/About";
import Cart from "./components/pages/cart";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";
import RestaurentMenu from "./components/pages/RestaurentMenu";
import store from "./store/store";
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter} />);
