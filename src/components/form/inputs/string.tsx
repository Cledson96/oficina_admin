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
const InputText = ({
  label,
  name,
  required,
  message = "Obrigatório preencher corretamente",
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
            type: "string",
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
          type="string"
        />
      </Form.Item>
    </>
  );
};

export default InputText;
