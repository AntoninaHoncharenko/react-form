import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErorrText } from './styled';
import { Box } from 'components/Box';
import {
  Title,
  Input,
  NameLabel,
  NumberLabel,
  SelectLabel,
  Select,
  DeliveryLabel,
  RadioBtn,
  TimeLabel,
  TimeInput,
  ConfirmLabel,
  Checkbox,
  OrderBtn,
} from './styled';

const initialValues = {
  name: '',
  number: '',
  pizza: 'Margherita',
  size: 'm',
  delivery: 'self',
  time: '',
  call: false,
};

const schema = yup.object().shape({
  name: yup.string().required('Write your name'),
  number: yup
    .number()
    .typeError('Write a number')
    .required('Write your number'),
  pizza: yup.string().required(),
  size: yup.string().required(),
  delivery: yup.string().required(),
  time: yup.string().required('Choose time'),
  call: yup.boolean(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErorrText>{message}</ErorrText>}
    />
  );
};

export const OrderForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    console.log(values);
  };

  return (
    <Box width="550px" p="30px" m="0 auto">
      <Title>Order Pizza</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <Box display="flex" justifyContent="space-evenly" mb="30px">
            <Box display="flex" flexDirection="column">
              <SelectLabel htmlFor="pizza">Choose Pizza</SelectLabel>
              <Select as="select" name="pizza" id="pizza">
                <option value="Margherita">Margherita</option>
                <option value=" Pepperoni">Pepperoni</option>
                <option value="Hawaiian">Hawaiian</option>
                <option value="BBQ">BBQ</option>
              </Select>
            </Box>
            <Box display="flex" flexDirection="column">
              <SelectLabel htmlFor="size">Choose size</SelectLabel>
              <Select as="select" name="size" id="size">
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
              </Select>
            </Box>
          </Box>
          <Box width="350px" m="0 auto 10px">
            <NameLabel htmlFor="name">Your name</NameLabel>
            <Input type="text" id="name" name="name" />
            <FormError name="name" />
          </Box>
          <Box width="350px" m="0 auto 20px">
            <NumberLabel htmlFor="number">Your number</NumberLabel>
            <Input type="tel" id="number" name="number" />
            <FormError name="number" />
          </Box>

          <Box
            role="group"
            width="300px"
            display="flex"
            justifyContent="space-evenly"
            m="0 auto 20px"
          >
            <Box>
              <DeliveryLabel htmlFor="del">Delivery</DeliveryLabel>
              <RadioBtn
                type="radio"
                name="delivery"
                id="del"
                value="delivery"
              />
            </Box>
            <Box>
              <DeliveryLabel htmlFor="self">Self pickup</DeliveryLabel>
              <RadioBtn type="radio" name="delivery" id="self" value="self" />
            </Box>
          </Box>
          <Box width="270px" m="0 auto 20px">
            <TimeLabel htmlFor="time">Choose time</TimeLabel>
            <TimeInput type="time" id="time" name="time" />
            <FormError name="time" />
          </Box>
          <Box width="180px" m="0 auto 20px">
            <ConfirmLabel htmlFor="call">Сall to confirm</ConfirmLabel>
            <Checkbox type="checkbox" id="call" name="call" />
          </Box>
          <OrderBtn type="submit">Order</OrderBtn>
        </Form>
      </Formik>
    </Box>
  );
};
