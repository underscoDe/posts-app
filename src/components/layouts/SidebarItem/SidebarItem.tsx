import { SidebarItemProps } from "@/interfaces";
import { useRouter } from "next/router";
import * as React from "react";

function SidebarItem({
  label,
  href,
  icon: ItemIcon,
  onClick,
}: SidebarItemProps) {
  const router = useRouter()

  const itemBgColor = router.pathname === href ? 'bg-[#4e5d78]' : 'bg-[#ffffff]';
  const itemTextColor = router.pathname === href ? 'text-[#ffffff]' : 'text-[#4e5d78]';
  const iconColor = router.pathname === href ? '#ffffff' : '#4e5d78';

  return (
    <div className={`flex flex-row w-fit lg:w-auto mx-auto rounded-lg items-center ${itemBgColor} ${itemTextColor}`}>
      <div className="relative rounded h-14 w-14 flex items-center justify-center p-4 lg:hidden">
        <ItemIcon size={28} color={iconColor} />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded">
        <ItemIcon size={28} color={iconColor} />
        <p className="hidden lg:block text-xl">{label}</p>
      </div>
    </div>
  );
}

export default SidebarItem;
