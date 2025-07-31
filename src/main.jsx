import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./Components/Root/Root.jsx";
import Errorpage from "./Components/Errorelement/Errorpage.jsx";
import Home from "./Components/Homee/Home.jsx";
import Listedbooks from "./Components/ListedBooks/Listedbooks.jsx";
import Pagesread from "./Components/PagesRead/Pagesread.jsx";
import Bookdetail from "./Components/Bookdetail/Bookdetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "book/:bookId",
        element: <Bookdetail></Bookdetail>,
        loader: () => fetch("booksdata.json"),
      },
      {
        path: "/listedbooks",
        element: <Listedbooks></Listedbooks>,
      },
      {
        path: "/pagesread",
        element: <Pagesread></Pagesread>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
