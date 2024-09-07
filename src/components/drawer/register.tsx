"use client";

import { Drawer } from "antd";

interface RegisterProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
  classTitle?: string;
  width?: number;
  close?: () => void;
}

export default function Register({
  open,
  setOpen,
  title,
  extra,
  children,
  classTitle = "text-default text-2xl font-bold",
  width = 400,
  close = () => setOpen(false),
}: RegisterProps) {
  return (
    <Drawer
      title={<span className={classTitle}>{title}</span>}
      onClose={close}
      open={open}
      extra={extra}
      width={width}
    >
      {children}
    </Drawer>
  );
}
