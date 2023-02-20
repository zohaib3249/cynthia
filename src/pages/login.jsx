
import * as React from "react";

import * as request from './api';
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import { useNavigate } from 'react-router-dom';
import AlertMessage from "./components/alert";


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
          "email":username,
          "password":password,
        };
        if(validate())
            {
                console.log(userData)
                var res= await request.login(userData);
        
            if (res["token"])
            {
                sessionStorage.setItem("user", res['token']);
                sessionStorage.setItem('message',JSON.stringify({"message":"welcome !","color":"success"}) );
            navigate('/');
            }
            else{
                sessionStorage.setItem('message',JSON.stringify({"message":"invalid email or password","color":"danger"}) );
            }
            }
        else{
            sessionStorage.setItem('message',JSON.stringify({"message":"Email and password are required","color":"danger"}) );
        }
            
        location.reload();
      };
    return (
      
        <div className="login-page container  d-flex flex-column  align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="mb-5"></div>

            <span className="cynthia text-center ">Cynthia</span>
          <span className="slogan text-center ">
              Data-driven planning software <br />designed by Product Owners for Product
              Owners.

          </span>
        </div>
        <div className="mb-4"></div>
        <div className="box  d-flex flex-column justify-content-start align-items-center ">
            <div className="mb-4"></div>



            <h2 className="title  text-center mb-3">Log In</h2>


            {!sessionStorage.getItem("message") && (
            <div className="mb-2"></div>
   
             )}

            <div className="d-flex flex-column justify-content-around ">
                <AlertMessage />
                  <form onSubmit={handleSubmit}>

                      <ImputText className="input_field form-control " {...propsData.imputEmail} />
                      <div className="mb-2"></div>
                      <ImputText
                          className="input_field form-control"
                          {...propsData.imputPassword}
                      />
                      <div className="mb-2"></div>
                     
                      <div className="mb-4"></div>
                      <ButtonLarge
                          className="input_field "
                          {...propsData.buttonLarge}
                      />

                  </form>
                  <div className="mb-3"></div>
                  <ButtonLarge2
                    className="input_field"
                    {...propsData.buttonLarge2}
                />
                  <div className="mb-1"></div>
                  <hr className="separator" />
                  <div className="mb-1"></div>
                  <Link className="link-signup-instance-1" {...propsData.linkSignup} />
              </div>
          </div>


      </div>


    )
}

export default Login;