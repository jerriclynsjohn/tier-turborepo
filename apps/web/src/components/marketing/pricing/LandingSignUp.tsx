"use client";

import type { VariantProps } from "cva";

import type { buttonVariants } from "@/components/ui/Button";
import { Button } from "@/components/ui/Button";

export function SignUpButton({
  type,
  children,
}: {
  type: VariantProps<typeof buttonVariants>["variant"];
  children: React.ReactNode;
}) {
  return (
    <Button type="button" variant={type} className="w-[256px]">
      {children}
    </Button>
  );
}
