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
    mutation createAccount($email: String! $username: String! $firstName: String $lastName: String) {
        createAccount(
            username: $username
            email: $email
            firstName: $firstName
            lastName: $lastName
        ) {
            ok
            error
        }
    }
`