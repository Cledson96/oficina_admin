"use client";

import Title from "@components/text/title";

import { InputEmail, InputPassword } from "@/components/form/inputs";
import { Form, Row, Col, Layout, Card } from "antd";
import { ChangeEvent, useState } from "react";
import { useAuth } from "@context/auth";
import { openNotificationWithIcon } from "@utils/notificationUtil";
import { useRouter } from "next/navigation";
import Button from "@components/button/default";

interface credentials {
  email: string;
  senha: string;
}

export default function Page() {
  const router = useRouter();

  const { login } = useAuth();
  const [form] = Form.useForm();
  const [data, setData] = useState<credentials>({
    email: "",
    senha: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  async function sign() {
    setLoading(true);
    try {
      const response = await login(data.email, data.senha);
      if (response.success) {
        openNotificationWithIcon("success", "Login realizado com sucesso");
        setTimeout(() => {
          router.push("/", { scroll: false });
        }, 1000);
      } else {
        openNotificationWithIcon("error", "Dados incorretos");
      }
    } catch (error) {
      openNotificationWithIcon("error", "Dados incorretos");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout className="layout-default-login">
      <Card>
        <div>
          <Title
            text="Auto peças Bodnar"
            type="danger"
            style={{ margin: 0 }}
            size={1}
          />
        </div>
        <div className="mt-2 mb-5">
          <Title text="Faça seu login:" style={{ margin: 0 }} size={3} />
        </div>
        <Form form={form} layout="vertical" onFinish={sign}>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24}>
              <InputEmail
                name="email"
                label="EMAIL:"
                required
                config={{
                  onChange: (e: ChangeEvent<HTMLInputElement>) => change(e),
                  value: data.email,
                }}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24}>
              <InputPassword
                name="senha"
                label="SENHA:"
                required
                config={{
                  onChange: (e: ChangeEvent<HTMLInputElement>) => change(e),
                  value: data.senha,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Button
              type="primary"
              disabled={loading}
              loading={loading}
              htmlType="submit"
              className="button-login"
            >
              Entrar
            </Button>
          </Row>
        </Form>
      </Card>
    </Layout>
  );
}
