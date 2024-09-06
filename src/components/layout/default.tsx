import { Layout } from "antd";
import Header from "@components/header";
import Sidebar from "@components/sidebar";
import { ReactNode } from "react";
const { Content } = Layout;

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Layout hasSider className="layout-default">
      <Sidebar />
      <Layout>
        <Header />
        <Content
          style={{
            margin: "5px 16px",
            padding: 10,
            minHeight: 280,
          }}
        >
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
}
