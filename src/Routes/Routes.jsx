import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";
import Favorites from "../pages/Favorites/Favorites";
import Error from "../pages/Error/Error";

export const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children:[
        {
            index: true,
            Component: Home,
            hydrateFallbackElement: <h1 className="text-green-700 font-bold text-3xl">Phones are Loading......</h1>,
            loader: ()=> fetch('../phones.json')
        },
        {
            path: 'phoneDetails/:id',
            Component: PhoneDetails,
            hydrateFallbackElement: <h1 className="text-green-700 font-bold text-3xl">Phones are Loading......</h1>,
            loader: ()=> fetch('../phones.json')
        },
        {
          path: 'favorites',
          Component: Favorites
        }
    ]
  },
  {
    path: 'about',
    Component: About
  },
]);
