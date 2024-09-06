"use client";
import Background from "@components/layout/background";
import { RxDashboard } from "react-icons/rx";
import Title from "@components/text/title";

import { Card, Col, Row, Avatar } from "antd";
export default function Home() {
  return (
    <>
      <Title text="Início" />
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
          <Title text="Em construção" style={{ color: "#89888a" }} />
        </div>
      </Background>
    </>
  );
}
