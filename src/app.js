import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.js";
import Body from "./body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./about.js";
import Contact from "./contact.js";
import Error from "./error.js";
import ResMenu from "./resmenu.js";
import Restaurant from "./restaurant.js";
import Cart from "./cart.js";
import { Provider } from "react-redux";
import appStore from "./util/appStore.js";
const App = () => {
  return (
    <Provider store={appStore}>
      <div className="app-container">
        {<Header />}
        {<Outlet />}
      </div>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      // {
      //   path: "/restaurant",
      //   element: <Restaurant />,
      // },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

// console.log(document.getElementById("root")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
