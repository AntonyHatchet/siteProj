
const visitor = localStorage.getItem('visitor');

const SAVE_VISITOR = "SAVE_VISITOR";

/**
 * Actions
 */
export const actions = {
  saveUser: function(data){
    return function(dispatch){
      dispatch({
        type: SAVE_VISITOR,
        data: data
      })
    }
  }
};



export default function visitorReducer(state = visitor, action) {
    switch (action.type) {
        case SAVE_VISITOR:
            localStorage.setItem('visitor', [...state, action.data]);
            return [...state, action.data];

        default:
            return state;
    }
}