import { FormContextType } from "@/context/FormContext.tsx";

export function isValidDate(dateStr: string) {
  try {
    const [day, month, year] = dateStr.split("/").map(Number);

    // Check if the components are valid
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return false;
    }

    // Note: Months are 0-indexed in JavaScript Date object, so subtract 1 from the month
    const date = new Date(year, month - 1, day);

    // Check if the date components match the input
    const formattedDate = date.toLocaleDateString("en-GB"); // Get "DD/MM/YYYY" format
    return formattedDate === dateStr;
  } catch {
    return false;
  }
}

export function isForm1Filled(formContext: FormContextType) {
  const {
    form1: { email, password },
  } = formContext;

  return email && password;
}

export function isForm2Filled(formContext: FormContextType) {
  const {
    form2: {
      zipCode,
      dateOfBirth,
      firstName,
      lastName,
      phone,
      ssn,
      homeAddress,
      city,
      state,
    },
  } = formContext;

  return (
    firstName &&
    lastName &&
    phone &&
    ssn &&
    homeAddress &&
    city &&
    state &&
    zipCode &&
    dateOfBirth
  );
}

export function isForm3Filled(formContext: FormContextType) {
  const {
    form3: { idFront, idBack },
  } = formContext;

  return idFront && idBack;
}
