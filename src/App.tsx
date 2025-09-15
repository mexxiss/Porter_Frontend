import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners.tsx";
import Enterprise from "./Pages/Enterprise/Enterprise.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";
import AboutUs from "./Pages/AboutUs/AboutUs.tsx";

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
        {
          path: "/contact-us",
          element: <ContactUs />
        },
        {
          path: "/about-us",
          element: <AboutUs />
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App