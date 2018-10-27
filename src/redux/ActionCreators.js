import * as ActionTypes from './ActionTypes';

export const addComment = (articleId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        articleId: articleId,
        rating: rating,
        author: author,
        comment: comment
    }
});
