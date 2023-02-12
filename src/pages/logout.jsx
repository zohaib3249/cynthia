
import * as React from "react";

import * as request from './api';
import ImputText from "./components/ImputText";
import Link from "./components/Link";
import ButtonLarge from "./components/ButtonLarge";
import ButtonLarge2 from "./components/ButtonLarge2";
import { useNavigate } from 'react-router-dom';
import AlertMessage from "./components/alert";


function Logout() {
    const navigate = useNavigate();
    React.useEffect(() => {
        sessionStorage.removeItem("message");
    navigate('/login');
      }, []);
    
    
    
}

export default Logout;