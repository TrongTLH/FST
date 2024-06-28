import React, { useState } from "react";
import { WrapperBox1 } from "./style";
import { Dropdown, Space, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";

const TableComponent = (props) => {
  const { selectionType = "checkbox", data = [], columns = [],handleDeleteMany } = props;
  const [rowSelectedKeys, setRowSelectedKeys] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSelectedKeys(selectedRowKeys);
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === "Disabled User",

    //   name: record.name,
    // }),
  };
  const handleDeleteAll = () => {
    handleDeleteMany(rowSelectedKeys)
  };
  return (
    <>
      {rowSelectedKeys.length > 0 && (
        <div
          onClick={handleDeleteAll}
          style={{
            background: "#e5e7eb",
            width: "750px",
            margin: "0 auto",
            padding: "10px 0",
            borderRadius: "10px",
            cursor: "pointer",
            marginTop: "42px",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
            }}
          >
            {" "}
            Delete All
          </h1>
        </div>
      )}

      <WrapperBox1>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          {...props}
        />
      </WrapperBox1>
    </>
  );
};

export default TableComponent;
