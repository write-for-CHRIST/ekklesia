export const schema = gql`
  type Group {
    id: String!
    name: String!
    slug: String
    year: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    Profile: [Profile]!
  }

  type Query {
    groups: [Group!]! @requireAuth
    group(id: String!): Group @requireAuth
  }

  input CreateGroupInput {
    name: String!
    slug: String
    year: Int
  }

  input UpdateGroupInput {
    name: String
    slug: String
    year: Int
  }

  type Mutation {
    createGroup(input: CreateGroupInput!): Group! @requireAuth
    updateGroup(id: String!, input: UpdateGroupInput!): Group! @requireAuth
    deleteGroup(id: String!): Group! @requireAuth
  }
`
