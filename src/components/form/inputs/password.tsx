"use client";

import { Form, Input, InputProps } from "antd";

const { Password } = Input;

interface InputsProps {
  disabled?: boolean;
  label?: string | null;
  name: string;
  required?: boolean;
  message?: string;
  classLabel?: string;
  classInput?: string;
  config: InputProps;
}
const InputPassword = ({
  label,
  name,
  required,
  message = "Obrigatório preencher a senha corretamente",
  config,
  classLabel,
  classInput,
  disabled,
}: InputsProps) => {
  return (
    <>
      <Form.Item
        label={label}
        name={name}
        rules={[
          {
            message,
            required,
          },
        ]}
        labelCol={{ className: classLabel }}
      >
        <Password
          disabled={disabled}
          {...config}
          name={name}
          className={classInput}
          type="password"
        />
      </Form.Item>
    </>
  );
};

export default InputPassword;
