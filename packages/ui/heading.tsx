import * as React from "react";

export function Heading({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <h1 className="text-red-500 text-4xl">{children}</h1>
    </div>
  );
}
