/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
  Upload: any;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Dog = {
  __typename?: "Dog";
  breed: Scalars["String"];
  displayImage?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  images?: Maybe<Array<Maybe<Image>>>;
  subbreeds?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type Image = {
  __typename?: "Image";
  id: Scalars["String"];
  url: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  dog?: Maybe<Dog>;
  dogs?: Maybe<Array<Maybe<Dog>>>;
};

export type QueryDogArgs = {
  breed: Scalars["String"];
};

export type GetDogQueryVariables = Exact<{ [key: string]: never }>;

export type GetDogQuery = {
  __typename?: "Query";
  dogs?: Array<{ __typename?: "Dog"; id: string; breed: string } | null> | null;
};

export const GetDogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetDog" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "dogs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "breed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDogQuery, GetDogQueryVariables>;
