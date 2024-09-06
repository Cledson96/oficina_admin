"use client";

import type { GetProp, TableProps } from "antd";
import { Table } from "antd";

type SizeType = TableProps["size"];
type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;
type TablePagination<T extends object> = NonNullable<
  Exclude<TableProps<T>["pagination"], boolean>
>;
type TablePaginationPosition = NonNullable<
  TablePagination<any>["position"]
>[number];
type ExpandableConfig<T extends object> = TableProps<T>["expandable"];
type TableRowSelection<T extends object> = TableProps<T>["rowSelection"];

interface DefaultTableProps<T extends object> {
  bordered?: boolean;
  loading?: boolean;
  size?: SizeType;
  expandable?: ExpandableConfig<T>;
  showTitle?: () => JSX.Element | string;
  showHeader?: boolean;
  showFooter?: () => string;
  rowSelection?: TableRowSelection<T>;
  hasData?: boolean;
  tableLayout?: any;
  top?: TablePaginationPosition;
  bottom?: TablePaginationPosition;
  ellipsis?: boolean;
  yScroll?: boolean;
  xScroll?: string;
  columns: ColumnsType<T>;
  data: T[];
}

export default function DefaultTable<T extends object>({
  bordered = false,
  loading = false,
  size = "large",
  expandable = undefined,
  showTitle = undefined,
  showHeader = true,
  showFooter = undefined,
  rowSelection = undefined,
  hasData = true,
  tableLayout,
  top = "none",
  bottom = "bottomRight",
  ellipsis = false,
  yScroll = false,
  xScroll,
  columns,
  data,
}: DefaultTableProps<T>) {
  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis }));
  if (xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  const tableProps: TableProps<T> = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ?? undefined,
    showHeader,
    footer: showFooter ?? undefined,
    rowSelection,
    scroll,
    tableLayout,
  };

  return (
    <Table
      {...tableProps}
      pagination={{ position: [top, bottom] }}
      columns={tableColumns}
      dataSource={hasData ? data : []}
      scroll={scroll}
    />
  );
}
