import Alert from 'react-bootstrap/Alert';
import * as React from "react";
function AlertMessage() {
  const [alertMessage, setAlertMessage] = React.useState(null);
  React.useEffect(() => {
    const message = sessionStorage.getItem("message");
    console.log(message);
    if (message) {
      setAlertMessage(message);
      sessionStorage.removeItem("message");
    }
  }, []);
  return (
    <>
      {alertMessage && (
        <div className="">
            <div className="mb-5"></div>
            <Alert className='' key='info' variant='info'>
       {alertMessage}
      </Alert>
           
        </div>
        
       
      )}
        
     
    </>
  );
}

export default AlertMessage;