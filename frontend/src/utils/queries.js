import { gql } from '@apollo/client';


export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            userName
            email
            bio
            chrrps {
                _id
                chrrpText
                createdAt
                chrrpAuthor {
                    _id
                    userName
                }
            }
        }
    }
`;

export const QUERY_USER = gql`
    query singleUser($userName: String!) {
        user(userName: $userName) {
            _id
            userName
            email
            bio
            followers {
                _id
                userName
            }
            following {
                _id
                userName
            }
            chrrps {
                _id
                chrrpText
                createdAt
                chrrpAuthor {
                    _id
                    userName
                }
            }
        }
    }
`;

export const QUERY_ME = gql`
    query {
        me {
            _id
            userName
            email
            bio
            followers {
                _id
                userName
            }
            following {
                _id
                userName
            }
            chrrps {
                _id
                chrrpText
                createdAt
                chrrpAuthor {
                    _id
                    userName
                }
            }
        }
    }
`;






