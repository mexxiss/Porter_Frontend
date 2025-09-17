import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home";
import Partners from "./Pages/Partners/Partners.tsx";
import Enterprise from "./Pages/Enterprise/Enterprise.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";
import AboutUs from "./Pages/AboutUs/AboutUs.tsx";
import TwoWheelers from "./Pages/TwoWheelers/TwoWheelers.tsx";
import PackersAndMovers from "./Pages/PackersAndMovers/PackersAndMovers.tsx";
import Trucks from "./Pages/Trucks/Trucks.tsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy.tsx";
import TermsOfService from "./Pages/TermsOfService/TermsOfService.tsx";
import TermsOfServiceSSI from "./Pages/TermsOfServiceSSI/TermsOfServiceSSI.tsx";

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
        {
          path: "/two-wheelers",
          element: <TwoWheelers />
        },
        {
          path: "/packers-and-movers",
          element: <PackersAndMovers />
        },
        {
          path: "/trucks",
          element: <Trucks />
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />
        },
        {
          path: "/terms-of-service",
          element: <TermsOfService/>
        },
        {
          path: "/terms-of-service-ssi",
          element: <TermsOfServiceSSI/>
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App