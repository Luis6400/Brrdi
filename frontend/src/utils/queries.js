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
            followers
            following
            chrrps {
                _id
                chrrpText
                chrrpAuthor {
                    _id
                    userName
                }
                chrrpDate
                chrrpLikes
                chrrpRechrrps
                deleted
            }
        }
    }
`;

export const GET_FEED = gql`
    query getFeed {
        chrrps {
            _id
            chrrpText
            chrrpAuthor {
                _id
                userName
            }
            chrrpDate
            chrrpLikes
            chrrpRechrrps
            parentChrrp {
                _id
                chrrpText
                chrrpAuthor {
                    _id
                    userName
                }
                chrrpDate
                chrrpLikes
                chrrpRechrrps
            }
            deleted
        }
    }
`;

export const GET_CHRRP = gql`
    query getChrrp($chrrpId: ID!) {
        chrrp(chrrpId: $chrrpId) {
            _id
            chrrpText
            chrrpAuthor {
                _id
                userName
            }
            chrrpDate
            chrrpLikes
            chrrpRechrrps
            parentChrrp {
                _id
                chrrpText
                chrrpAuthor {
                    _id
                    userName
                }
                chrrpDate
                chrrpLikes
                chrrpRechrrps
            }
            deleted
        }
    }
`;






