import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

//import schema
const typeDefs = readFileSync('./schema.graphql', 'utf8');

//import local data
import db from '/src/_db.js';



const resolvers = {
    Query: {
        games() {return db.games},
        reviews() {return db.reviews},
        authors() {return db.authors},
        review(_: any, args: { id: string }) {return db.reviews.find((review: any) => review.id === args.id)},
    }
};

//Server Setup
const server = new ApolloServer({
    typeDefs,
    resolvers 
});

const { url } = await startStandaloneServer(server, { listen: {port: 4000} });

console.log(`🚀 Server ready at port`, 4000);