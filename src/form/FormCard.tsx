import { Outlet } from "react-router-dom";

import { FormContextProvider } from "./FormContext.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

export default function FormCard() {
  return (
    <FormContextProvider>
      <Card className={"my-10 mx-auto max-w-lg drop-shadow-md"}>
        <CardHeader>
          <CardTitle className={"flex items-center justify-center"}>
            <img className={"h-auto w-80"} src="/logo.png" alt={"Logo"} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </FormContextProvider>
  );
}
