import styled from '@emotion/styled';
import { Form } from 'antd';

export const FormItem = styled(Form.Item)`
  padding-bottom: 12px;
  margin-bottom: 0;
  & .ant-form-item-label label {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #262626;
  }
  & .ant-form-item-extra {
    font-size: 12px;
    line-height: 16px;
    min-height: auto;
    color: #767676;
    font-weight: 400;
    margin-top: 4px;
  }
  & .ant-input {
    font-size: 16px;
    padding: 12px;
    line-height: 20px;
    border-radius: 8px;
    margin-bottom: 4px;
    &::placeholder {
      color: #8d8d8d;
    }
  }
  & .ant-form-item-explain {
    font-size: 12px;
    line-height: 16px;
  }
`;
