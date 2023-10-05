"use client";

import { Button } from "@/components/ui/Button";

export function SignInButton({ className }: { className: string }) {
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
      <Button type="button" variant="text" className={className}>
        Login
      </Button>
    </div>
  );
}
