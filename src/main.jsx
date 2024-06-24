import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Articles from "./composants/Articles";
import PageErreur from "./composants/PageErreur";
import Take_Contact from "./composants/Take_Contact";
import Emploi from "./composants/Emploi";
import { Outlet } from "react-router-dom"; 
import ErrorPage from "./composants/ErrorPage";
import News from "./composants/News";
import Protege from "./composants/Protege";
const route = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    errorElement:<PageErreur />,
  },
  {
    path: "/blog",
    element: <Protege estConnecter = {true}>
               <News/>
             </Protege>
  },
  {
    path: "*",
    element :<ErrorPage />
  },
  {
    path: "/blog/:id",
    element: (
      <Articles />
    ),
  },
  {
    path: "apropos",
    element: (
      <>
        <h1>A propos</h1>
        <p>Je suis un paragraphe</p>
        <Link to="/">Retour</Link>
        <div className="info">
          <Link to="contact">Contact</Link>
          <Link to="emploi">Emploi</Link>
        </div>
        <div>
          <Outlet />
        </div>
      </>
    ),
    children:[
      {
        path:"/apropos/contact",
        element:<Take_Contact />
       
      },
      {
        path:"/apropos/emploi",
        element:<Emploi />
       
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
