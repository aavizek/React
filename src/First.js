import React from "react";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import Yup from "yup";
import { Route, Switch } from "react-router-dom";
import "./App.css";
const formschema = Yup.object().shape({
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  first_name: Yup.string().required("Name required sir"),
  last_name: Yup.string().required("Name required sir"),
  password: Yup.string()
    .min(9, "atleast 9 characters")
    .required("Password is required"),
  college: Yup.string().required("Please mention your college name"),
  phone: Yup.string()
    .min(10, "Please enter 10 digit number")
    .required("Required field"),
  city: Yup.string().required("Please mention your city")
});

class First extends React.Component {
  state = {
    value: []
  };

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    console.log(values);
    this.setState({ value: values });
    alert("Form Submitted");
    setSubmitting(false);
    return;
  };

  render() {
    let val = null;
    // if (this.state.value) {
    //   val = this.state.value.map(value1 => {
    //     return <div>{value1}</div>;
    //   });
    // }

    if (this.state.value != null) {
      val = Object.keys(this.state.value).map(i => {
        return <div>{this.state.value[i]}</div>;
      });
    }

    return (
      <div className="wrapper">
        <Formik
          initialValues={{
            first_name: "",
            email: "",
            gender: ""
          }}
          validationSchema={formschema}
          // validate={values => {
          //   let errors = [];

          //   if (!values.email) errors.email = "Email Address Required";

          //   //check if my values have errors
          //   return errors;
          // }}
          onSubmit={this.handleSubmit}
          render={formProps => {
            return (
              <div className="left">
                <Form style={{ marginLeft: 140, marginTop: 30 }}>
                  {formProps.touched.email && formProps.errors.first_name && (
                    <p>{formProps.errors.first_name}</p>
                  )}
                  <label>First Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                  />
                  <br />

                  {formProps.touched.last_name &&
                    formProps.errors.last_name && (
                      <p>{formProps.errors.last_name}</p>
                    )}
                  <label>Last Name</label>
                  <Field
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="form-control"
                  />
                  {/* <ErrorMessage name="first_name" /> */}
                  <br />

                  {formProps.touched.email && formProps.errors.email && (
                    <p>{formProps.errors.email}</p>
                  )}
                  <label>Email id</label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email address"
                    className="form-control"
                  />
                  {/* <ErrorMessage name="email" /> */}
                  <br />

                  {formProps.touched.password && formProps.errors.password && (
                    <p>{formProps.errors.password}</p>
                  )}
                  <label>Password</label>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <br />

                  {formProps.touched.college && formProps.errors.college && (
                    <p>{formProps.errors.college}</p>
                  )}
                  <label>College Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="college"
                    placeholder="College name"
                  />
                  <br />

                  {formProps.touched.phone && formProps.errors.phone && (
                    <p>{formProps.errors.phone}</p>
                  )}
                  <label>Number</label>
                  <Field
                    type="number"
                    name="phone"
                    placeholder="Phone no."
                    className="form-control"
                  />
                  <br />

                  {formProps.touched.city && formProps.errors.city && (
                    <p>{formProps.errors.city}</p>
                  )}
                  <label>City</label>
                  <Field
                    type="text"
                    name="city"
                    placeholder="City"
                    className="form-control"
                  />

                  <br />

                  <label>Gender</label>
                  <Field
                    className="form-control"
                    name="gender"
                    component="select"
                    placeholder="Your Gender"
                  >
                    <option value="" />
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>

                  <br />

                  <button
                    type="submit"
                    className="btn btn-dark"
                    disabled={formProps.isSubmitting}
                    style={{ width: "350px" }}
                  >
                    Submit Form
                  </button>
                </Form>
              </div>
            );
          }}
        />
        <div className="right">
          <h3 style={{ marginTop: "150px" }}>{val}</h3>
        </div>
      </div>
    );
  }
}
export default First;
