
import * as React from "react";
import "../assets/css/signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as request from './api';
import AlertMessage from './components/alert'
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
function Signup() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setcomfimrPassword] = React.useState('');

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
            // ...
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {

            const userData = {
                username,
                password,
            };
            var res = await request.login(userData);
            if (res.id) {
                alert("Account has been created,check your email")
            } else {
                if(res.email)
                {
                    alert(res.email[0])
                }
                else{
                    res.password[0]
                }
            }
        }
        else{
            alert("all fields are required")
        }


        alert(validate());
    };
    return (
        <div className="login-page container">
            <span className="cynthia">Cynthia</span>
            <span className="slogan">
                Data-driven planning software designed by Product Owners for Product
                Owners.

            </span>

            <div className="box">
                <div className="col-md-8">
                    <span className="title">Sign up</span>
                    {/* <AlertMessage variant="success" /> */}

                </div>

                <div className="container">
                    <form onSubmit={handleSubmit}>

                        <ImputText className="imput-email-instance" {...propsData.imputEmail} />
                        <ImputText
                            className="imput-password-instance-1"
                            {...propsData.imputPassword}
                        />
                        <ImputText
                            className="imput-password-instance-2"
                            {...propsData.imputconfirmPassword}
                        />
                        <ButtonLarge
                            className="button-large-instance-1"
                            {...propsData.buttonLarge}
                        />
                    </form>
                    <hr className="separator" />
                    <Link className="link-signup-instance-1" {...propsData.linkSignup} />
                </div>
            </div>


        </div>



    )
}

export default Signup;