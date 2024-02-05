import { Outlet } from "react-router-dom";

import { FormContextProvider } from "../../context/FormContext.tsx";
import { Card, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { cn } from "@/lib/utils.ts";
import useIsForm3 from "@/hooks/form/useIsForm3.ts";
import { Button } from "@/components/ui/button.tsx";
import useIsLoadingData from "@/hooks/useIsLoadingData.ts";
import Spinner from "@/components/ui/spinner.tsx";

export default function FormCard() {
  const isForm3 = useIsForm3();
  const isLoading = useIsLoadingData();

  return (
    <FormContextProvider>
      {isLoading ? (
        <Spinner />
      ) : (
        <main
          className={cn(
            "py-10 min-w-full min-h-full",
            isForm3 ? "bg-[#fcfefd]" : "bg-white",
          )}
        >
          <Card
            className={cn(
              "mx-auto max-w-lg drop-shadow-md  p-0",
              isForm3 ? "bg-white" : "bg-[#fcfefd]",
            )}
          >
            <CardHeader>
              <CardTitle className={"flex items-center justify-center"}>
                <img className={"h-auto w-80"} src="/logo.png" alt={"Logo"} />
              </CardTitle>
            </CardHeader>

            <Outlet />
          </Card>

          {/* Display footer on routes 3 */}
          {isForm3 && (
            <footer
              className={
                "flex flex-col items-center justify-center p-5 gap-y-5"
              }
            >
              {/* Language */}
              <Button
                className={"underline underline-offset-1 text-blue-900"}
                variant={"link"}
              >
                English
              </Button>
              {/* Footer content*/}
              <p className={"text-gray-500"}>
                What is ID.me? | Terms of Service | Privacy Policy
              </p>
            </footer>
          )}
        </main>
      )}
    </FormContextProvider>
  );
}
