import useCurrentUser from "@/hooks/useCurrentUser";
import * as React from "react";

function HeaderUserProfile() {
  const { data: currentUser } = useCurrentUser();

  return (
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50"
        alt="user profile"
        className="rounded-full"
      />
      <p className="ml-2">{currentUser.name}</p>
    </div>
  );
}

export default HeaderUserProfile;
