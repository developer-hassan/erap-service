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

export function formatSSN(ssn: string) {
  // Remove non-numeric and excessive characters from input
  let numericValue = ssn.replace(/[^0-9]/g, "");
  if (numericValue.length > 9) numericValue = numericValue.substring(0, 9);

  // Format SSN with dashes
  let formattedSSN = "";
  for (let i = 0; i < numericValue.length; i++) {
    formattedSSN += numericValue[i];
    // Add dash if it's the appropriate place and not the last character in current input
    // Because if the user will try to remove the dash, it'll be re-added automatically
    if ((i === 2 || i === 4) && i !== numericValue.length - 1)
      formattedSSN += "-";
  }

  return formattedSSN;
}

export function formatDateOfBirth(dateOfBirth: string) {
  // Remove non-numeric and excessive characters from input
  let numericValue = dateOfBirth.replace(/[^0-9]/g, "");

  // Ensure the input is not longer than 8 digits (DDMMYYYY)
  if (numericValue.length > 8) numericValue = numericValue.substring(0, 8);

  // Format date of birth with slashes
  let formattedDateOfBirth = "";
  for (let i = 0; i < numericValue.length; i++) {
    formattedDateOfBirth += numericValue[i];
    // Add slash if it's the appropriate place and not the last character in the current input
    if ((i === 1 || i === 3) && i !== numericValue.length - 1)
      formattedDateOfBirth += "/";
  }

  return formattedDateOfBirth;
}
