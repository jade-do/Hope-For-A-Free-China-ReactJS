import * as ActionTypes from './ActionTypes';
import { ARTICLES } from '../shared/articles';

export const addComment = (articleId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        articleId: articleId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchArticles = () => (dispatch) => {
    dispatch(articlesLoading(true));

    setTimeout(() => {
        dispatch(addArticles(ARTICLES));
    }, 2000);
}

export const articlesLoading = () => ({
    type: ActionTypes.ARTICLES_LOADING
});

export const articlesFailed = (errmess) => ({
    type: ActionTypes.ARTICLES_FAILED,
    payload: errmess
});

export const addArticles = (articles) => ({
    type: ActionTypes.ADD_ARTICLES,
    payload: articles
})
