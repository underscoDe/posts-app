import Logo from "@/components/Logo";
import SidebarItem from "@/components/layouts/SidebarItem";
import * as React from "react";
import { Bell, Grid, LogOut, User } from "react-feather";

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
  return <div className="h-full px-2 shadow-sidebar md:px-6 bg-white">
    <div className="flex flex-col items-end">
      <div className="space-y-2 mx-auto">
        <Logo className="mb-2"/>
        {items.map(({href, label, icon}) => (
          <SidebarItem key={href} href={href} label={label} icon={icon} />
        ))}
      </div>
    </div>
  </div>;
}

export default Sidebar;
