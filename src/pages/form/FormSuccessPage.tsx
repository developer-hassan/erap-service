import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { CardContent, CardFooter } from "@/components/ui/card.tsx";
import { isForm3Filled } from "@/lib/form-utils.ts";
import { FormContext } from "@/context/FormContext.tsx";
import { FORM_ROUTES } from "@/routes/form-routes.ts";

export default function FormSuccessPage() {
  const formData = useContext(FormContext);

  // Navigate to form 3 if not filled
  if (!isForm3Filled(formData)) return <Navigate to={FORM_ROUTES.three} />;

  return (
    <>
      <CardContent
        className={
          "text-center flex flex-col align-center justify-center gap-y-14"
        }
      >
        <h1 className={"text-[#efd763] text-5xl font-bold"}>Success</h1>
        <p className={"text-[#00599c] font-semibold"}>
          Your identity is pending verification.
          <br />
          We'll be in Touch Shortly!
        </p>
      </CardContent>
      <CardFooter className={"flex items-center mt-36 p-20 justify-center"}>
        <p className={"text-gray-500"}>
          What is ID.me? | Terms of Service | Privacy Policy
        </p>
      </CardFooter>
    </>
  );
}
