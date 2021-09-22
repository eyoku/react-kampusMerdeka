import {
  ApolloClient, InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://kampusmerdekaevan.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
      'x-hasura-admin-secret' : 'PBgCl5dVaXDvbWkl2oZZGbWYippAGX5tnbe02pcBk266frChyXMYQS65rHSl22H8'
  }
});

export default client