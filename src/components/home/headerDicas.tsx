"use client";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import Button from "@components/button/default";
import DrawerRegister from "@components/drawer/register";
const HeaderDicas = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="flex align-middle justify-between">
        <h1 className=" font-bold text-2xl">Dicas cadastradas</h1>
        <Button type="primary" onClick={openDrawer} icon={<PlusOutlined />}>
          Cadastrar Dica
        </Button>
      </div>
      <DrawerRegister open={open} setOpen={setOpen} title="Cadastro de dica">
        <h1>Cadastrar Dica</h1>
      </DrawerRegister>
    </>
  );
};

export default HeaderDicas;
