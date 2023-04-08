import * as React from "react";
import HeaderSearchBar from "@/components/HeaderSearchBar";
import HeaderUserProfile from "@/components/HeaderUserProfile";

function Header() {
  return (
    <header className="text-primary shadow-sidebar p-2 bg-white">
      <div className="container mx-auto flex flex-wrap justify-between py-4">
        <HeaderSearchBar />
        <HeaderUserProfile />
      </div>
    </header>
  );
}

export default Header;
