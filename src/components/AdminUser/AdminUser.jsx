import React, { useEffect, useRef, useState } from "react";
import { WrapperBox, WrapperText } from "./style";
import { Button, Form, Input, Modal, Space } from "antd";
import {
  DeleteFilled,
  EditFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import * as UserService from "../../services/UserService";
import TableComponent from "../TableComponent/TableComponent";
import TextArea from "antd/es/input/TextArea";
import { WrapperImg } from "../../pages/Profile";
import { useSelector } from "react-redux";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { useQuery } from "@tanstack/react-query";
import * as message from "../../components/Message/Message";
import { getBase64 } from "../../utils";
import { useForkRef } from "@mui/material";
const AdminUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const user = useSelector((state) => state?.user);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [stateUserDetails, setStateUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    isAdmin: false,
    avatar: "",
    address: "",
  });
  const getAllUsers = async () => {
    const res = await UserService.getAllUser();
    console.log("res", res);
    return res;
  };
  const fetchGetDetailsUser = async (rowSelected) => {
    const res = await UserService.getDetailsUser(rowSelected);
    if (res?.data) {
      setStateUserDetails({
        name: res?.data?.name,
        email: res?.data?.email,
        phone: res?.data?.phone,
        isAdmin: res?.data?.isAdmin,
        address: res?.data?.address,
        avatar: res?.data?.avatar,
      });
    }
  };
  useEffect(() => {
    form2.setFieldsValue(stateUserDetails);
  }, [form2, stateUserDetails]);

  useEffect(() => {
    if (rowSelected && isModalOpen2) {
      fetchGetDetailsUser(rowSelected);
    }
  }, [rowSelected, isModalOpen2]);
  console.log("stateUserDetails", stateUserDetails);

  const handleDetailsUser = () => {
    setIsModalOpen2(true);
  };
  console.log("rowSelected", rowSelected);

  const mutationUpdate = useMutationHooks((data) => {
    console.log("DATA", data);
    const { id, token, ...rests } = data;
    const res = UserService.updateUser(id, { ...rests }, token);
    return res;
  });
  const handleDeleteManyUsers = (ids) => {
    mutationDeletedMany.mutate(
      { ids: ids, token: user?.access_token },
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
  };
  const mutationDeletedMany = useMutationHooks((data) => {
    const { token, ...ids } = data;
    const res = UserService.deleteManyUser(ids, token);
    return res;
  });
  const mutationDelete = useMutationHooks((data) => {
    const { id, token } = data;
    const res = UserService.deleteUser(id, token);
    return res;
  });
  const {
    data: dataUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  const {
    data: dataDeleted,
    isSuccess: isSuccessDeleted,
    isError: isErrorDeleted,
  } = mutationDelete;

  const {
    data: dataDeletedMany,
    isSuccess: isSuccessDeletedMany,
    isError: isErrorDeletedMany,
  } = mutationDeletedMany;
  const queryUser = useQuery({
    queryKey: ["user"],
    queryFn: getAllUsers,
  });
  const { data: users } = queryUser;
  const renderAction = () => {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <DeleteFilled
          style={{ fontSize: "20px", color: "#dc3545", cursor: "pointer" }}
          onClick={() => setIsOpenModalDelete(true)}
        />
        <EditFilled
          style={{ fontSize: "20px", color: "#ffdf40" }}
          onClick={handleDetailsUser}
        />
      </div>
    );
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ''}
    //     />
    //   ) : (
    //     text
    //   ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps("name"),
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      ...getColumnSearchProps("email"),
    },

    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      ...getColumnSearchProps("address"),
    },

    {
      title: "IsAdmin",
      dataIndex: "isAdmin",
      filters: [
        {
          text: "True",
          value: "true",
        },
        {
          text: "False",
          value: "false",
        },
      ],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone - b.phone,
    },

    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const dataTable =
    users?.data?.length &&
    users?.data?.map((user) => {
      return {
        ...user,
        key: user._id,
        isAdmin: user.isAdmin ? "TRUE" : "FALSE",
      };
    });
  console.log("products", users);

  useEffect(() => {
    if (isSuccessDeleted && dataDeleted?.status === "OK") {
      message.success();
      handleCloseModalDelete();
    } else if (isErrorDeleted) {
      message.error();
    }
  }, [isSuccessDeleted]);

  useEffect(() => {
    if (isSuccessDeletedMany && dataDeletedMany?.status === "OK") {
      message.success();
    } else if (isErrorDeletedMany) {
      message.error();
    }
  }, [isSuccessDeletedMany]);

  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      handleCancelModal2();
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);

  const handleOk = () => {
    form.submit();
  };
  const handleOk2 = () => {
    form2.submit();
  };

  const handleCancelModal2 = () => {
    setIsModalOpen2(false);
    setStateUserDetails({
      name: "",
      email: "",
      phone: "",
      isAmin: false,
    });
    form2.resetFields();
  };

  const handleOnChangeDetails = (e) => {
    console.log("check", e.target.name, e.target.value);
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateUserDetails({
      ...stateUserDetails,
      avatar: file.preview,
    });
  };
  const onUpdateUser = () => {
    mutationUpdate.mutate(
      {
        id: rowSelected,
        token: user?.access_token,
        ...stateUserDetails,
      },
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
  };
  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false);
  };
  const handleOkDeleteUser = () => {
    mutationDelete.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
  };
  return (
    <div>
      <WrapperBox>
        <Button
          // onClick={() => setIsModalOpen(true)}
          style={{
            background: "#000",
            color: "#fff",
            borderRadius: "7px",
            marginTop: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
          type="primary"
        >
          <span style={{ padding: "0 3px" }}></span> User Management
        </Button>
      </WrapperBox>

      <div>
        <TableComponent
          handleDeleteMany={handleDeleteManyUsers}
          columns={columns}
          data={dataTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              },
            };
          }}
        />
      </div>

      <Modal title="User Management" open={isModalOpen} onOk={handleOk}>
        <Form form={form} labelCol={{ span: 24 }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input user name!" }]}
          >
            <Input name="name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input email user!" }]}
          >
            <Input name="email" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input phone user!" }]}
          >
            <Input name="phone" />
          </Form.Item>
          {/* 
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please upload image of product!",
              },
            ]}
          >
            <WrapperImg maxCount={1} onChange={handleOnChangeAvatar}>
              <div style={{ display: "flex", gap: "20px" }}>
                <Button>Select File</Button>
                {stateUser?.image && (
                  <img
                    src={stateUser?.image}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="avatar"
                  ></img>
                )}
              </div>
            </WrapperImg>
          </Form.Item> */}
        </Form>
      </Modal>

      <Modal
        title="User Details"
        open={isModalOpen2}
        onCancel={handleCancelModal2}
        onOk={handleOk2}
      >
        <Form form={form2} labelCol={{ span: 24 }} onFinish={onUpdateUser}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input user name!" }]}
          >
            <Input
              value={stateUserDetails.name}
              onChange={handleOnChangeDetails}
              name="name"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input user email!" }]}
          >
            <Input
              value={stateUserDetails.email}
              onChange={handleOnChangeDetails}
              name="email"
            />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input phone of user!" }]}
          >
            <Input
              value={stateUserDetails.phone}
              onChange={handleOnChangeDetails}
              name="phone"
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              { required: true, message: "Please input address of user!" },
            ]}
          >
            <Input
              value={stateUserDetails.address}
              onChange={handleOnChangeDetails}
              name="address"
            />
          </Form.Item>

          <Form.Item
            label="Avatar"
            name="avatar"
            rules={[
              {
                required: true,
                message: "Please upload avatar of product!",
              },
            ]}
          >
            <WrapperImg maxCount={1} onChange={handleOnChangeAvatarDetails}>
              <div style={{ display: "flex", gap: "20px" }}>
                <Button>Select File</Button>
                {stateUserDetails?.avatar && (
                  <img
                    src={stateUserDetails?.avatar}
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    alt="avatar"
                  ></img>
                )}
              </div>
            </WrapperImg>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete User"
        open={isOpenModalDelete}
        onCancel={handleCloseModalDelete}
        onOk={handleOkDeleteUser}
      >
        <div>Do you want to delete this user?</div>
      </Modal>
    </div>
  );
};

export default AdminUser;
