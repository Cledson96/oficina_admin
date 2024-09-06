"use client";
import { Layout, Menu } from "antd";
import { RxDashboard } from "react-icons/rx";

import { useState, useEffect } from "react";

import { LuFileBarChart } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { useConfig } from "@context/configs";
import logo from "@img/logo/logo_cortado.jpg";
import Image from "next/image";
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;

const items: MenuItem[] = [
  {
    key: "",
    icon: <RxDashboard />,
    label: "Dashboard",
  },
  {
    key: "inicio",
    icon: <LuFileBarChart />,
    label: "Tela Inicial",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const { collapsed } = useConfig();

  const [key, setKey] = useState<string[]>([""]);
  useEffect(() => {
    const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);

    if (lastSegment) {
      setKey([lastSegment]);
    }
  }, [pathname]);
  const select: MenuProps["onClick"] = (e) => {
    router.push(`/${e.key}`);
  };

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
      >
        <div className="logo-sidebar">
          <Image src={logo} alt="Logo" />
        </div>
        <Menu
          className="menu-admin"
          theme="light"
          mode="vertical"
          onClick={select}
          defaultSelectedKeys={key}
          items={items}
        />
      </Sider>
    </>
  );
}
