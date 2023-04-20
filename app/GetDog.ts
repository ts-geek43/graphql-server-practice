import { graphql } from "../src/generated";

const GetDog = graphql(`
  query GetDog {
    dogs {
      id
      breed
    }
  }
`);
