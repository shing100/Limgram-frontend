import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

const FEED_QUERY = gql`
{
    seeFeed {
        ok
        posts {
            id
            location
            caption
            user {
                id
                avatar
                username
            }
            files {
                id
                url
            }
            likeCount
            isLiked
            comments {
                id
                text
                user {
                    id
                    username
                    createdAt
                }
            }
        }
    }
}
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh
`;

export default () => {
    const { data, loading } = useQuery(FEED_QUERY);
    if(loading){
        return (
            <Wrapper>
                {loading && <Loader />}
            </Wrapper>
        )
    }else {
        return null;
    }
}