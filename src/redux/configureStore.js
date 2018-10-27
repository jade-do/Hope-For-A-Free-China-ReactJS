import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Articles } from './articles';
import { Comments } from './comments';
import { InitialFeedback } from './forms';
import { HumanRightsMedia } from './humanrightsmedia';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            articles: Articles,
            comments: Comments,
            humanRightsMedia: HumanRightsMedia,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}