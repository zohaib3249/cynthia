
import * as React from "react";

import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import AlertMessage from "./components/alert";
import * as request from './api';


function Reset() {
    var message = ""
    const [email, setEmail] = React.useState(''); 
    const [msg, setMsg] = React.useState();
    const [errors, setErrors] = React.useState({
        password: false,
       
      });
    const propsData = {
        imputEmail: {
            error:errors.email,
            type:"email",
            placeholder: "  Email address",
            onchange_fun : setEmail
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
          email: email === '',
    
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some(Boolean);
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const userData = {
          email,
        };
        if(validate())
        {
            var res= await request.reset(userData);
            console.log(res)
    
        if (res["message"])
        {
            console.log('sdfaadfda')
            message = { "message": res['message'], color: "success" }
            localStorage.setItem("user_id", res['user_id']);
            
            // sessionStorage.setItem("user_id", JSON.stringify(res));
        // navigate('/');
        }
        else{
            message = { "message": "An error occured please try again", color: "danger" }
        }
        }
    else{
        message = { "message": "Email required", color: "danger" }
    }
    // sessionStorage.setItem("message", JSON.stringify(msg));
    setMsg(message)
        // location.reload();

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
        <div className="box  d-flex flex-column justify-content-start align-items-center " style={{height:"400px"}}>
            <div className="mb-4"></div>



            <h2 className="title  text-center mb-3">Password Recovery</h2>


            {!sessionStorage.getItem("message") && (
            <div className="mb-3"></div>
   
             )}

            <div className="d-flex flex-column justify-content-between ">
                {msg?
                <AlertMessage message={msg}/>:<AlertMessage/>
                }
                <form onSubmit={handleSubmit}>

                    <ImputText className="input_field form-control " {...propsData.imputEmail} />
                    
                    
                    <div className="mb-5"></div>
                    <ButtonLarge
                        className="input_field "
                        {...propsData.buttonLarge}
                    />

                </form>
                <div className="mb-2"></div>
                <hr className="separator" />
                <div className="mb-2"></div>
                <Link className="link-signup-instance-1" {...propsData.linkSigin} />
            </div>
        </div>


    </div>


    )
}

export default Reset;