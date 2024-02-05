import { z } from "zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

import { CardContent, CardFooter } from "@/components/ui/card.tsx";
import { formOneSchema } from "@/schema/form-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContext } from "@/context/FormContext.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import Asterisk from "@/components/ui/asterisk.tsx";
import SubmitButton from "@/components/form/SubmitButton.tsx";
import { FORM_ROUTES } from "@/routes/form-routes.ts";

export type FormOneType = z.infer<typeof formOneSchema>;

export default function FormOnePage() {
  const {
    form1: { setEmail, setPassword, email, password },
  } = useContext(FormContext);

  const navigate = useNavigate();

  const form = useForm<FormOneType>({
    resolver: zodResolver(formOneSchema),
    defaultValues: {
      email,
      password,
    },
  });

  function onSubmit({ email, password }: FormOneType) {
    setEmail(email);
    setPassword(password);
    navigate(FORM_ROUTES.two);
  }

  return (
    <>
      <CardContent className={"flex flex-col gap-y-10 p-20"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <Asterisk />
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={"Enter your email address"}
                      type={"email"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"email"}
            />
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password <Asterisk />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={"password"}
                      {...field}
                      placeholder={"Enter your password"}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              name={"password"}
            />
            <SubmitButton>Register</SubmitButton>
          </form>
        </Form>

        {/* Middle section */}
        <div className={"flex flex-col gap-y-5"}>
          {/* --- OR --- */}
          <div className={"flex items-center justify-center gap-x-2"}>
            <div className={"h-0.5 bg-gray-300 rounded w-20"}></div>
            <p className={"text-gray-900 font-semibold"}>OR</p>
            <div className={"h-0.5 bg-gray-300 rounded w-20"}></div>
          </div>

          {/* Social buttons */}
          <div className={"flex justify-around"}>
            <Button
              variant={"outline"}
              className={"border-2 py-6 text-[#3b5998]"}
            >
              <FaFacebookF className={"w-6 h-6"} />
            </Button>
            <Button variant={"outline"} className={"border-2 py-6"}>
              <FcGoogle className={"w-6 h-6"} />
            </Button>
            <Button variant={"outline"} className={"border-2 py-6"}>
              <FaApple className={"w-6 h-6"} />
            </Button>
            <Button
              variant={"outline"}
              className={"border-2 py-6 text-[#0a66c2]"}
            >
              <FaLinkedinIn className={"w-6 h-6"} />
            </Button>
          </div>

          {/* View More Options */}
          <Button className={"border-2 text-blue-400"} variant={"outline"}>
            View more options
          </Button>
        </div>

        {/* Language */}
        <Button
          className={"underline underline-offset-1 text-blue-900"}
          variant={"link"}
        >
          English
        </Button>
      </CardContent>
      <CardFooter className={"flex items-center justify-center -mt-10 pb-20"}>
        <p className={"text-gray-900"}>
          What is ID.me? | Terms of Service | Privacy Policy
        </p>
      </CardFooter>
    </>
  );
}
