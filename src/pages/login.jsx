
import * as React from "react";

import "../assets/css/login.css";
import * as request from './api';
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [errors, setErrors] = React.useState({
        email: false,
        password: false,
      });
    const propsData = {
        imputEmail: {
            error:errors.email,
            type:"email",
            placeholder: "  Email address",
            onchange_fun : setUsername
        },
        imputPassword: {
            error:errors.password,
            type:"password",
            placeholder: "  Password",
            onchange_fun : setPassword
        },
        buttonLarge: {
            type:"submit",
            newFeature: "Validate",
        },
        buttonLarge2: {
            link : "/reset",
            newFeature: "Forgot you password ?",
        },
        linkSignup: {
            name : "You don’t have an account ? Please sign up",
            link: "/signup",
        },
    };
    const validate = () => {
        
        const newErrors = {
          email: username === '',
          password: password === '',
          // ...
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
      };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const userData = {
          username,
          password,
        };
        var res= await request.login(userData);
        sessionStorage.setItem('user', res);
        navigate('/');
      };
    return (
        <div className="login-page">
           
            <span className="cynthia">Cynthia</span>
            <span className="slogan">
                Data-driven planning software designed by Product Owners for Product
                Owners.
            </span>

            <div className="login-box">
                <span className="title">Log In</span>
                <form onSubmit={handleSubmit}>
                <ImputText className="imput-email-instance" {...propsData.imputEmail} />
                <ImputText
                    className="imput-password-instance-1"
                    {...propsData.imputPassword}
                />
                <ButtonLarge
                    className="login_button"
                    {...propsData.buttonLarge}
                />
                </form>
                <ButtonLarge2
                    className="reset_button"
                    {...propsData.buttonLarge2}
                />
                <hr className="separator" />
                <Link className="link-signup-instance-1" {...propsData.linkSignup} />
            </div>

            
        </div>



    )
}

export default Login;