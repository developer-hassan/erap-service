import { FormEvent, useContext, useState } from "react";

import { FormContext } from "@/form/FormContext.tsx";
import { CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import FileInput from "@/components/ui/file-input.tsx";

export default function FormThreePage() {
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  const {
    form1,
    form2,
    form3: { setIdFront, setIdBack, idFront, idBack },
  } = useContext(FormContext);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Reset errors
    setError1("");
    setError2("");

    // Make sure that both images are uploaded
    if (!idFront) setError1("Please upload your ID front.");
    if (!idBack) setError2("Please upload your ID back.");
    if (!idFront || !idBack) return;

    // Update the images
    setIdFront(idFront);
    setIdBack(idBack);

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

    // Append current form data
    formData.append("id-front", idFront);
    formData.append("id-back", idBack);

    console.log(Array.from(formData));
  }

  return (
    <CardContent className={"flex flex-col gap-y-10"}>
      <form className={"flex flex-col gap-y-4"} onSubmit={onSubmit}>
        <FileInput name={"idFront"} required={true} onUpload={setIdFront} />
        {error1 && (
          <p
            className={
              "p-4 bg-red-100 rounded border-destructive border text-destructive"
            }
          >
            {error1}
          </p>
        )}

        <FileInput name={"idBack"} required={true} onUpload={setIdBack} />
        {error2 && (
          <p
            className={
              "p-4 bg-red-100 rounded border-destructive border text-destructive"
            }
          >
            {error2}
          </p>
        )}

        <Button disabled={!idFront || !idBack} type={"submit"}>
          Submit
        </Button>
      </form>
    </CardContent>
  );
}
