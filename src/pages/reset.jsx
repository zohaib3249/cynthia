
import * as React from "react";
import "../assets/css/reset.css";
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
function Reset() {
    const [username, setUsername] = React.useState(''); 
    const [errors, setErrors] = React.useState({
        password: false,
       
      });
    const propsData = {
        imputEmail: {
            error:errors.email,
            type:"email",
            placeholder: "  Email address",
            onchange_fun : setUsername
        },
        linkSignup:{
            "link":"/signup",
            "name":"SignUp"
        },
        linkSigin:{
            "link":"/login",
            "name":"Signin"
        }
       
    };
    const validate = () => {
     
        const newErrors = {
          email: username === '',
    
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const userData = {
          username,
        };
        
        alert(validate());
      };
    return (
        <div className="reset-login-page">
            <span className="cynthia">Cynthia</span>
            <span className="slogan">
                Data-driven planning software designed by Product Owners for Product
                Owners.
            </span>

            <div className="reset-box">
                <span className="title">Password recovery</span>
                <form onSubmit={handleSubmit}>
                <ImputText className="imput-email-instance" {...propsData.imputEmail} />
                
                <ButtonLarge
                    className="button-large-instance-1-reset"
                    {...propsData.buttonLarge}
                />
                </form>
                <hr className="separator-reset" />
                <Link className="link-signup-instance-1-reset" {...propsData.linkSigin} />
                <Link className="link-signup-instance-2-reset" {...propsData.linkSignup} />
            </div>


        </div>



    )
}

export default Reset;