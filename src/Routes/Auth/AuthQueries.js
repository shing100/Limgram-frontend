import { gql } from "apollo-boost";

export const LOG_IN = gql`
    mutation requestSecret($email: String!) {
        requestSecret(email: $email){
            ok
            error
        }
    }
`

export const CREATE_ACCOUNT = gql`
    mutation createAccount($email: String!, $username: String!, $firstName: String, $lastName: String) {
        createAccount(
            username: $username,
            email: $email,
            firstName: $firstName,
            lastName: $lastName
        ) {
            ok
            error
        }
    }
`

export const CONFIRM_SECRET = gql`
    mutation confirmSecret($secret: String!, $email: String!){
        confirmSecret(secret:$secret, email:$email){
            ok
            error
            token
        }
    }
`

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token: String!) {
        logUserIn(token: $token) @client
    }
`