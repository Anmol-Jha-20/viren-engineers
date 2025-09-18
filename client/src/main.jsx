import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactPage from "./Pages/Contact.jsx";
import HomePage from "./Pages/HomePage.jsx";
import RentalService from "./Pages/ServicesPage/RentalService.jsx";
import TowerCraneRentalService from "./Pages/ServicesPage/TowerCraneRentalServices.jsx";
import ScreeningMachineryService from "./Pages/ServicesPage/ScreeningMachinery.jsx";
import DevelopmentService from "./Pages/ServicesPage/DevelopmentService.jsx";
import WasteManagementService from "./Pages/ServicesPage/WasteManagementServices.jsx";
import SelfConcreteMixer from "./Pages/ServicesPage/SelfConcreteMixer.jsx";
import WorkService from "./Pages/ServicesPage/WorkService.jsx";
import AboutPage from "./Pages/AboutUs.jsx";
import VirenGallery from "./Pages/Gallery.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/rental-service",
        element: <RentalService />,
      },
      {
        path: "/tower-crane-rental-services",
        element: <TowerCraneRentalService />,
      },
      {
        path: "/screening-machinery",
        element: <ScreeningMachineryService />,
      },
      {
        path: "/development-service",
        element: <DevelopmentService />,
      },
      {
        path: "/waste-management-services",
        element: <WasteManagementService />,
      },
      {
        path: "/self-loading-concrete-mixer",
        element: <SelfConcreteMixer />,
      },
      {
        path: "/work-service",
        element: <WorkService />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/gallery",
        element: <VirenGallery />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
