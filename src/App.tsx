import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners.tsx";
import Enterprise from "./Pages/Enterprise/Enterprise.tsx";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/partners",
          element: <Partners />
        },
        {
          path: "/enterprise",
          element: <Enterprise />
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App