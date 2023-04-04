import * as React from "react";
import { Search } from "react-feather";

function HeaderSearchBar() {
  return (
    <div className="flex items-center w-[40%]">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <Search className="h-5 w-5 text-gray-500" />
        </span>
        <input
          type="text"
          className="rounded-lg py-3 px-4 w-full bg-gray-200 text-gray-900 leading-tight focus:outline-none pl-10"
          placeholder="Search for something"
        />
      </div>
    </div>
  );
}

export default HeaderSearchBar;
