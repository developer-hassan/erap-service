import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import FormCard from "./components/form/FormCard.tsx";
import FormOnePage from "./pages/form/FormOnePage.tsx";
import FormThreePage from "./pages/form/FormThreePage.tsx";
import FormTwoPage from "./pages/form/FormTwoPage.tsx";
import { FORM_ROUTES } from "@/routes/form-routes.ts";
import FormSuccessPage from "@/pages/form/FormSuccessPage.tsx";
import { delayOneSecond } from "@/service/fake-api.ts";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to={FORM_ROUTES.one} /> },
  {
    path: "register",
    element: <FormCard />,
    children: [
      // Index route will navigate to first routes
      { element: <Navigate to={FORM_ROUTES.one} />, index: true },

      { path: "1", loader: delayOneSecond, element: <FormOnePage /> },
      { path: "2", loader: delayOneSecond, element: <FormTwoPage /> },
      { path: "3", loader: delayOneSecond, element: <FormThreePage /> },
      { path: "success", loader: delayOneSecond, element: <FormSuccessPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />,
  </QueryClientProvider>,
);
