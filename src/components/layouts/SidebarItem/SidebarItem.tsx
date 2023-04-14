import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModalState from "@/hooks/useLoginModalState";
import { SidebarItemProps } from "@/interfaces";
import { useRouter } from "next/router";
import * as React from "react";

function SidebarItem({
  label,
  href,
  icon: ItemIcon,
  onClick = () => {},
  auth,
}: SidebarItemProps) {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();
  const loginModalState = useLoginModalState();

  const onItemClick = () => {
    if (auth && !currentUser) {
      loginModalState.open();
    } else {
      onClick();
    }
  };

  const colors = {
    itemBgColor: router.pathname === href ? "bg-[#4e5d78]" : "bg-[#ffffff]",
    itemTextColor: router.pathname === href ? "text-[#ffffff]" : "text-[#4e5d78]",
    iconColor: router.pathname === href ? "#ffffff" : "#4e5d78",
  };

  if (href === "/" && !currentUser) {
    colors.itemBgColor = "bg-[#ffffff]";
    colors.itemTextColor = "text-[#4e5d78]";
    colors.iconColor = "#4e5d78";
  }

  return (
    <div
      onClick={onItemClick}
      className={`flex cursor-pointer flex-row w-fit lg:w-auto mx-auto rounded-lg items-center ${colors.itemBgColor} ${colors.itemTextColor} ${(href === "/" && !currentUser) && 'border'}`}
    >
      <div className="relative rounded h-14 w-14 flex items-center justify-center p-4 lg:hidden">
        <ItemIcon size={28} color={colors.iconColor} />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded">
        <ItemIcon size={28} color={colors.iconColor} />
        <p className="hidden lg:block text-xl">{label}</p>
      </div>
    </div>
  );
}

export default SidebarItem;
