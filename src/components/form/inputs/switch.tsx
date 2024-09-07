"use client";

import { Form, Switch, SwitchProps } from "antd";

interface InputsProps {
  disabled?: boolean;
  label?: string | null;
  name: string;
  classLabel?: string;
  classInput?: string;
  config: SwitchProps;
}
const InputSwitch = ({
  label,
  name,
  config,
  classLabel,
  classInput,
  disabled,
}: InputsProps) => {
  return (
    <>
      <Form.Item label={label} name={name} labelCol={{ className: classLabel }}>
        <Switch disabled={disabled} {...config} className={classInput} />
      </Form.Item>
    </>
  );
};

export default InputSwitch;
