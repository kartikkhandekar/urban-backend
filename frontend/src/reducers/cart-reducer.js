// // src/reducers/cartReducer.js
// import {
//     ADD_TO_CART,
//     REMOVE_FROM_CART,
//     CLEAR_CART,
//     UPDATE_CART,
//     GET_CART_ITEMS,
//     CART_ERROR,
//   } from '../actions/cart-actions'
  
//   const initialState = {
//     items: [],
//     totalPrice: 0,
//     error: null,
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_TO_CART:
//       case REMOVE_FROM_CART:
//       case UPDATE_CART:
//       case GET_CART_ITEMS:
//         return {
//           ...state,
//           items: action.payload,
//           totalPrice: action.payload[0].totalPrice,
//           error: null,
//         }
//       case CLEAR_CART:
//         return {
//           ...state,
//           items: [],
//           totalPrice: 0,
//           error: null,
//         }
//       case CART_ERROR:
//         return {
//           ...state,
//           error: action.payload,
//         }
       
//       default:
//         return state;
//     }
//   }
  
//   export default cartReducer;
  


// src/reducers/cartReducer.js
// import {
//     ADD_TO_CART,
//     REMOVE_FROM_CART,
//     CLEAR_CART,
//     UPDATE_CART,
//     GET_CART_ITEMS,
//     CART_ERROR,
//   } from '../actions/cart-actions';
  
//   const initialState = {
//     items: [],
//     totalPrice: 0,
//     error: null,
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     console.log("Action Type:", action.type); // Debugging log
//     console.log("Action Payload:", action.payload); // Debugging log
//     switch (action.type) {
//       case ADD_TO_CART:
//       case REMOVE_FROM_CART:
//       case UPDATE_CART:
//       case GET_CART_ITEMS:
//         return {
//           ...state,
//           items: action.payload,
//           totalPrice: action.payload[0].totalPrice,
//           error: null,
//         };
//       case CLEAR_CART:
//         return {
//           ...state,
//           items: [],
//           totalPrice: 0,
//           error: null,
//         };
//       case CART_ERROR:
//         return {
//           ...state,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;
  
  

// import {
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   CLEAR_CART,
//   UPDATE_CART,
//   GET_CART_ITEMS,
//   CART_ERROR,
// } from '../actions/cart-actions';

// const initialState = {
//   items: [],
//   error: null,
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//       case ADD_TO_CART:
//       case REMOVE_FROM_CART:
//       case GET_CART_ITEMS:
//           if (Array.isArray(action.payload) && action.payload.length > 0) {
//               return {
//                   ...state,
//                   items: action.payload[0],                 
//                   error: null,
//               };
//           }
//           return state;

//       case CLEAR_CART:
//           return {
//               ...state,
//               items: [],
//               error: null,
//           };

//       case CART_ERROR:
//           return {
//               ...state,
//               error: action.payload,
//           };
//           case UPDATE_CART:{
//             console.log('update reducer',action.payload)
           
//               return {
//                   ...state,
//                   items: action.payload[0
                    
//                   ],
//                   error: null,
//               };
          
//           }
//       default:
//           return state;
//   }
// };

// export default cartReducer;


import {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    REMOVE_SERVICE_ITEMS,
    CLEAR_CART,
    FETCH_ALL_CART_ITEMS,
  } from '../actions/cart-actions';
  
  const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CART_ITEM:
        return { ...state, items: [...state.items, action.payload] };
      case REMOVE_CART_ITEM:
        return { ...state, items: state.items.filter(item => item._id !== action.payload) };
      case REMOVE_SERVICE_ITEMS:
        return { ...state, items: state.items.filter(item => item.service._id !== action.payload) };
      case CLEAR_CART:
        return { ...state, items: [] };
      case FETCH_ALL_CART_ITEMS:
        return { ...state, items: action.payload };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  