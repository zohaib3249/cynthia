
import * as React from "react";

import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import AlertMessage from "./components/alert";


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



            <h2 className="title  text-center mb-3">Password Recovery</h2>


            {!sessionStorage.getItem("message") && (
            <div className="mb-5"></div>
   
             )}

            <div className="d-flex flex-column justify-content-around ">
                <AlertMessage />
                <form onSubmit={handleSubmit}>

                    <ImputText className="input_field form-control " {...propsData.imputEmail} />
                    
                    
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

export default Reset;