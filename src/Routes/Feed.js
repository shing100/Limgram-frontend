import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

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
                 <Helmet>
                    <title>Feed | Limgram</title>
                </Helmet>
                {loading && <Loader />}
                {!loading && data && data.seeFeed 
                    && data.seeFeed.map(post => 
                        (
                            <Post 
                                key={post.id} 
                                id={post.id} 
                                location={post.location}
                                caption={post.caption}
                                user={post.user} 
                                files={files}
                                likeCount={likeCount}
                                isLiked={isLiked}
                                comments={comments}
                                createdAt={createdAt}
                            />
                        )
                    )}
            </Wrapper>
        )
    }else {
        return null;
    }
}