import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

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
    .min(8, 'Too Short')
    .max(16, 'Too Long')
    .required('Write your number'),
  pizza: yup.string().required(),
  size: yup.string().required(),
  delivery: yup.string().required(),
  time: yup.string().required('Choose time'),
  call: yup.boolean(),
});

const ErorrText = styled.p`
  color: red;
`;

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
    <div>
      <h2>Order Pizza</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <label htmlFor="name">Your name</label>
          <Field type="text" id="name" name="name" />
          <FormError name="name" />
          <label htmlFor="number">Your number</label>
          <Field type="tel" id="number" name="number" />
          <FormError name="number" />
          <label htmlFor="pizza">Choose Pizza</label>
          <Field as="select" name="pizza" id="pizza">
            <option value="Margherita">Margherita</option>
            <option value=" Pepperoni">Pepperoni</option>
            <option value="Hawaiian">Hawaiian</option>
            <option value="BBQ">BBQ</option>
          </Field>
          <label htmlFor="size">Choose size</label>
          <Field as="select" name="size" id="size">
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </Field>
          <div role="group">
            <label htmlFor="del">Delivery</label>
            <Field type="radio" name="delivery" id="del" value="delivery" />
            <label htmlFor="self">Self pickup</label>
            <Field type="radio" name="delivery" id="self" value="self" />
          </div>
          <label htmlFor="time">Choose time</label>
          <Field type="time" id="time" name="time" />
          <FormError name="time" />
          <label htmlFor="call">Сall to confirm</label>
          <Field type="checkbox" id="call" name="call" />
          <button type="submit">Order</button>
        </Form>
      </Formik>
    </div>
  );
};
