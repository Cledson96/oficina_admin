import { Form, Input } from "antd";
const { TextArea } = Input;

interface InputsProps {
  disabled?: boolean;
  label?: string | null;
  name: string;
  required?: boolean;
  message?: string;
  classLabel?: string;
  classInput?: string;
  config?: { [key: string]: any };
  rows?: number;
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
  rows = 1,
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
        <TextArea
          disabled={disabled}
          rows={rows}
          {...config}
          name={name}
          className={classInput}
        />
      </Form.Item>
    </>
  );
};

export default InputText;
