import * as actionTypes from './actionTypes';
import { baseUrl } from './baseUrl';
 
export const stockFailed = (errmess) => ({
    type: actionTypes.STOCK_FAILED,
    payload: errmess
});

export const addStock = (stock,msg) => ({
    type: actionTypes.ADD_STOCK,
    payload: stock,
    display:true,
    msg:msg

});

export const listStock = (stock) => ({
  type: actionTypes.LIST_STOCK,
  payload: stock,
  display:false
});


export const deleteList = (id) => ({
  type: actionTypes.DEL_STOCK,
  payload: id,
  display:false

});


export const delStock = (id) => (dispatch) => { 
  return fetch(baseUrl + 'stock/'+id ,{ method: 'DELETE'})
  .then(response => {
      if (response.ok) {
        dispatch(deleteList(id))
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .catch(error => dispatch(stockFailed(error.message)));
};


export const stockLoading = () => ({
    type: actionTypes.STOCK_LOADING
});


export const postStock = (name, description, quantity, category) => (dispatch) => {

    const obj = {
        name:name, 
        description:description,
        quantity:quantity,
        category:category
    };
    
    return fetch(baseUrl + 'stock', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addStock(response,"adicionados")))
    .catch(error =>  { console.log('post stock', error.message); alert('Your stock could not be saved\nError: '+error.message); });
};

export const updateStock = (stockId,name, description, quantity, category) => (dispatch) => {

  const obj = {
      id: stockId,
      name:name, 
      description:description,
      quantity:quantity,
      category:category
  };
  
  return fetch(baseUrl + 'stock', {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
    
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addStock(response,"atualizados")))
  .catch(error =>  { console.log('post stock', error.message); alert('Your stock could not be updated\nError: '+error.message); });
};


export const fetchStock = () => (dispatch) => { 
    return fetch(baseUrl + 'stock' )
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(listStock(response)))
    .catch(error => dispatch(stockFailed(error.message)));
};


