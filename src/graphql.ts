import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://test.frontend.api.brainny.cc/graphql',
});


const authLink = setContext((_, { headers }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const token = userInfo.jwt;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

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
      user {
        id
        role {
          name
        }
      }
    }
  }
`;

export const TIMES_REGISTREDS = gql`
    query {
      registeredTimes {
        id
    	  timeRegistered
    	  user {
        id 
        name
      }
    }
  }
  `

export const CREATE_TIME = gql`
  mutation CreateTime($timeRegistered: DateTime!, $userId: ID!){
    createRegisteredTime(input: {data: {timeRegistered: $timeRegistered, user: $userId}}) {
    	registeredTime {
				id
        user {
					id
          name
        }
        timeRegistered
      }
    }
  }
`

