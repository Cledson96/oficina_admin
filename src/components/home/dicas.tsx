"use client";

import { useState, useEffect } from "react";

import { Image } from "antd";
import Button from "@components/button/default";

import Table from "@components/tables/default";
import HeaderDicas from "./headerDicas";
import type { GetProp, TableProps } from "antd";
import { getDicas } from "@/app/api/dicas";
type ColumnsType<T extends object> = GetProp<TableProps<T>, "columns">;
interface DataType {
  id: number;
  titulo: string;
  descricao: string;
  img: string;
}

export default function Dicas() {
  const [dicas, setDicas] = useState<DataType[]>([]);
  const [visible, setVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [activeRefresh, setRefresh] = useState(false);

  const activeImg = (url: string) => {
    setImgUrl(url);
    setVisible(true);
  };

  const refresh = () => {
    setRefresh(!activeRefresh);
  };

  useEffect(() => {
    getDicas()
      .then((response) => {
        if (response.success) {
          setDicas(response.data);
        }
      })
      .catch((error) => {
        console.log("Erro ao buscar as dicas 111");
        console.log(error);
      });
  }, [activeRefresh]);
  console.log(dicas, "dicas");
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Titulo",
      dataIndex: "titulo",
    },
    {
      title: "Descrição",
      dataIndex: "descricao",
    },
    {
      title: "Imagem",
      dataIndex: "img",
      render: (text: string) => (
        console.log(`http://localhost:5000/img/${text}`, "text"),
        (
          <Button
            type="primary"
            onClick={() => activeImg(`http://localhost:5000/img/${text}`)}
          >
            Ver Imagem
          </Button>
        )
      ),
    },
  ];

  return (
    <div>
      <Table<DataType>
        columns={columns}
        data={dicas}
        showTitle={() => <HeaderDicas refresh={refresh} />}
      />
      <Image
        style={{ display: "none" }}
        src={imgUrl}
        preview={{
          visible,
          src: imgUrl,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </div>
  );
}
