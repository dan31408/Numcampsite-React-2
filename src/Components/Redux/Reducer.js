import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/Comments';
import { PARTNERS } from '../shared/Partners';
import { PROMOTIONS } from '../shared/Promotions';

export const initialState = {
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
}