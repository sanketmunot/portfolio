import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
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
      element: (
        <div className="section-container">
          <About className="section-container" />
        </div>
      ),
    },
    {
      path: "/work",
      element: (
        <div className="section-container">
          <WorkEx />
        </div>
      ),
    },
    {
      path: "/blog",
      element: (
        <div className="section-container">
          <Blog />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
