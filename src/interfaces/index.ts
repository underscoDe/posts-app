import { Icon } from "react-feather";

export interface LogoProps {
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface SidebarItemProps {
  label: string;
  href?: string;
  icon: Icon;
  onClick?: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
