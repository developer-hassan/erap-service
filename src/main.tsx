import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import FormCard from "./form/FormCard.tsx";
import App from "./App.jsx";
import FormOnePage from "./pages/FormOnePage.tsx";
import FormThreePage from "./pages/FormThreePage.tsx";
import FormTwoPage from "./pages/FormTwoPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "form",
    element: <FormCard />,
    children: [
      { element: <Navigate to={"/form/1"} />, index: true },
      { element: <FormOnePage />, path: "1" },
      { path: "2", element: <FormTwoPage /> },
      { path: "3", element: <FormThreePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />,
);
