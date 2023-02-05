
import * as React from "react";
import "../assets/css/signup.css";
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
            error:errors.email,
            type:"email",
            placeholder: "  Email address",
            onchange_fun : setUsername
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
        buttonLarge2: {
            newFeature: "Forgot you password ?",
        },
        linkSignup: {
            name : "Already have an Account",
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
            <form onSubmit={handleSubmit}>
                <span className="title">Sign up</span>
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



    )
}

export default Signup;