"use client";

import {
  Form,
  Upload,
  UploadProps,
  UploadFile,
  GetProp,
  message as messageUpload,
} from "antd";
import Button from "@components/button/default";
import { UploadOutlined } from "@ant-design/icons";

type file = "imagem" | "pdf";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface InputsProps {
  disabled?: boolean;
  label?: string | null;
  name: string;
  required?: boolean;
  message?: string;
  classLabel?: string;
  classInput?: string;
  config: UploadProps;
  typeFile?: file[];
  listType?: "picture-card" | "text" | "picture" | "picture-circle";
  multiple?: boolean;
  maxCount?: number;
  button?: JSX.Element;
}

const InputUpload = ({
  label,
  name,
  required,
  message = "Obrigatório preencher corretamente",
  config,
  classLabel,
  classInput,
  disabled,
  typeFile = ["imagem", "pdf"],
  multiple = false,
  listType = "picture",
  maxCount = 5,
  button = <Button icon={<UploadOutlined />}>Clique para upload</Button>,
}: InputsProps) => {
  const types = {
    imagem: ["image/jpeg", "image/png"],
    pdf: ["application/pdf"],
  };

  const ajust = typeFile.map((ref) => types[ref]);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    const aproveFile = e?.file;
    const isType = ajust.some((ref) => ref.includes(aproveFile.type));

    if (!isType) {
      const list = e?.fileList.filter(
        (ref: UploadFile) => ref.uid !== aproveFile.uid
      );
      return list;
    }
    return e?.fileList;
  };

  const beforeUpload = (file: FileType) => {
    const isType = ajust.some((ref) => ref.includes(file.type));

    if (!isType) {
      messageUpload.error(
        `Obrigatório ser arquivo do tipo
         ${typeFile.map((ref, index) => {
           if (typeFile.length > 0) {
             if (index === 0) {
               return ref;
             } else {
               return ` ou ${ref}`;
             }
           }
           return ref;
         })}
       }!`
      );
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      messageUpload.error("O tamanho do arquivo não pode ultrapassar 5MB!");
    }

    return isType && isLt2M;
  };
  return (
    <>
      <Form.Item
        valuePropName="fileList"
        getValueFromEvent={normFile}
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
        <Upload
          disabled={disabled}
          {...config}
          name={name}
          className={classInput}
          multiple={multiple}
          maxCount={multiple ? maxCount : 1}
          listType={listType}
          beforeUpload={beforeUpload}
        >
          {button}
        </Upload>
      </Form.Item>
    </>
  );
};

export default InputUpload;
