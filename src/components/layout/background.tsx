import { Layout } from "antd";
import { ReactNode } from "react";
const { Content } = Layout;

interface BackgroundProps {
  children: ReactNode;
}
export default function Background({ children }: BackgroundProps) {
  return (
    <>
      <Content
        style={{
          padding: 14,
          margin: 0,
          marginTop: 8,
          minHeight: 280,
          background: "white",
          borderRadius: "10px",
        }}
      >
        {children}
      </Content>
    </>
  );
}
