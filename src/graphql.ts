import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://test.frontend.api.brainny.cc/graphql",
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkyOTc4OTMxLCJleHAiOjE2OTU1NzA5MzF9.fsJfeUytBhAkisNwuLZFYem_dOBWO0LGr3tReAT4SdM"
  },
  cache: new InMemoryCache()
})

export const GET_LOGIN = gql`
  query {
    users {
      username
      email
      role {
        id
        name
        description
        type
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
mutation Login($email: String!, $password: String!){
  login(input: {identifier: $email, password: $password}) {
    jwt
  }
}
`;

export const TIMES_REGISTREDS = gql`
  query {
    registeredTimes {
      id
    	timeRegistered
    	user {
      id name
    }
  }
  }
`
