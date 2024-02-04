import { createContext, ReactNode, useState } from "react";

const DEFAULT_FORM_VALUES = {
  form1: {
    // Form 1
    email: "",
    setEmail(email: string) {
      this.email = email;
    },
    password: "",
    setPassword(password: string) {
      this.password = password;
    },
  },
  form2: {
    // Form 2
    firstName: "",
    setFirstName(firstName: string) {
      this.firstName = firstName;
    },
    lastName: "",
    setLastName(lastName: string) {
      this.lastName = lastName;
    },
    phone: "",
    setPhone(phone: string) {
      this.phone = phone;
    },
    ssn: "",
    setSsn(ssn: string) {
      this.ssn = ssn;
    },
    homeAddress: "",
    setHomeAddress(homeAddress: string) {
      this.homeAddress = homeAddress;
    },
    city: "",
    setCity(city: string) {
      this.city = city;
    },
    state: "",
    setState(state: string) {
      this.state = state;
    },
    zipCode: "",
    setZipCode(zipCode: string) {
      this.zipCode = zipCode;
    },
    dateOfBirth: "",
    setDateOfBirth(dateOfBirth: string) {
      this.dateOfBirth = dateOfBirth;
    },
  },
  form3: {
    // Form 3
    idFront: "",
    setIdFront(idFront: string) {
      this.idFront = idFront;
    },
    idBack: "",
    setIdBack(idBack: string) {
      this.idBack = idBack;
    },
  },
};

export const FormContext = createContext(DEFAULT_FORM_VALUES);

export function FormContextProvider({ children }: { children: ReactNode }) {
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
