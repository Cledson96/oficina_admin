"use client";

import { Form, Input, InputProps } from "antd";

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
const InputEmail = ({
  label,
  name,
  required,
  message = "Obrigatório preencher o email corretamente",
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
            type: "email",
            required,
          },
        ]}
        labelCol={{ className: classLabel }}
      >
        <Input
          disabled={disabled}
          {...config}
          name={name}
          className={classInput}
          type="email"
        />
      </Form.Item>
    </>
  );
};

export default InputEmail;
