"use client";
import { Typography } from "antd";

const { Title: AntdTitle } = Typography;

interface TitleProps {
  text: string;
  size?: 1 | 2 | 5 | 1 | 3 | 4 | 5 | undefined;
  style?: React.CSSProperties;
  config?: { [key: string]: any };
  type?: "secondary" | "warning" | "success" | "danger";
}

export default function Title({
  text,
  size = 2,
  style,
  config,
  type,
}: TitleProps) {
  return (
    <AntdTitle style={style} level={size} {...config} type={type}>
      {text}
    </AntdTitle>
  );
}
