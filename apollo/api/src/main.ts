import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
const myEnv = dotenv.config()
dotenvExpand(myEnv)

import { ApolloServer } from 'apollo-server'
import typeDefs from './functions/schema'
import resolvers from './functions/resolver'

const server = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: true,
    playground: true,
})

server.listen().then(({ url }) => console.log(`Server ready at ${url}. `))

// Hot Module Replacement
if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => server.stop())
}
