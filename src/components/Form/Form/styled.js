import styled from 'styled-components';
import { Field } from 'formik';

export const ErorrText = styled.p`
  color: red;
  font-size: 18px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Input = styled(Field)`
  width: 200px;
  height: 30px;
  padding: 4px 8px;
  font-size: 18px;
`;

export const NameLabel = styled.label`
  font-size: 22px;
  margin-right: 30px;
`;

export const NumberLabel = styled.label`
  font-size: 22px;
  margin-right: 8px;
`;

export const SelectLabel = styled.label`
  font-size: 24px;
  text-align: center;
  margin-bottom: 8px;
`;

export const Select = styled(Field)`
  width: 200px;
  height: 40px;
  font-size: 22px;
  padding: 4px 8px;
`;

export const DeliveryLabel = styled.label`
  font-size: 24px;
  margin-right: 8px;
`;

export const RadioBtn = styled(Field)`
  width: 20px;
  height: 20px;
`;

export const TimeLabel = styled.label`
  font-size: 24px;
  margin-right: 10px;
`;

export const TimeInput = styled(Field)`
  width: 120px;
  height: 30px;
  font-size: 18px;
`;

export const ConfirmLabel = styled.label`
  font-size: 22px;
  margin-right: 12px;
`;

export const Checkbox = styled(Field)`
  width: 20px;
  height: 20px;
`;
export const OrderBtn = styled.button`
  display: block;
  width: 190px;
  height: 40px;
  margin: 0 auto;
  font-size: 22px;
  padding: 4px;
`;
