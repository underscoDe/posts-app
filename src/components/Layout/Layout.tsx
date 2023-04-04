import { LayoutProps } from "@/interfaces";
import * as React from "react";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="h-screen bg-white">
      <div className="container h-full mx-auto xl:px-28 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;