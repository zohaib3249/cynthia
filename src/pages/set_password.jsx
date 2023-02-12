
import * as React from "react";
// import "../assets/css/confirm_reset.css";
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import AlertMessage from "./components/alert";
import * as request from "./api"
import { useNavigate } from 'react-router-dom';




function ConfirmReset() {
    const navigate = useNavigate()
    const [password, setPassword] = React.useState('');
    const [confirmpassword, setcomfimrPassword] = React.useState('');
    const [msg, setMsg] = React.useState();
    var user_id = localStorage.getItem('user_id')
    var message = ''


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
          password: password === '',
          confirmpassword: confirmpassword === ''
          // ...
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const userData = {
          user_id,
          password,
          confirmpassword
        };
        if(validate() && password === confirmpassword)
        {
            var res= await request.set_new_password(userData);
            console.log(res)
    
        if (res["message"])
        {
            message = { "message": res['message'], color: "success" }
            console.log(message)
            navigate('/');
        }
        else{
            message = { "message": res['error'], color: "success" }
        }
        }
    else{
        message = { "message": "Password should be same", color: "danger" }
    }
    setMsg(message)
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
        <div className="box  d-flex flex-column justify-content-start align-items-center " style={{"height" : "30%"}}>
            <div className="mb-4"></div>



            <h2 className="title  text-center mb-3">Sign In</h2>


            {!sessionStorage.getItem("message") && (
            <div className="mb-5"></div>
            )}
            <span className="title mt-5 text-center">Sign up</span>
            {msg?
                <AlertMessage message={msg}/>:<AlertMessage/>
                }
            
                    
            <div className="mb-5"></div>
            <div className="mb-2"></div>

            <div className="d-flex flex-column justify-content-around ">
                <AlertMessage />
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