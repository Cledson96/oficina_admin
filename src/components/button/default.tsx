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
}));

export default function CustomButton({
  type = "primary",
  children,
  ...rest
}: CustomButtonProps): JSX.Element {
  const { styles } = useStyle();

  let className = "";

  if (type === "success") {
    className = styles.successButton;
  } else if (type === "error") {
    className = styles.errorButton;
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
