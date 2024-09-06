"use client";
import Background from "@components/layout/background";
import Tab from "@components/tabs/default";
import Dicas from "@components/home/dicas";
import { RxDashboard } from "react-icons/rx";
import Title from "@components/text/title";

import type { TabsProps } from "antd";
import { Card, Col, Row, Avatar } from "antd";

export default function Home() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Dicas",
      children: <Dicas />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: <Dicas />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: <Title text="Em construção" style={{ color: "#89888a" }} />,
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <Title text="Tela inicial" />
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Card bordered={false} className="ajust">
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={18}>
                  <span style={{ color: "#8c8c8c" }}>Projetos cadastrados</span>
                  <Title text="7" size={3} />
                </Col>
                <Col xs={6}>
                  <Avatar
                    shape="square"
                    size={50}
                    icon={<RxDashboard />}
                    style={{ backgroundColor: "#e79418" }}
                  />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Card bordered={false} className="ajust">
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={18}>
                  <span style={{ color: "#8c8c8c" }}>Projetos cadastrados</span>
                  <Title text="7" size={3} />
                </Col>
                <Col xs={6}>
                  <Avatar
                    shape="square"
                    size={50}
                    icon={<RxDashboard />}
                    style={{ backgroundColor: "#e79418" }}
                  />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Card bordered={false} className="ajust">
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={18}>
                  <span style={{ color: "#8c8c8c" }}>Projetos cadastrados</span>
                  <Title text="7" size={3} />
                </Col>
                <Col xs={6}>
                  <Avatar
                    shape="square"
                    size={50}
                    icon={<RxDashboard />}
                    style={{ backgroundColor: "#e79418" }}
                  />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Card bordered={false} className="ajust">
            <div className="number">
              <Row align="middle" gutter={[24, 0]}>
                <Col xs={18}>
                  <span style={{ color: "#8c8c8c" }}>Projetos cadastrados</span>
                  <Title text="7" size={3} />
                </Col>
                <Col xs={6}>
                  <Avatar
                    shape="square"
                    size={50}
                    icon={<RxDashboard />}
                    style={{ backgroundColor: "#e79418" }}
                  />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
      <Background>
        <div className="build">
          {/*  <Title text="Em construção" style={{ color: "#89888a" }} /> */}
          <Tab defaultActiveKey="1" items={items} />
        </div>
      </Background>
    </>
  );
}
