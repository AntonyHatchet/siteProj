
const visitor = localStorage.getItem('visitor');

const SAVE_VISITOR = "SAVE_VISITOR";

/**
 * Actions
 */
export const actions = {
  saveUser: function(){
    return function(dispatch){
      dispatch({
        type: SAVE_VISITOR,
      })
    }
  }
};



export default function visitorReducer(state = visitor, action) {
    switch (action.type) {
        case SAVE_VISITOR:
            localStorage.setItem('visitor', true);
            return [...state, visitor];

        default:
            return state;
    }
}