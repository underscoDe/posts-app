import Logo from "@/components/Logo";
import SidebarItem from "@/components/layouts/SidebarItem";
import useLoginModalState from "@/hooks/useLoginModalState";
import * as React from "react";
import { Bell, Grid, LogIn, LogOut, User } from "react-feather";

const items = [
  {
    label: "Feed",
    href: "/",
    icon: Grid,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];

function Sidebar() {
  const loginModalState = useLoginModalState();
  return (
    <div className="h-full px-2 shadow-sidebar md:px-6 bg-white">
      <div className="flex flex-col items-end">
        <div className="space-y-2 mx-auto">
          <Logo className="mb-2" />
          {items.map(({ href, label, icon }) => (
            <SidebarItem key={href} href={href} label={label} icon={icon} />
          ))}

          {/* Login */}
          <div
            onClick={() => loginModalState.open()}
            className="flex cursor-pointer flex-row w-fit lg:w-auto mx-auto rounded-lg shadow-lg items-center bg-blue-700 text-white"
          >
            <div className="relative rounded h-14 w-14 flex items-center justify-center p-4 lg:hidden">
              <LogIn size={28} color="white" />
            </div>
            <div className="relative hidden lg:flex items-center gap-4 px-4 py-2 rounded">
              <LogIn size={28} color="white" />
              <p className="hidden lg:block text-xl">Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
