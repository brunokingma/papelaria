import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Button, Modal,ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faSearch } from '@fortawesome/free-solid-svg-icons';




class ListaComponent extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);

    this.state = {
      isModalOpen: false,
      isModalOpen2: false,
      name:"",
      quantity:"",
      description:"",
      barcode:"",
      category:"",
      id:"",

    };
  }

  toggleModal(idStock) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      id:idStock
    });
  }

  toggleModal2(stock) {
    this.setState({
      isModalOpen2: !this.state.isModalOpen2,
      name:stock.name,
      quantity:stock.quantity,
      description:stock.description,
      barcode:stock.barcode,
      category:stock.category
    });
  }

 delHandle(){
        this.props.delStock(this.state.id);
        this.toggleModal();
    }

    render() {

      
      const ITEMS = this.props.stock.stocks.map((item,index) => {
        return (
            
          <tr key={index}>
            <td>{item.barcode}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.category}</td>
            <td>
             <Link to={`/cadastro/${item.id}`} >
               <Button size="sm" variant="warning"> Edit <FontAwesomeIcon icon={faPen} />  </Button>
              </Link>{' '}|{' '}
              <Button size="sm" variant="danger" onClick={()=>{this.toggleModal(item.id)}}> Del <FontAwesomeIcon icon={faTrash}/>  </Button>
              {' '}|{' '}
              <Button size="sm" variant="success" onClick={()=>{this.toggleModal2(item)}}> Details <FontAwesomeIcon icon={faSearch}/>  </Button>
            </td>
          </tr>
      
        );
      });

      return (


      <React.Fragment>

          <Modal show={this.state.isModalOpen} hide={this.toggleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Confirmar</Modal.Title>
              </Modal.Header>
              <Modal.Body>Deseja realmente excluir o item selecionado</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.toggleModal}>
                  Fechar
                </Button>
                <Button variant="primary" onClick={()=>{this.delHandle()}} >
                  Excluir
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={this.state.isModalOpen2} hide={this.toggleModal2}>
              <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              <ListGroup>
                <ListGroup.Item>Barcode:{this.state.barcode}</ListGroup.Item>
                <ListGroup.Item>Nome:{this.state.name}</ListGroup.Item>
                <ListGroup.Item>Quantidade:{this.state.quantity}</ListGroup.Item>
                <ListGroup.Item>Categoria:{this.state.category}</ListGroup.Item>
                <ListGroup.Item>Descricao:{this.state.description}</ListGroup.Item>
              </ListGroup>
                  
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.toggleModal2}>
                  Fechar
                </Button>
              </Modal.Footer>
            </Modal>

          <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ITEMS}
              </tbody>
            </Table>

          </React.Fragment>

      );
    }
  }


  export default ListaComponent;
