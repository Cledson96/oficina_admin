import { Button, ButtonProps, ConfigProvider } from "antd";
import { createStyles } from "antd-style";
import React from "react";

type CustomButtonProps = Omit<ButtonProps, "type"> & {
  type?:
    | "primary"
    | "dashed"
    | "link"
    | "text"
    | "default"
    | "success"
    | "gray"
    | "error";
};

const useStyle = createStyles(({ prefixCls, css }) => ({
  successButton: css`
    &.${prefixCls}-btn-success {
      background-color: #52c41a;
      border-color: #52c41a;
      color: white;
    }
  `,
  errorButton: css`
    &.${prefixCls}-btn-error {
      background-color: #ff4d4f;
      border-color: #ff4d4f;
      color: white;
    }
  `,
  grayButton: css`
    &.${prefixCls}-btn-gray {
      background-color: #bebcbc;
      border-color: #9c9a9a;
      color: black;
    }
  `,
}));

export default function CustomButton({
  type = "primary",
  children,
  ...rest
}: CustomButtonProps): JSX.Element {
  const { styles } = useStyle();

  let className = "";

  switch (type) {
    case "success":
      className = styles.successButton;
      break;
    case "error":
      className = styles.errorButton;
      break;
    case "gray":
      className = styles.grayButton;
      break;
    default:
      className = "";
      break;
  }

  return (
    <ConfigProvider
      button={{
        className: className || undefined,
      }}
    >
      <Button type={type as any} {...rest}>
        {children}
      </Button>
    </ConfigProvider>
  );
}
