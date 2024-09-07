"use client";
import { useState, ChangeEvent } from "react";
import { PlusOutlined } from "@ant-design/icons";
import Button from "@components/button/default";
import DrawerRegister from "@components/drawer/register";
import { postDicas } from "@/app/api/dicas";
import { openNotificationWithIcon } from "@utils/notificationUtil";
import {
  InputText,
  InputSwitch,
  InputTextArea,
  InputUpload,
} from "@components/form/inputs";
import { Form, Row, Col, Space } from "antd";

interface HeaderDicasProps {
  refresh: () => void;
}

interface dicasData {
  titulo: string;
  descricao: string;
  img: any;
  ativo: boolean;
}

const HeaderDicas = ({ refresh }: HeaderDicasProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [data, setData] = useState<dicasData>({
    titulo: "",
    descricao: "",
    img: "",
    ativo: true,
  });

  const reset = () => {
    form.resetFields();
    setData({
      titulo: "",
      descricao: "",
      img: "",
      ativo: true,
    });
  };
  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
    reset();
  };

  const register = async () => {
    await form.validateFields();
    setLoading(true);
    const formData = new FormData();

    formData.append("titulo", data.titulo);
    formData.append("descricao", data.descricao);
    formData.append("img", data.img);
    formData.append("ativo", data.ativo.toString());

    postDicas(formData)
      .then((response) => {
        if (response.success) {
          openNotificationWithIcon("success", "Dica cadastrada com sucesso");
          setOpen(false);
          refresh();
          reset();
        }
      })
      .catch((error) => {
        openNotificationWithIcon("error", "Erro ao cadastrar a dica");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const headerDrawer = () => {
    return (
      <Space>
        <Button type="gray" onClick={() => setOpen(false)}>
          Cancelar
        </Button>
        <Button
          disabled={loading}
          loading={loading}
          onClick={() => register()}
          type="success"
        >
          Cadastrar
        </Button>
      </Space>
    );
  };
  return (
    <>
      <div className="flex align-middle justify-between">
        <h1 className=" font-bold text-2xl">Dicas cadastradas</h1>
        <Button type="success" onClick={openDrawer} icon={<PlusOutlined />}>
          Cadastrar Dica
        </Button>
      </div>
      <DrawerRegister
        open={open}
        setOpen={setOpen}
        title="Cadastro de dica"
        width={550}
        extra={headerDrawer()}
        close={closeDrawer}
      >
        <div>
          <Form form={form} layout="vertical" onFinish={register}>
            <Row gutter={16}>
              <Col xs={18} sm={24} md={18}>
                <InputText
                  name="titulo"
                  message="Obrigatório preencher o título corretamente"
                  label="TÍTULO:"
                  required
                  config={{
                    onChange: (e: ChangeEvent<HTMLInputElement>) => change(e),
                    value: data.titulo,
                  }}
                />
              </Col>
              <Col xs={6} sm={24} md={6}>
                <InputSwitch
                  name="ativo"
                  label="Mostrar dica:"
                  config={{
                    onChange: (e: boolean) => setData({ ...data, ativo: e }),
                    value: data.ativo,
                    defaultChecked: data.ativo,
                    checkedChildren: "Ativado",
                    unCheckedChildren: "Desativado",
                  }}
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24}>
                <InputTextArea
                  name="descricao"
                  label="DESCRIÇÃO:"
                  required
                  rows={3}
                  config={{
                    onChange: (e: ChangeEvent<HTMLInputElement>) => change(e),
                    value: data.descricao,
                  }}
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24}>
                <InputUpload
                  name="img"
                  label="IMAGEM:"
                  typeFile={["imagem"]}
                  required
                  config={{
                    onChange: (e) =>
                      setData({ ...data, img: e.file.originFileObj }),
                  }}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </DrawerRegister>
    </>
  );
};

export default HeaderDicas;
