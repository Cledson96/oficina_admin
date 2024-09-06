"use client";
import Title from "@components/text/title";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Modal } from "antd";

import { useAuth } from "@context/auth";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
interface UserMenuProps {
  user: any;
}

export default function UserMenu({ user }: UserMenuProps) {
  const { logout } = useAuth();

  const confirm = () => {
    Modal.confirm({
      title: "Tem certeza que deseja sair?",
      icon: <ExclamationCircleOutlined />,
      onOk: async () => await logout(),
      okText: "Sair",
      cancelText: "Cancelar",
    });
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p onClick={confirm}>Sair</p>,
    },
  ];

  return (
    <>
      <div className="icon-menu">
        <Title
          text={`Olá,${user?.name}`}
          size={4}
          style={{ margin: "0px 10px 0px 0px" }}
        />

        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Avatar icon={<UserOutlined />} className=" cursor-pointer" />
        </Dropdown>
      </div>
    </>
  );
}
