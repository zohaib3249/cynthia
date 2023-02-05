
import * as React from "react";
import "../assets/css/confirm_reset.css";
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
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
        <div className="login-page">
            <span className="cynthia">Cynthia</span>
            <span className="slogan">
                Data-driven planning software designed by Product Owners for Product
                Owners.
            </span>

            <div className="box">
                <span className="title">Password Reset</span>
                <form onSubmit={handleSubmit}>
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
                
                
            </div>


        </div>



    )
}

export default ConfirmReset;