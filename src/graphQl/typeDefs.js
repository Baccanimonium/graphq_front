export const typeDefs = `
    type Todo {
        id: Int!
        text: String!
        completed: Boolean!
    }
    
    type Mutation {
        addTodo(text: String!): Todo
        toggleTodo(id: Int!): Todo
    }
    
    type Query {
        openSearchBar: Boolean
        todos: [Todo]
    }
`;