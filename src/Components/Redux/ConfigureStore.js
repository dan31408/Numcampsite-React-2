import { createStore, combineReducers } from 'redux';
import { CAMPSITES, Campsites } from './campsites';
import { COMMENTS, Comments } from './comments';
import { PARTNERS, Partners } from './partners';
import { PROMOTIONS } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        })
    );

    return store;
};