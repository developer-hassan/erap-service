import { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";

import { Button } from "@/components/ui/button.tsx";

export default function SubmitButton({
  children,
  className = "",
  disabled = false,
}: {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <Button
      type={"submit"}
      disabled={disabled}
      className={cn("bg-[#066aab]", className)}
    >
      {children}
    </Button>
  );
}
