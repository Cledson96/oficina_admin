"use client";
import { Form, Input, Select, Switch } from "antd";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

interface InputsProps {
  disabled?: boolean;
  label?: string | null;
  name: string;
  required?: boolean;
  message?: string;
  classLabel?: string;
  classInput?: string;
  multiple?: boolean;
  type?:
    | "string"
    | "email"
    | "date"
    | "password"
    | "select"
    | "textarea"
    | "upload"
    | "switch";
  config?: { [key: string]: any };
  selects?: { name: string; value: string }[];
  rows?: number;
}
export default function Inputs({
  label = null,
  name,
  config,
  required = false,
  message = "Obrigatório preencher corretamente",
  classLabel = "form-label-default",
  classInput = "default-input",
  type = "string",
  selects = [],
  disabled = false,
}: InputsProps) {
  const renderInputComponent = () => {
    switch (type) {
      case "string":
        return (
          <>
            <Form.Item
              label={label}
              name={name}
              rules={[
                {
                  message,
                  type: "string",
                },

                {
                  required,
                  message,
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
      case "email":
        return (
          <>
            <Form.Item
              label={label}
              name={name}
              rules={[
                {
                  message,
                  type: "email",
                },

                {
                  required,
                  message,
                },
              ]}
              labelCol={{ className: classLabel }}
            >
              <Input
                {...config}
                name={name}
                className={classInput}
                type="email"
              />
            </Form.Item>
          </>
        );
      case "password":
        return (
          <>
            <Form.Item
              label={label}
              name={name}
              rules={[
                {
                  required,
                  message,
                },
              ]}
              labelCol={{ className: classLabel }}
            >
              <Input.Password
                {...config}
                name={name}
                className={classInput}
                type="password"
              />
            </Form.Item>
          </>
        );
      case "select":
        return (
          <>
            <Form.Item
              label={label}
              name={name}
              rules={[
                {
                  required,
                  message,
                },
              ]}
              labelCol={{ className: classLabel }}
            >
              <Select {...config} className={classInput}>
                {selects.map((item) => {
                  return (
                    <Select.Option key={item.name} value={item.value}>
                      {item.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </>
        );
      case "switch":
        return (
          <>
            <Form.Item
              label={label}
              name={name}
              rules={[
                {
                  required,
                  message,
                },
              ]}
              labelCol={{ className: classLabel }}
            >
              <Switch {...config} className={classInput} />
            </Form.Item>
          </>
        );
      default:
        return (
          <>
            <Form.Item
              label={label}
              name={name}
              rules={[
                {
                  message,
                  type: "string",
                },

                {
                  required,
                  message,
                },
              ]}
              labelCol={{ className: classLabel }}
            >
              <Input
                {...config}
                name={name}
                className={classInput}
                type="string"
              />
            </Form.Item>
          </>
        );
    }
  };
  return <>{renderInputComponent()}</>;
}
