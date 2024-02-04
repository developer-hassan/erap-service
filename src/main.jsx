import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import FormCard from "./form/FormCard.jsx";
import App from "./App.jsx";
import FormOnePage from "./pages/FormOnePage.jsx";
import FormThreePage from "./pages/FormThreePage.jsx";
import FormTwoPage from "./pages/FormTwoPage.jsx";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
