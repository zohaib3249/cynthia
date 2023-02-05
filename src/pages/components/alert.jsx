import Alert from 'react-bootstrap/Alert';

function AlertMessage(prop) {
  return (
    <>
      
        <Alert className='row' key={prop.variant} variant={prop.variant}>
          This is a {prop.variant} alert—check it out!
        </Alert>
     
    </>
  );
}

export default AlertMessage;