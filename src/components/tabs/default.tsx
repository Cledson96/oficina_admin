"use client";

import { Tabs } from "antd";
import type { TabsProps } from "antd";

interface Props {
  items: TabsProps["items"];
  defaultActiveKey?: string;
  type?: "line" | "card" | "editable-card";
  size?: "small" | "middle" | "large";
}

export default function TabsDefault({
  items,
  defaultActiveKey = "1",
  type = "card",
  size = "large",
}: Props) {
  return (
    <Tabs
      defaultActiveKey={defaultActiveKey}
      items={items}
      type={type}
      size={size}
    />
  );
}
