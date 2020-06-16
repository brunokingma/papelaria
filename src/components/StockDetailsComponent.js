import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import MessageComponent from './MessageComponent';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


  


class StockDetailsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

    handleSubmit(values,id){
    this.props.updateStock(id, values.name, values.description, values.quantity, values.category)
    }

    render() {

      return (
      <React.Fragment>
         <MessageComponent params={this.props.stock} /> 
        <LocalForm onSubmit={(values) => this.handleSubmit(values,this.props.match.params.id)} className="formulario" 
          initialState={this.props.stock.stocks.find((item) => item.id === this.props.match.params.id)}
  >
        <Row className="form-group">
            <Col md={6}>
              <Control.text model=".name" id="name" name="name"
                      placeholder="Nome do Produto"
                      className="form-control"
                      validators={{
                          required, minLength: minLength(3), maxLength: maxLength(30)
                      }}
                      />
                  <Errors
                      className="text-danger"
                      model=".name"
                      show="touched"
                      messages={{
                          required: 'Campo obrigatorio ',
                          minLength: 'O campo deve conter no minimo 3 caracteres',
                          maxLength: 'O campo deve conter no maximo 30 caracteres'
                      }}
                  />
            </Col>
        </Row>
        <Row className="form-group">
          <Col md={6}>
            <Control.text model=".quantity" id="quantity" name="quantity"
                placeholder="Quantidade"
                type="number" 
                className="form-control"
                />
            </Col>
        </Row>
        <Row className="form-group">
        <Col md={6}>
            <Control.select model=".category" id="category" name="category" className="form-control">
                <option value="0">Categoria</option>
                <option value="Canetas">Canetas</option>
                <option value="Cadernos">Cadernos</option>
                <option value="Fitas">Fitas</option>
                <option value="Adesivos">Adesivos</option>
            </Control.select>
            </Col>
        </Row>
        <Row className="form-group">
        <Col md={6}>
                <Control.textarea placeholder="Descricao" model=".description" name="description" row="12" className="form-control"></Control.textarea>
        </Col>
        </Row>
        <Row className="form-group">
        <Col md={6}>
            <Button type="submit" value="submit"  variant="success"> Atualizar Produto </Button> {' '}
            <Link to={'/main'} >
                 <Button type="submit" value="submit"  variant="warning"> Voltar </Button>
            </Link>
        </Col>
        </Row>
        
      </LocalForm>
      </React.Fragment>

      );
    }
  }


  export default StockDetailsComponent;
 