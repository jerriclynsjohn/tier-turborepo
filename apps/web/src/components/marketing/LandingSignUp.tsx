"use client";

import { Button } from "@/components/ui/Button";

export function SignUpButton({ className }: { className: string }) {
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
      <Button type="button" variant="primary" className={className}>
        Sign up with Github
      </Button>
    </div>
  );
}
