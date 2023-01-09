import React from 'react'
import '../../sass/App.scss';
import '../Home/home.scss';
import logo from '../../img/logo-clean3000.png';
import { Link } from 'react-router-dom';
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


const Avisdepassage = () => {

  const onFinish = (values) => {
    console.log(values);
  };


  return (
    <html>
      <header className='header'>
        <Link to="/">
          <img className='logo' src={logo} alt="loggo de l'entreprise Clean 3000" />
        </Link>
      </header>
      <body className='container'>
        <section className='avisdepassage'>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
              name={['user', 'name']}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'age']}
              label="Age"
              rules={[
                {
                  type: 'number',
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </section>

      </body>
    </html>
  )
}

export default Avisdepassage