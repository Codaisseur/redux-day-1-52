// src/store/balance/reducer.js
const initialState = {
  amount: 15,
  darkMode: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "increaseBalance": {
      return {
        ...state,
        amount: state.amount + action.payload,
      }; // { darkMode: false, amount: 25 }
    }
    case "resetBalance": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
