import React from "react";
import * as Yup from "yup";
import {withFormik, Form, Field} from "formik";

/*- Name
- Email
- Password
- Terms of Service (checkbox)
- A Submit button to send our form data to the server. */

const UserForm = ({values, errors, touched, isSubmitting}) => {
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

const UserFormikForm = withFormik({
    mapPropsToValues({email, password, tos, name}) {
        return {
            email: email || "",
            password: password || "",
            tos: tos || false,
            name: name || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is reuired"),
        password: Yup.string()
            .min(16, "Password must be 16 characters")
            .required("Password is required"),
        tos: Yup.string()
            .required("tos required")
    }),
    handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
        if(values.email === "alreadytaken@atb.dev") {
            setErrors({email: "That email is taken"});
        } else {

        }
        setSubmitting(false);
    }
})(UserForm);

export default UserFormikForm;