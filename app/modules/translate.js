import Ru from 'data/translateRu.json';
import En from 'data/translateEn.json';


/**
 * Action Constants
 */
const SWITCH_TO_RU = 'ru';
const SWITCH_TO_EN = 'en';


/**
 * Actions
 */
export const actions = {
  languageRu: () => (dispatch) =>
    dispatch({
      type: SWITCH_TO_RU
    }),

  languageEn: () => (dispatch) =>
    dispatch({
      type: SWITCH_TO_EN
    })
};

/**
 * Reducer
 */
export default function translationsReducer(state = Ru, action) {

  switch (action.type) {
    case SWITCH_TO_RU:
      return Ru;

    case SWITCH_TO_EN:
      return En;

    default:
      return state;
  }
}
