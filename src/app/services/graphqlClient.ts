import { GraphQLClient } from "graphql-request";

const endpoint = "https://gql.hashnode.com/";

export const client = new GraphQLClient(endpoint);
