// src/store/balance/reducer.js
const initialState = {
  list: [],
  selected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "playersFetched": {
      // payload: [{}, {}, {}]
      //
      return {
        ...state,
        list: [...state.list, ...action.payload], // [{}, {}, {}]
      };
    }
    case "addANewPlayer": {
      /// payload: {player}
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
