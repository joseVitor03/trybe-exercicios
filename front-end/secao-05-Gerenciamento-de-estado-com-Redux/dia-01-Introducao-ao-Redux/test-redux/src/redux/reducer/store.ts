import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer } from '.';

export const store = createStore(reducer, composeWithDevTools());
