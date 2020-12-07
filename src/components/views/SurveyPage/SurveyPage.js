import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function SurveyPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        name: '',
        lastName: '',
      }}
      // validationSchema={Yup.object().shape({
      //   name: Yup.string()
      //     .required('Name is required'),
      //   lastName: Yup.string()
      //     .required('Last Name is required')
      // })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            name: values.name,
            lastname: values.lastname,
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
              props.history.push("/");
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <h2>Survey</h2>
            <Form onSubmit={handleSubmit} >

              <Form.Item required label="Q1. 다음 중 평소에 좋아하는 과일을 골라 주세요.">
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />체리 &nbsp;&nbsp;&nbsp;
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />모과 &nbsp;&nbsp;&nbsp;
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />레몬 &nbsp;&nbsp;&nbsp;
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />멜론 &nbsp;&nbsp;&nbsp;
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />사과
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="Q2. 평소에 어떤 커피를 좋아하시나요?">
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />씁슬하고 고소한 커피 <br />
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />산미가 있고 마일드한 커피 <br />
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />시원한 아이스아메리카노 <br />
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />커피보다는 달달한 음료가 좋음 <br />
                <Input
                  id="name"
                  label="사과"
                  type="checkbox"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />커피를 좋아하지 않음 <br />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
              </Form.Item>


              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default SurveyPage
