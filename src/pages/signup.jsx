
import * as React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import * as request from './api';
import AlertMessage from './components/alert'
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";

import Alert from 'react-bootstrap/Alert';
function Signup() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setcomfimrPassword] = React.useState('');
    const [is_submit, set_issubmit] = React.useState(false);

    const [errors, setErrors] = React.useState({
        email: false,
        password: false,
        confirmpassword: false,
    });
    const propsData = {
        imputEmail: {
            error: errors.email,
            type: "email",
            placeholder: "  Email address",
            onchange_fun: setUsername
        },
        imputPassword: {
            error: errors.password,
            type: "password",
            onchange_fun: setPassword,
            placeholder: "  Password",
        },
        imputconfirmPassword: {
            error: errors.confirmpassword,
            type: "password",
            onchange_fun: setcomfimrPassword,
            placeholder: "Confirm Password",
        },
        buttonLarge: {
            newFeature: "Validate",
        },
        buttonLarge2: {
            newFeature: "Forgot you password ?",
        },
        linkSignup: {
            name: "Already have an Account",
            link: "/login",
        },
    };
    const validate = () => {

        const newErrors = {
            email: username === '',

            password: password === '',
            confirmpassword: confirmpassword === ''

        };

        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
    };
    const handleSubmit = async (event) => {
        var message = ""
        event.preventDefault();
        if (validate()) {
            if (password != confirmpassword) {
                message = { "message": "Password dose not matched", color: "danger" }

            }
            else {


                const userData = {
                    "email": username,
                    "password": password,
                };
                var res = await request.signup(userData);
                console.log(res);
                if (res.id) {
                    message = { "message": "Account has been created,check your email", color: "success" }


                } else {
                    message = { "message": res, color: "danger" }


                }
            }
        }
        else {
            message = { "message": "ll fields are required", color: "danger" }



        }
        set_issubmit(true)
        sessionStorage.setItem("message", JSON.stringify(message));
        location.reload();

    };
    return (
        <div className="login-page container  d-flex flex-column  align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="mb-5"></div>

                <span className="cynthia text-center ">Test register</span>
                <p className="slogan text-center ">
                    my testing slogan <br />my testing sloagan line 2
                    .

                </p>

            </div>
            <div className="mb-4"></div>
            <div className="box  d-flex flex-column justify-content-start align-items-center ">
                <div className="mb-4"></div>



                <h2 className="title  text-center mb-3">Sign up</h2>


                {!sessionStorage.getItem("message") && (
                <div className="mb-5"></div>
       
                 )}

                <div className="d-flex flex-column justify-content-around ">
                    <AlertMessage />


                    <form onSubmit={handleSubmit}>

                        <ImputText className="input_field form-control " {...propsData.imputEmail} />


                        <ImputText
                            className="input_field form-control"
                            {...propsData.imputPassword}
                        />

                        <ImputText
                            className="input_field form-control"
                            {...propsData.imputconfirmPassword}
                        />

                        <ButtonLarge
                            className="input_field "
                            {...propsData.buttonLarge}
                        />


                    </form>
                    <div className="mb-2"></div>
                    <hr className="separator" />
                    <div className="mb-2"></div>
                    <Link className="link-signup-instance-1" {...propsData.linkSignup} />
                </div>
            </div>


        </div>



    )
}

export default Signup;