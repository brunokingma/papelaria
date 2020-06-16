import React from 'react';
import {Alert} from 'react-bootstrap';


class MessageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

  return (
    <div>
   {
     this.props.params.show &&
        <Alert variant="success" className="formulario">
            Dados {this.props.params.msg} com sucesso.
        </Alert>
   }
    </div>
  )
}
  
}

export default MessageComponent;