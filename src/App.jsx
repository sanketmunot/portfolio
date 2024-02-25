import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import About from "./components/AboutComponent";
import Blog from "./components/BlogComponent";
import HomeComponent from "./components/HomeComponent";
import WorkEx from "./components/WorkExComponent";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeComponent />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/work",
      element: <WorkEx />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
