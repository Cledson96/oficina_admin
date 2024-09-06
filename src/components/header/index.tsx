"use client";
import { Button, Layout } from "antd";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import UserMenu from "./menu";
import { useConfig } from "@context/configs";
import { useAuth } from "@context/auth";

const { Header } = Layout;

export default function Headers() {
  const { collapsed, toggleCollapse } = useConfig();
  const { user } = useAuth();

  return (
    <>
      <Header className="header">
        <Button
          type="text"
          className="button-collapse"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined size={30} />
            ) : (
              <MenuFoldOutlined size={30} />
            )
          }
          onClick={() => toggleCollapse()}
        />
        <UserMenu user={user} />
      </Header>
    </>
  );
}
