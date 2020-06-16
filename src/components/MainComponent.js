import React from 'react';
import List from './ListaComponent';
import FormComponent from './FormComponent';
import StockDetailsComponent from './StockDetailsComponent';
import MenuComponent from './MenuComponent';
import {postStock, delStock, fetchStock,updateStock} from '../actions/actionCreator';
import { connect } from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';

const mapStateToProps = state => {
  return {
    stocks: state.stockReducers
  }
}

  const mapDispatchToProps = dispatch => ({
    fetchStock: () => dispatch(fetchStock()),
    delStock:(id)=>dispatch(delStock(id)),
    postStock:(name, description, quantity, category)=>dispatch(postStock(name, description, quantity, category)),
    updateStock:(stockId, name, description, quantity, category)=>dispatch(updateStock(stockId,name, description, quantity, category))

  });


class MainComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {
    this.props.fetchStock();
  }



    render() {

      return (
            <Container>
              <MenuComponent />
                <Switch>
                  <Route path='/' exact component ={()=><List stock={this.props.stocks} delStock={this.props.delStock} />}/> 
                  <Route path='/main' exact component ={()=><List stock={this.props.stocks} delStock={this.props.delStock} />}/> 
                  <Route path='/cadastro' exact component={()=><FormComponent  postStock={this.props.postStock} />} />
                  <Route path='/cadastro/:id' component={(props)=><StockDetailsComponent stock={this.props.stocks} updateStock={this.props.updateStock} {...props} />} />
                 </Switch>
            </Container>
      );
    }
  }

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));

