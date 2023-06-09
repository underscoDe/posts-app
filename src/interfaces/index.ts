import { InputHTMLAttributes } from "react";
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
  auth?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export interface ModalStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
