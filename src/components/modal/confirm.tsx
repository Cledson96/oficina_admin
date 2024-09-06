import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface ModalConfirmProps {
  text: string;
  onOK: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  okText?: string;
  cancelText?: string;
}

export default function ModalConfirm({
  text,
  onOK,
  open = false,
  setOpen,
  okText = "Sim",
  cancelText = "Cancelar",
}: ModalConfirmProps) {
  const render = () => {
    Modal.confirm({
      open,
      title: text,
      icon: <ExclamationCircleOutlined />,
      onOk: () => onOK(),
      onCancel: () => setOpen(false),
      okText: okText,
      cancelText: cancelText,
    });
  };
  return <>{open && render()}</>;
}
