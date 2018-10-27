import { ARTICLES } from '../shared/articles';

export const Articles = (state = ARTICLES, action ) => {
    switch (action.type){
        default:
            return state;
    }
}