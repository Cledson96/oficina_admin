"use client";

import { Drawer } from "antd";

interface RegisterProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
}

export default function Register({
  open,
  setOpen,
  title,
  extra,
  children,
}: RegisterProps) {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer title={title} onClose={onClose} open={open} extra={extra}>
      {children}
    </Drawer>
  );
}
