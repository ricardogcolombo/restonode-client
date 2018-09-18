import {
  combineReducers,
} from 'redux';
import { i18nState } from 'redux-i18n';
import meals from './meals';
import location from './location';

const rootReducer = combineReducers({
  i18nState,
  meals,
  location,
});

export default rootReducer;
