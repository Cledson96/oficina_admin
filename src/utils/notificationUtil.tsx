import { notification } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

export const openNotificationWithIcon = (
  type: NotificationType,
  message: string,
  description?: string,
  duration?: 3
) => {
  notification[type]({
    message,
    description,
    duration: duration,
    showProgress: true,
  });
};
