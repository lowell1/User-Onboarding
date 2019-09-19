import React from "react";
import Yup from "yup";
import {withFormik, Form, Field} from "formik";

/*- Name
- Email
- Password
- Terms of Service (checkbox)
- A Submit button to send our form data to the server. */

const Form = ({values, errors, touched, isSubmitting}) => {
    return (
        <form className="form">
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="name"/>
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="email"/>
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="password"/>
            </div>
            <div>
                <label>
                    <Field type="checkbox" name="tos" checked={values.tos}/>
                    Accept TOS
                </label>
            </div>
            <button disabled={isSubmitting}>Submit</button>
        </form>
    )
}

const FormikForm = 

export default Form;