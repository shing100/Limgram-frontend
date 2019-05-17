import gql from "gql";

export const TOGGLE_LIKE = gql`
    mutation toggleLike($postId: String!){
        toggleLike(postId: $postId){
            ok
            error
        }
    }
`

export const ADD_COMMENT = gql`
    mutation addComment($postId: String!, $text: String!){
        addComment(postId: $postId, text:$text){
            ok
            error
            comment {
                id
                text
                user {
                    username
                }
            }
        }
    }
`