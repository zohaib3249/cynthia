
import * as React from "react";
// import "../assets/css/confirm_reset.css";
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import AlertMessage from "./components/alert";



function ConfirmReset() {
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setcomfimrPassword] = React.useState('');

    const [errors, setErrors] = React.useState({
        password: false,
        confirmpassword: false,
      });
    const propsData = {
        imputEmail: {
            placeholder: "  Email address",
        },
        imputPassword: {
            error : errors.password,
            type : "password",
            onchange_fun:setPassword,
            placeholder: "  Password",
        },
        imputconfirmPassword: {
            error : errors.confirmpassword,
            type : "password",
            onchange_fun:setcomfimrPassword,
            placeholder: "Confirm Password",
        },
        buttonLarge: {
            newFeature: "Validate",
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
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const userData = {
          username,
          password,
        };
        
        alert(validate());
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
            <div className="box  d-flex flex-column justify-content-evenly align-items-center ">


            <div className="mb-5"></div>
            <span className="title mt-5 text-center">Sign up</span>
            <AlertMessage />

            <div className="mb-5"></div>
            <div className="mb-2"></div>

            <div className="d-flex flex-column justify-content-around ">
                <form onSubmit={handleSubmit}>
                
                    <ImputText
                        className="input_field form-control"
                        {...propsData.imputPassword}
                    />
                    <div className="mb-2"></div>
                    <ImputText
                        className="input_field form-control"
                        {...propsData.imputconfirmPassword}
                    />
                    <div className="mb-4"></div>
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

export default ConfirmReset;