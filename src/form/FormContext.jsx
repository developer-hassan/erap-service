import { createContext, useState } from "react";

const DEFAULT_FORM_VALUES = {
  form1: {
    // Form 1
    email: "",
    setEmail() {},
    password: "",
    setPassword() {},
  },
  form2: {
    // Form 2
    firstName: "",
    setFirstName() {},
    lastName: "",
    setLastName() {},
    phone: "",
    setPhone() {},
    ssn: "",
    setSsn() {},
    homeAddress: "",
    setHomeAddress() {},
    city: "",
    setCity() {},
    state: "",
    setState() {},
    zipCode: "",
    setZipCode() {},
    dateOfBirth: "",
    setDateOfBirth() {},
  },
  form3: {
    // Form 3
    idFront: "",
    setidFront() {},
    idBack: "",
    setIdBack() {},
  },
};

export const FormContext = createContext(DEFAULT_FORM_VALUES);

// eslint-disable-next-line react/prop-types
export function FormContextProvider({ children }) {
  // Form 1 state
  const [email, setEmail] = useState(DEFAULT_FORM_VALUES.form1.email);
  const [password, setPassword] = useState(DEFAULT_FORM_VALUES.form1.password);
  // Form 2 state
  const [firstName, setFirstName] = useState(
    DEFAULT_FORM_VALUES.form2.firstName,
  );
  const [lastName, setLastName] = useState(DEFAULT_FORM_VALUES.form2.lastName);
  const [phone, setPhone] = useState(DEFAULT_FORM_VALUES.form2.phone);
  const [ssn, setSsn] = useState(DEFAULT_FORM_VALUES.form2.ssn);
  const [homeAddress, setHomeAddress] = useState(
    DEFAULT_FORM_VALUES.form2.homeAddress,
  );
  const [city, setCity] = useState(DEFAULT_FORM_VALUES.form2.city);
  const [state, setState] = useState(DEFAULT_FORM_VALUES.form2.state);
  const [zipCode, setZipCode] = useState(DEFAULT_FORM_VALUES.form2.zipCode);
  const [dateOfBirth, setDateOfBirth] = useState(
    DEFAULT_FORM_VALUES.form2.dateOfBirth,
  );
  // Form 3 state
  const [idFront, setIdFront] = useState(DEFAULT_FORM_VALUES.form3.idFront);
  const [idBack, setIdBack] = useState(DEFAULT_FORM_VALUES.form3.idBack);

  return (
    <FormContext.Provider
      value={{
        form1: { email, setEmail, password, setPassword },
        form2: {
          firstName,
          setFirstName,
          lastName,
          setLastName,
          phone,
          setPhone,
          ssn,
          setSsn,
          state,
          setState,
          homeAddress,
          setHomeAddress,
          city,
          setCity,
          zipCode,
          setZipCode,
          dateOfBirth,
          setDateOfBirth,
        },
        form3: { idFront, setIdFront, idBack, setIdBack },
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
