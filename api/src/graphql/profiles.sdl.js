export const schema = gql`
  type Profile {
    id: String!
    fullName: String!
    gender: String
    oldId: String
    slug: String
    email: String
    facebookId: String
    phoneNumber: String
    birthday: DateTime
    joinDate: DateTime
    dayOfBirth: Int
    monthOfBirth: Int
    yearOfBirth: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    group: Group
    groupId: String
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: String!): Profile @requireAuth
  }

  input CreateProfileInput {
    fullName: String!
    gender: String
    oldId: String
    slug: String
    email: String
    facebookId: String
    phoneNumber: String
    birthday: DateTime
    joinDate: DateTime
    dayOfBirth: Int
    monthOfBirth: Int
    yearOfBirth: Int
    groupId: String
  }

  input UpdateProfileInput {
    fullName: String
    gender: String
    oldId: String
    slug: String
    email: String
    facebookId: String
    phoneNumber: String
    birthday: DateTime
    joinDate: DateTime
    dayOfBirth: Int
    monthOfBirth: Int
    yearOfBirth: Int
    groupId: String
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: String!, input: UpdateProfileInput!): Profile!
      @requireAuth
    deleteProfile(id: String!): Profile! @requireAuth
  }
`
