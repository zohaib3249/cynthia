import Alert from 'react-bootstrap/Alert';
import * as React from "react";
function AlertMessage() {
  const [alertMessage, setAlertMessage] = React.useState(null);
  React.useEffect(() => {
    const messageobj = sessionStorage.getItem("message");
    var message = ""
    if (messageobj) {
      message = JSON.parse(messageobj)
      setAlertMessage(message);
      sessionStorage.removeItem("message");
    }
  }, []);
  return (
    <>
      {alertMessage && (
        <div className="">
            
            <Alert className='' key='info' variant={alertMessage.color}>
       {alertMessage.message}
      </Alert>
           
        </div>
        
       
      )}
        
     
    </>
  );
}

export default AlertMessage;