import { LayoutProps } from "@/interfaces";
import * as React from "react";
import Sidebar from "@/components/layouts/Sidebar";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="h-screen bg-[#f9fafb]">
      <div className="h-full mx-auto">
        <div className="grid grid-cols-[1fr_4fr_1fr] h-full">
          <Sidebar />
          <div className="border-x-[1px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
