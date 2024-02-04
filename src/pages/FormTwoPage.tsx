import { CardContent } from "@/components/ui/card.tsx";
import { z } from "zod";
import { formTwoSchema } from "@/form/form-schema.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormContext } from "@/form/FormContext.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

export type FormTwoType = z.infer<typeof formTwoSchema>;

export default function FormTwoPage() {
  const {
    form2: {
      ssn,
      dateOfBirth,
      zipCode,
      lastName,
      firstName,
      state,
      phone,
      city,
      homeAddress,
      setCity,
      setSsn,
      setState,
      setPhone,
      setHomeAddress,
      setDateOfBirth,
      setZipCode,
      setFirstName,
      setLastName,
    },
  } = useContext(FormContext);

  const navigate = useNavigate();

  const form = useForm<FormTwoType>({
    resolver: zodResolver(formTwoSchema),
    defaultValues: {
      ssn,
      firstName,
      lastName,
      homeAddress,
      city,
      phone,
      state,
      zipCode,
      dateOfBirth,
    },
  });

  function onSubmit({
    ssn,
    dateOfBirth,
    homeAddress,
    zipCode,
    lastName,
    firstName,
    state,
    phone,
    city,
  }: FormTwoType) {
    setSsn(ssn);
    setDateOfBirth(dateOfBirth);
    setHomeAddress(homeAddress);
    setZipCode(zipCode);
    setLastName(lastName);
    setFirstName(firstName);
    setState(state);
    setPhone(phone);
    setCity(city);

    navigate("/form/3");
  }

  return (
    <>
      <CardContent className={"flex flex-col gap-y-10"}>
        <h1 className={"text-3xl text-blue-600 font-bold text-center"}>
          Registration
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* First Name */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Enter your first name"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"firstName"}
            />

            {/* Last name */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Enter your last name"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"lastName"}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={"tel"}
                      placeholder={"Enter your phone number"}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value?.length || 0} of 10 max characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              name={"phone"}
            />

            {/* SSN */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SSN</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"XXX-XX-XXXX"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"ssn"}
            />

            {/* Home address */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Enter your address"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"homeAddress"}
            />

            {/* City */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Enter your city"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"city"}
            />

            {/* State */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Enter your state"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"state"}
            />

            {/* Zipcode */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zipcode</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"Enter your zipcode"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"zipCode"}
            />

            {/* Date of birth */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of birth</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={"DD/MM/YYYY"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"dateOfBirth"}
            />

            <Button className={"bg-blue-600 !mt-10"} type={"submit"}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </>
  );
}
