import * as React from "react";
import HeaderSearchBar from "@/components/HeaderSearchBar";
import HeaderUserProfile from "@/components/HeaderUserProfile";

function Header() {
  return (
    <header className="text-primary">
      <div className="container mx-auto flex justify-between py-4">
        <HeaderSearchBar />
        <HeaderUserProfile />
      </div>
    </header>
  );
}

export default Header;
