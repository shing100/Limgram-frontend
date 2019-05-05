import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
    uri: "http://nsnl.site:4000/graphql",
    clientState: {
        defaults,
        resolvers
    }
});