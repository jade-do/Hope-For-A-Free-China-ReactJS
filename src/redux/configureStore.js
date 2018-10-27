import {createStore, combineReducers} from 'redux';
import { Articles } from './articles';
import { Comments } from './comments';
import { HumanRightsMedia } from './humanrightsmedia';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles: Articles,
            comments: Comments,
            humanRightsMedia: HumanRightsMedia
        })
    );

    return store;
}