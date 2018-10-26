import { ARTICLES } from '../shared/articles';
import { COMMENTS } from '../shared/comments';
import { HUMANRIGHTSMEDIA } from '../shared/humanrightsmedia';

export const initialState = {
    articles: ARTICLES,
    comments: COMMENTS,
    humanRightsMedia: HUMANRIGHTSMEDIA,
};

export const Reducer = (state = initialState, action) => {
    return state;
};