import { ApolloClient, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
    uri : "https://todolist-exercise.hasura.app/v1/graphql",
    cache : new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret' : 'SHU7LgGVXZaeEK8cfHOooC4RFsL1guX80xCIyJHW57gdO8n5IiohHo1feeYNfsiO'
    },
})

export default client