import * as React from "react";

function HeaderUserProfile() {
  return (
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50"
        alt="user profile"
        className="rounded-full"
      />
      <p className="ml-2">Username</p>
    </div>
  );
}

export default HeaderUserProfile;
