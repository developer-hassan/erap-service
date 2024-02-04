import { Outlet } from "react-router-dom";
import { FormContextProvider } from "./FormContext.tsx";

export default function FormCard() {
  return (
    <FormContextProvider>
      <div className={"max-w-lg mx-auto my-5 shadow-xl rounded"}>
        <p>Hello</p>
        <Outlet />
      </div>
    </FormContextProvider>
  );
}
