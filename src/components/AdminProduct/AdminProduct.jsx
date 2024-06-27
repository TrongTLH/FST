import React, { useEffect, useRef, useState } from "react";
import { WrapperBox } from "./style";
import { Button, Form, Input, Modal, Space } from "antd";
import TableComponent from "../TableComponent/TableComponent";
import {
  DeleteFilled,
  EditFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
import { WrapperImg } from "../../pages/Profile";
import { getBase64 } from "../../utils";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as ProductService from "../../services/ProductService";
import * as message from "../../components/Message/Message";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const AdminProduct = () => {
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
  const [stateProduct, setStateProduct] = useState({
    name: "",
    price: "",
    description: "",
    rating: "",
    image: "",
    type: "",
    countInStock: "",
  });
  const [stateProductDetails, setStateProductDetails] = useState({
    name: "",
    price: "",
    description: "",
    rating: "",
    image: "",
    type: "",
    countInStock: "",
  });
  const getAllProduct = async () => {
    const res = await ProductService.getAllProduct();
    console.log("res", res);
    return res;
  };
  const fetchGetDetailsProduct = async (rowSelected) => {
    const res = await ProductService.getDetailsProduct(rowSelected);
    console.log("res", res);
    if (res?.data) {
      setStateProductDetails({
        name: res?.data?.name,
        price: res?.data?.price,
        description: res?.data?.description,
        rating: res?.data?.rating,
        image: res?.data?.image,
        type: res?.data?.type,
        countInStock: res?.data?.countInStock,
      });
    }
  };
  useEffect(() => {
    form2.setFieldsValue(stateProductDetails);
  }, [form2, stateProductDetails]);
  useEffect(() => {
    if (rowSelected && isModalOpen2) {
      fetchGetDetailsProduct(rowSelected);
    }
  }, [rowSelected, isModalOpen2]);
  console.log("StateProductDetails", stateProductDetails);

  const handleDetailsProduct = () => {
    setIsModalOpen2(true);
  };

  const mutation = useMutationHooks((data) => {
    const { name, price, description, rating, image, type, countInStock } =
      data;
    const res = ProductService.createProduct({
      name,
      price,
      description,
      rating,
      image,
      type,
      countInStock,
    });
    return res;
  });
  console.log("rowSelected", rowSelected);
  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    const res = ProductService.updateProduct(id, token, { ...rests });
    return res;
  });
  const mutationDelete = useMutationHooks((data) => {
    const { id, token } = data;
    const res = ProductService.deleteProduct(id, token);
    return res;
  });

  const mutationDeletedMany = useMutationHooks((data) => {
    const { token, ...ids } = data;
    const res = ProductService.deleteManyProduct(ids, token);
    return res;
  });
  console.log("mutationDeletedMany", mutationDeletedMany);

  const handleDeleteManyProduct = (ids) => {
    mutationDeletedMany.mutate(
      { ids: ids, token: user?.access_token },
      {
        onSettled: () => {
          queryProduct.refetch();
        },
      }
    );
  };
  const { data, isSuccess, isError } = mutation;
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

  console.log("dataUpdated", dataUpdated);
  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });
  const { data: products } = queryProduct;
  const renderAction = () => {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <DeleteFilled
          style={{ fontSize: "20px", color: "#dc3545", cursor: "pointer" }}
          onClick={() => setIsOpenModalDelete(true)}
        />
        <EditFilled
          style={{ fontSize: "20px", color: "#ffdf40" }}
          onClick={handleDetailsProduct}
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
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      filters: [
        {
          text: ">= 200",
          value: ">=",
        },
        {
          text: "<= 200",
          value: "<=",
        },
      ],
      onFilter: (value, record) => {
        if (value === ">=") {
          return record.price >= 200;
        }
        return record.price <= 200;
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
      filters: [
        {
          text: ">= 3",
          value: ">=",
        },
        {
          text: "<= 2",
          value: "<=",
        },
      ],
      onFilter: (value, record) => {
        if (value === ">=") {
          return Number(record.rating) >= 3;
        }
        return Number(record.rating) <= 2;
      },
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const dataTable =
    products?.data?.length &&
    products?.data?.map((product) => {
      return {
        ...product,
        key: product._id,
      };
    });
  console.log("products", products);
  console.log("data", data);

  useEffect(() => {
    if (isSuccess && data?.status === "OK") {
      message.success();
      handleCancelModal();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessDeletedMany && dataDeletedMany?.status === "OK") {
      message.success();
    } else if (isErrorDeletedMany) {
      message.error();
    }
  }, [isSuccessDeletedMany]);

  useEffect(() => {
    if (isSuccessDeleted && dataDeleted?.status === "OK") {
      message.success();
      handleCloseModalDelete();
    } else if (isErrorDeleted) {
      message.error();
    }
  }, [isSuccessDeleted]);

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
  const onFinish = () => {
    mutation.mutate(stateProduct, {
      onSettled: () => {
        queryProduct.refetch();
      },
    });
  };
  const handleCancelModal = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: "",
      price: "",
      description: "",
      rating: "",
      image: "",
      type: "",
      countInStock: "",
    });
    form.resetFields();
  };
  const handleCancelModal2 = () => {
    setIsModalOpen2(false);
    setStateProductDetails({
      name: "",
      price: "",
      description: "",
      rating: "",
      image: "",
      type: "",
      countInStock: "",
    });
    form2.resetFields();
  };
  const handleOnChange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChangeDetails = (e) => {
    console.log("check", e.target.name, e.target.value);
    setStateProductDetails({
      ...stateProductDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview,
    });
  };
  const handleOnChangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image: file.preview,
    });
  };
  const onUpdateProduct = () => {
    mutationUpdate.mutate(
      {
        id: rowSelected,
        token: user?.access_token,
        ...stateProductDetails,
      },
      {
        onSettled: () => {
          queryProduct.refetch();
        },
      }
    );
  };
  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false);
  };
  const handleOkDeleteProduct = () => {
    mutationDelete.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryProduct.refetch();
        },
      }
    );
  };
  return (
    <div>
      <WrapperBox>
        <Button
          onClick={() => setIsModalOpen(true)}
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
          <span style={{ padding: "0 3px" }}>
            <PlusOutlined />
          </span>{" "}
          Add new Product
        </Button>
      </WrapperBox>

      <div>
        <TableComponent
          handleDeleteMany={handleDeleteManyProduct}
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

      <Modal
        title="Create Product"
        open={isModalOpen}
        onCancel={handleCancelModal}
        onOk={handleOk}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={onFinish}>
          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input
              value={stateProduct.name}
              onChange={handleOnChange}
              name="name"
            />
          </Form.Item>

          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: "Please input product type!" }]}
          >
            <Input
              value={stateProduct.type}
              onChange={handleOnChange}
              name="type"
            />
          </Form.Item>

          <Form.Item
            label="CountInStock"
            name="countInStock"
            rules={[{ required: true, message: "Please input countInStock!" }]}
          >
            <Input
              value={stateProduct.countInStock}
              onChange={handleOnChange}
              name="countInStock"
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price product!" }]}
          >
            <Input
              value={stateProduct.price}
              onChange={handleOnChange}
              name="price"
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              { required: true, message: "Please input rating of product!" },
            ]}
          >
            <Input
              value={stateProduct.rating}
              onChange={handleOnChange}
              name="rating"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description of product!",
              },
            ]}
          >
            <TextArea
              rows={3}
              value={stateProduct.description}
              onChange={handleOnChange}
              name="description"
            />
          </Form.Item>

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
                {stateProduct?.image && (
                  <img
                    src={stateProduct?.image}
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
        title="Product Details"
        open={isModalOpen2}
        onCancel={handleCancelModal2}
        onOk={handleOk2}
      >
        <Form form={form2} labelCol={{ span: 24 }} onFinish={onUpdateProduct}>
          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input
              value={stateProductDetails.name}
              onChange={handleOnChangeDetails}
              name="name"
            />
          </Form.Item>

          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: "Please input product type!" }]}
          >
            <Input
              value={stateProductDetails.type}
              onChange={handleOnChangeDetails}
              name="type"
            />
          </Form.Item>

          <Form.Item
            label="CountInStock"
            name="countInStock"
            rules={[{ required: true, message: "Please input countInStock!" }]}
          >
            <Input
              value={stateProductDetails.countInStock}
              onChange={handleOnChangeDetails}
              name="countInStock"
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input price product!" }]}
          >
            <Input
              value={stateProductDetails.price}
              onChange={handleOnChangeDetails}
              name="price"
            />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              { required: true, message: "Please input rating of product!" },
            ]}
          >
            <Input
              value={stateProductDetails.rating}
              onChange={handleOnChangeDetails}
              name="rating"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description of product!",
              },
            ]}
          >
            <TextArea
              rows={3}
              value={stateProductDetails.description}
              onChange={handleOnChangeDetails}
              name="description"
            />
          </Form.Item>

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
            <WrapperImg maxCount={1} onChange={handleOnChangeAvatarDetails}>
              <div style={{ display: "flex", gap: "20px" }}>
                <Button>Select File</Button>
                {stateProductDetails?.image && (
                  <img
                    src={stateProductDetails?.image}
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
        title="Delete Product"
        open={isOpenModalDelete}
        onCancel={handleCloseModalDelete}
        onOk={handleOkDeleteProduct}
      >
        <div>Do you want to delete this product?</div>
      </Modal>
    </div>
  );
};

export default AdminProduct;
