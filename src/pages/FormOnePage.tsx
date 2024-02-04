import { CardContent, CardFooter } from "@/components/ui/card.tsx";
import { z } from "zod";
import { formOneSchema } from "@/form/form-schema.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormContext } from "@/form/FormContext.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { FaApple, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

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
    navigate("/form/2");
  }

  return (
    <>
      <CardContent className={"flex flex-col gap-y-10"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
                  <FormLabel>Password</FormLabel>
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
            <Button className={"bg-blue-600"} type={"submit"}>
              Register
            </Button>
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
      <CardFooter className={"flex items-center justify-center mt-2"}>
        <p className={"text-gray-900"}>
          What is ID.me? | Terms of Service | Privacy Policy
        </p>
      </CardFooter>
    </>
  );
}
