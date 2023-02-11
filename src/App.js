import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Galery from "./components/pages/Galery";
import AboutMe from "./components/pages/AboutMe";
import RootLayout from "./components/pages/Root";
import ErrorPage from "./components/pages/ErrorPage";
import "./App.css";

import "./assets/fonts/MavelPoster-Black.ttf";
import "./assets/fonts/LezernoDemo.ttf";
import "./assets/fonts/Justink.ttf";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/galery", element: <Galery /> },
      { path: "/aboutme", element: <AboutMe /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
