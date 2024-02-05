import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import FormCard from "./components/form/FormCard.tsx";
import FormOnePage from "./pages/form/FormOnePage.tsx";
import FormThreePage from "./pages/form/FormThreePage.tsx";
import FormTwoPage from "./pages/form/FormTwoPage.tsx";
import { FORM_ROUTES } from "@/routes/form-routes.ts";
import FormSuccessPage from "@/pages/form/FormSuccessPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "form",
    element: <FormCard />,
    children: [
      // Index route will navigate to first routes
      { element: <Navigate to={FORM_ROUTES.one} />, index: true },

      { path: "1", element: <FormOnePage /> },
      { path: "2", element: <FormTwoPage /> },
      { path: "3", element: <FormThreePage /> },

      { path: "success", element: <FormSuccessPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />,
);
