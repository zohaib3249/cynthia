import Alert from "react-bootstrap/Alert";
import * as React from "react";
function AlertMessage(props) {
  console.log("here are props", props.message);
  const [alertMessage, setAlertMessage] = React.useState(null);
  React.useEffect(() => {
    const messageobj = sessionStorage.getItem("message");
    var message = "";
    if (messageobj) {
      message = JSON.parse(messageobj);
      setAlertMessage(message);
      sessionStorage.removeItem("message");
    }
  }, []);
  return (
    <>
      {props.message && (
        <div className="">
          <Alert className="" key="info" variant={props.message.color}>
            {props.message.message}
          </Alert>
        </div>
      )}
      {alertMessage && (
        <div className="">
          <Alert className="" key="info" variant={alertMessage.color}>
            {alertMessage.message}
          </Alert>
        </div>
      )}
    </>
  );
}

export default AlertMessage;
