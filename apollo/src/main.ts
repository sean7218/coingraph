import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';


const myEnv = dotenv.config();
dotenvExpand(myEnv);
console.log("myEnv", myEnv)

import { ApolloServer, gql } from 'apollo-server';
import { getAllUsers } from './functions/queries';

getAllUsers().catch(error => {
  console.log(error)
}).then(data => console.log(data))

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type User {
    user_id: Int
    email: String
    username: String
  }

  type Query {
    books: [Book]
    book: Book
    users: [User]
  }
`;

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
];


const resolvers = {
    Query: {
      books: () => books,
      book: () => books[0],
      users: () => getAllUsers()
    },
};

const server = new ApolloServer({ 
    resolvers, 
    typeDefs,
    introspection: true,
    playground: true
 });

server.listen()
  .then(({ url }) => console.log(`Server ready at ${url}. `));

console.log("hi sean what is your fav fruit")
// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
  }