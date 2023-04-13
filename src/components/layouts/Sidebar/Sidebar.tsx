import Logo from "@/components/Logo";
import SidebarItem from "@/components/layouts/SidebarItem";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModalState from "@/hooks/useLoginModalState";
import { signOut } from "next-auth/react";
import * as React from "react";
import { Bell, Grid, LogIn, LogOut, User } from "react-feather";

const items = [
  {
    label: "Feed",
    href: "/",
    icon: Grid,
    auth: false,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
    auth: true,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
    auth: true,
  },
];

function Sidebar() {
  const loginModalState = useLoginModalState();
  const { data: currentUser } = useCurrentUser();

  return (
    <div className="h-full px-2 shadow-sidebar md:px-6 bg-white">
      <div className="flex flex-col items-end">
        <div className="space-y-2 mx-auto">
          <Logo className="mb-2" />
          {items.map(({ href, label, icon, auth }) => (
            <SidebarItem key={href} href={href} label={label} icon={icon} auth={auth} />
          ))}

          {/* Logout */}
          {currentUser && (
            <div
              onClick={() => signOut()}
              className="flex cursor-pointer flex-row w-fit lg:w-auto mx-auto rounded-lg items-center text-[#4e5d78] bg-[#ffffff]"
            >
              <div className="relative rounded h-14 w-14 flex items-center justify-center p-4 lg:hidden">
                <LogOut size={28} color="#4e5d78" />
              </div>
              <div className="relative hidden lg:flex items-center gap-4 p-4 rounded">
                <LogOut size={28} color="#4e5d78" />
                <p className="hidden lg:block text-xl">Logout</p>
              </div>
            </div>
          )}

          {/* Login */}
          {!currentUser && (
            <div
              onClick={() => loginModalState.open()}
              className="flex cursor-pointer flex-row w-fit lg:w-auto mx-auto rounded-lg shadow-lg items-center bg-blue-700 text-white"
            >
              <div className="relative rounded h-14 w-14 flex items-center justify-center p-4 lg:hidden">
                <LogIn size={28} color="white" />
              </div>
              <div className="relative hidden lg:flex items-center gap-4 p-4 rounded">
                <LogIn size={28} color="white" />
                <p className="hidden lg:block text-xl">Login</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
