import { Upload } from "antd";
import styled from "styled-components";

export const WrapperText = styled.p`
  font-weight: 700;
  font-size: 25px;
  padding: 10px 0;
`;
export const WrapperImg = styled(Upload)`
  .ant-upload-list.ant-upload-list-text {
    display: none;
  }
`;
