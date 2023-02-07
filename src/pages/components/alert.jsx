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
        <Alert className='row' key='info' variant='info'>
       {alertMessage}!
      </Alert>
       
      )}
        
     
    </>
  );
}

export default AlertMessage;